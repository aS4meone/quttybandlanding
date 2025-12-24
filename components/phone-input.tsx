'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: string
  onChange: (rawValue: string) => void
}

/**
 * Phone input with mask +7 (XXX) XXX-XX-XX
 * Returns raw value in format: 7XXXXXXXXXX (11 digits)
 */
export function PhoneInput({
  value,
  onChange,
  className,
  ...props
}: PhoneInputProps) {
  // Format raw phone number to display format
  const formatPhoneDisplay = (raw: string): string => {
    // Remove all non-digits
    const digits = raw.replace(/\D/g, '')

    // Ensure it starts with 7
    let normalized = digits
    if (digits.startsWith('8')) {
      normalized = '7' + digits.slice(1)
    } else if (!digits.startsWith('7') && digits.length > 0) {
      normalized = '7' + digits
    }

    // Limit to 11 digits
    normalized = normalized.slice(0, 11)

    // Build formatted string
    if (normalized.length === 0) return ''
    if (normalized.length === 1) return '+7'

    let formatted = '+7 ('

    // Add area code (digits 2-4)
    formatted += normalized.slice(1, 4)

    // Close parenthesis only if we have all 3 digits of area code
    if (normalized.length >= 4) {
      formatted += ') '
    }

    // Add first part of number (digits 5-7)
    if (normalized.length > 4) {
      formatted += normalized.slice(4, 7)
    }

    // Add second part (digits 8-9)
    if (normalized.length > 7) {
      formatted += '-' + normalized.slice(7, 9)
    }

    // Add third part (digits 10-11)
    if (normalized.length > 9) {
      formatted += '-' + normalized.slice(9, 11)
    }

    return formatted
  }

  // Parse display format to raw digits
  const parseToRaw = (formatted: string): string => {
    const digits = formatted.replace(/\D/g, '')

    // Normalize to start with 7
    if (digits.startsWith('8')) {
      return '7' + digits.slice(1)
    }
    if (!digits.startsWith('7') && digits.length > 0) {
      return '7' + digits
    }

    return digits.slice(0, 11)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const rawValue = parseToRaw(input)
    onChange(rawValue)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      e.preventDefault()

      // Remove last digit, but keep at least "7" (country code)
      if (value.length > 1) {
        onChange(value.slice(0, -1))
      }
      // Don't allow deleting the country code
    }
  }

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    // If empty, start with +7
    if (!value) {
      onChange('7')
    }
    props.onFocus?.(e)
  }

  const displayValue = formatPhoneDisplay(value)

  return (
    <input
      type="tel"
      inputMode="numeric"
      autoComplete="tel"
      value={displayValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      onFocus={handleFocus}
      placeholder="+7 (___) ___-__-__"
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-12 w-full min-w-0 rounded-xl border bg-transparent px-4 py-3 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  )
}
