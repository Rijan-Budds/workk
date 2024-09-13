'use client'

import axios from 'axios'
import { toast } from '../hook/use-toast'
import { ToastClose } from '../components/ui/toast'
import Image from 'next/image'

interface ValidationErrorDetail {
  field: string
  message: string
}

const Axios = axios.create({
  baseURL: `${process.env.NEXT_PULIC_BASE_URL}`,
})

// Response interceptor to handle errors
Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      switch (error.response.data.status) {
        case 400:
          toast({
            title: 'Only PDF files are allowed!',
            action: (
              <ToastClose>
                <Image
                  src={'/admission/toast-close.svg'}
                  width={20}
                  height={20}
                  alt="close icon"
                />
              </ToastClose>
            ),
            className:
              'bg-errorLighter py-[18px] px-4 text-error font-workSans text-[16px] leading-4 font-medium',
          })
          break
        case 412:
          const details = error.response.data.details
            .map(
              (detail: ValidationErrorDetail) =>
                `${detail.field}: ${detail.message}`
            )
            .join(', ')
          toast({
            title: details,
            action: (
              <ToastClose>
                <Image
                  src={'/admission/red-cross-toast.svg'}
                  width={20}
                  height={20}
                  alt="close icon"
                />
              </ToastClose>
            ),
            className:
              'bg-errorLighter py-[18px] px-4 text-error font-workSans text-[16px] leading-4 font-medium',
          })
        default:
          // Handle other errors
          break
      }
    }
    return Promise.reject(error)
  }
)

export default Axios
