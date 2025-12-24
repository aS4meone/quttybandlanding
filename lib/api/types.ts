/**
 * API Types for Qutty Band Backend
 *
 * Centralized type definitions for API requests and responses
 */

// Auth Types
export interface RegisterRequest {
  phone_number: string // Only digits, e.g., "77771234567"
  name: string // Required: "Имя Фамилия"
}

export interface RegisterResponse {
  id: number
  phone_number: string
  name: string
  utm: string
  message: string
}

export interface SendSmsRequest {
  phone_number: string
}

export interface SendSmsResponse {
  message: string
}

export interface VerifySmsRequest {
  phone_number: string
  sms_code: string
}

export interface VerifySmsResponse {
  access_token: string
  refresh_token: string
  token_type: 'bearer'
}

export interface UserProfile {
  id: number
  phone_number: string
  name: string | null
  sex: string | null
  height_cm: number | null
  weight_kg: number | null
  birth_date: string | null
  is_onboarded: boolean
  ever_connected_band: boolean
}
