import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}

export const calculatePrice = (cantidad: number, precio: number) => {
  return Number(((cantidad + 1) * precio).toFixed(2))
}

export const getCurrentDate = () => {
  const date = new Date()
  return date.toISOString().substring(0, 10)
}
