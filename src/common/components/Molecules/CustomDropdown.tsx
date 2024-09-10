'use client'

import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { ErrorComponent } from '../Atom/Input'
import { IDropdownList } from '@/common/interface/type'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

interface ICustomDropdownProps {
  setFieldValue?: (field: string, value: string) => void
  error: string | undefined
  isError: boolean | undefined
  list: IDropdownList[]
  placeHolder: string
  label: string
  field: string
  isRequired: boolean
  value: string
  classNameLabel?: string
}

export const CustomDropdown = ({
  error,
  isError,
  setFieldValue,
  list,
  placeHolder,
  label,
  field,
  isRequired,
  value,
  classNameLabel,
}: ICustomDropdownProps) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <label
        htmlFor={label}
        className={cn(
          'text-body font-normal text-[14px] leading-4 font-workSans',
          classNameLabel
        )}
      >
        {label} {isRequired && '*'}
      </label>
      <Select
        open={open}
        value={value}
        onOpenChange={() => setOpen((prev) => !prev)}
        onValueChange={(value: string) =>
          setFieldValue && setFieldValue(field, value)
        }
      >
        <SelectTrigger className="rounded-lg p-4 text-body leading-4 text-[14px] font-workSans ">
          <SelectValue placeholder={placeHolder} />
          <ChevronDown
            className={cn('h-4 w-4 text-body transition-all duration-500', {
              'rotate-180 transition-all duration-500': open,
            })}
          />
        </SelectTrigger>
        <SelectContent className="border-b-2 border-border">
          <SelectGroup>
            {list.map((d) => (
              <SelectItem
                key={d.value}
                value={d.value}
                className="font-poppins text-body"
              >
                {d.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {isError && <ErrorComponent error={error ? error : ''} />}
    </div>
  )
}
