/**
 * Auth API Service
 *
 * Handles all authentication-related API calls
 */

import { apiClient } from './client'
import type {
  RegisterRequest,
  RegisterResponse,
  SendSmsRequest,
  SendSmsResponse,
  VerifySmsRequest,
  VerifySmsResponse,
  UserProfile,
} from './types'

export const authApi = {
  /**
   * Register a new user with UTM code
   * @param utm - UTM code from URL path
   * @param data - Registration data (phone_number, name)
   */
  register: (utm: string, data: RegisterRequest): Promise<RegisterResponse> =>
    apiClient.post<RegisterResponse>(`/auth/register/${utm}`, data),

  /**
   * Send SMS verification code
   * @param data - Phone number to send SMS to
   */
  sendSms: (data: SendSmsRequest): Promise<SendSmsResponse> =>
    apiClient.post<SendSmsResponse>('/auth/send_sms/', data),

  /**
   * Verify SMS code and get tokens
   * @param data - Phone number and SMS code
   */
  verifySms: (data: VerifySmsRequest): Promise<VerifySmsResponse> =>
    apiClient.post<VerifySmsResponse>('/auth/verify_sms/', data),

  /**
   * Get current user profile
   * @param token - Access token
   */
  getProfile: (token: string): Promise<UserProfile> =>
    apiClient.get<UserProfile>('/auth/user/me', token),
}

export default authApi
