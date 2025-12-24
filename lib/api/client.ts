/**
 * Scalable API Client for Qutty Band
 *
 * This module provides a type-safe, extensible HTTP client
 * for communicating with the backend API.
 */

const API_BASE_URL = 'https://bandapi.qutty.net'

export interface ApiError {
  detail: string
  status: number
}

export class ApiException extends Error {
  constructor(
    public detail: string,
    public status: number
  ) {
    super(detail)
    this.name = 'ApiException'
  }
}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

interface RequestConfig {
  method: HttpMethod
  headers?: Record<string, string>
  body?: unknown
  token?: string
}

/**
 * Core fetch wrapper with error handling and type safety
 */
async function request<T>(
  endpoint: string,
  config: RequestConfig
): Promise<T> {
  const { method, body, token } = config

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...config.headers,
  }

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  const url = `${API_BASE_URL}${endpoint}`

  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    let errorDetail = 'An unexpected error occurred'

    try {
      const errorData = await response.json()
      errorDetail = errorData.detail || errorDetail
    } catch {
      // Response is not JSON
    }

    throw new ApiException(errorDetail, response.status)
  }

  return response.json() as Promise<T>
}

/**
 * API Client with typed methods for each HTTP verb
 */
export const apiClient = {
  get: <T>(endpoint: string, token?: string) =>
    request<T>(endpoint, { method: 'GET', token }),

  post: <T>(endpoint: string, body?: unknown, token?: string) =>
    request<T>(endpoint, { method: 'POST', body, token }),

  put: <T>(endpoint: string, body?: unknown, token?: string) =>
    request<T>(endpoint, { method: 'PUT', body, token }),

  patch: <T>(endpoint: string, body?: unknown, token?: string) =>
    request<T>(endpoint, { method: 'PATCH', body, token }),

  delete: <T>(endpoint: string, token?: string) =>
    request<T>(endpoint, { method: 'DELETE', token }),
}

export default apiClient
