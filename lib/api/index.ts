/**
 * API Module Exports
 *
 * Central export point for all API-related functionality
 */

export { apiClient, ApiException } from './client'
export type { ApiError } from './client'

export { authApi } from './auth'

export type {
  RegisterRequest,
  RegisterResponse,
  SendSmsRequest,
  SendSmsResponse,
  VerifySmsRequest,
  VerifySmsResponse,
  UserProfile,
} from './types'
