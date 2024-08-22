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

interface ICustomDropdownProps {
  setFieldValue: (field: string, value: string) => void
  error: string
  isError: boolean
  list: IDropdownList[]
  placeHolder: string
}

export const CustomDropdown = ({
  error,
  isError,
  setFieldValue,
  list,
  placeHolder,
}: ICustomDropdownProps) => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <Select onValueChange={(value: string) => setFieldValue('level', value)}>
        <SelectTrigger className="rounded-lg p-4 text-body">
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
        <SelectContent className="border-b-2 border-border">
          <SelectGroup>
            {list.map((d) => (
              <SelectItem key={d.value} value={d.value} className="">
                {d.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {isError && <ErrorComponent error={error} />}
    </div>
  )
}
