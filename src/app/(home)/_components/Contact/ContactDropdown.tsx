import { ErrorComponent } from '@/common/components/Atom/Input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/common/components/ui/select'
import React from 'react'

interface IContactDropDownProps {
  setFieldValue: (field: string, value: string) => void
  error: string
  isError: boolean
}

export const ContactDropdown = ({
  setFieldValue,
  error,
  isError,
}: IContactDropDownProps) => {
  const dropDownList = [
    {
      title: 'School',
      value: 'school',
    },
    {
      title: 'Plus Two',
      value: 'plus-two',
    },
  ]

  return (
    <div className="flex flex-col gap-y-2">
      <Select onValueChange={(value: string) => setFieldValue('level', value)}>
        <SelectTrigger className="rounded-lg p-4 text-body">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent className="border-b-2 border-border">
          <SelectGroup>
            {dropDownList.map((list) => (
              <SelectItem key={list.value} value={list.value} className="">
                {list.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {isError && <ErrorComponent error={error} />}
    </div>
  )
}
