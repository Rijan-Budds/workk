'use client'

import * as React from 'react'

import { Field } from 'formik'
import { cn } from '@/common/utils/utils'
import { FiChevronDown } from 'react-icons/fi'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  isRequired: boolean
  isMessage?: boolean
  rows?: number
  error: string
  isError?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      isRequired,
      error,
      isMessage = false,
      rows,
      isError,
      ...props
    },
    ref
  ) => {
    console.error(error)
    return (
      <div className="flex flex-col  items-start gap-y-[6px] w-full ">
        <label
          className="text-white font-medium text-[14px]  leading-4 "
          htmlFor={label}
        >
          {label} {!isRequired && '(वैकल्पिक)'}
        </label>
        <Field
          autoComplete="off"
          name={props.name}
          type={type}
          className={cn(
            'flex min-h-[48px] relative text-black bg-white text-[16px]  max-h-[200px] w-full  rounded-[8px] border-stone-100   px-4 py-3  ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#5D5F69]  focus:outline-none disabled:cursor-not-allowed disabled:opacity-50  font-workSans placeholder:font-workSans ',
            className,
            {
              'border-red-300': isError,
            }
          )}
          ref={ref}
          {...(isMessage ? { as: 'textarea', rows } : {})}
          {...props}
        />
        {label === 'Level' && (
          <FiChevronDown className="absolute right-12 -translate-y-1/2 w-4  text-black top-1/2" />
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
