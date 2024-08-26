import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const byteToMb = (bytes: number) => (bytes / (1024 * 1024)).toFixed(2)

export const checkFileType = (file: string) =>
  file.startsWith('image/') ? 'image' : 'pdf'

export const convertFileToSrc = (file: File) => URL.createObjectURL(file)
