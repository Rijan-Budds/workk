'use client'

import React, { useState } from 'react'
import { Calendar } from '../ui/calendar'
import Image from 'next/image'
import { format } from 'date-fns'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { ErrorComponent } from './Input'
import { cn } from '@/common/utils/utils'

export const InputWithDate = ({
  label,
  setValue,
  error,
  isError,
}: {
  label: string
  setValue: (field: string, value: string) => void
  error: string
  isError: boolean
}) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [selected, setSelected] = useState<boolean>(false)

  return (
    <div className="w-full flex flex-col gap-y-1">
      <Popover>
        <label
          htmlFor={label}
          className="text-body font-normal text-[14px] leading-4 font-workSans mb-[6px]"
        >
          {label}
        </label>
        <PopoverTrigger asChild>
          <div
            className={cn(
              'flex justify-between min-h-[48px] text-black bg-white text-[16px] max-h-[200px] w-full rounded-[8px]  px-4 py-3 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-workSans placeholder:font-workSans border-[1px] border-border shadow-sm placeholder:text-[14px]',
              {
                'border-error border-[1px]': isError,
              }
            )}
          >
            <span className="text-body ">
              {selected ? format(date!, 'PPP') : 'Pick a date'}
            </span>
            <Image
              src={'/admission/calender.svg'}
              width={16}
              height={16}
              alt="calendar icon"
            />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="end">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date: Date) => {
              setSelected(true)
              setDate(date)
              setValue('dateOfBirth', format(date!, 'PPP'))
            }}
            disabled={(date: Date) =>
              date > new Date() || date < new Date('1900-01-01')
            }
            className="rounded-md border font-workSans"
          />
        </PopoverContent>
      </Popover>
      {isError && <ErrorComponent error={error} />}
    </div>
  )
}
