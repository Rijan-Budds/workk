import React from 'react'
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
        value={value}
        onValueChange={(value: string) =>
          setFieldValue && setFieldValue(field, value)
        }
      >
        <SelectTrigger className="rounded-lg p-4 ">
          <SelectValue placeholder={placeHolder} />
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
