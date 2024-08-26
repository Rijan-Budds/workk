import { Button } from '@/common/components/Atom/Button'
import { Input } from '@/common/components/Atom/Input'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'
import { ImageDropZone } from '@/common/components/Molecules/ImageDropZone'
import React, { MouseEventHandler } from 'react'

export const StepOne = ({
  setFieldValue,
  handleNext,
}: {
  setFieldValue(field: string, value: string): void
  handleNext: MouseEventHandler<HTMLButtonElement>
}) => {
  const inputStyle = {
    input: 'border-[1px] border-border shadow-sm placeholder:text-[14px] ',
    label: 'text-body font-normal',
  }
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="First Name"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your name"
          name="firstName"
          error="Pease enter first name"
          className={inputStyle.input}
          isPage
          isError
        />
        <Input
          label="Middle Name"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your middle name"
          name="middle name"
          error="Pease enter MiddleName"
          className={inputStyle.input}
        />
        <Input
          label="Last Name"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your last name"
          name="last name"
          error="Pease enter last name"
          className={inputStyle.input}
        />
      </div>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="Street Address"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your Street Address"
          name="Street Address"
          error="Pease enter Street Address"
          className={inputStyle.input}
        />
        <Input
          label="City"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your City"
          name="City"
          error="Pease enter City"
          className={inputStyle.input}
        />
        <Input
          label="Province No"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your Province No"
          name="Province No"
          error="Pease enter Province No"
          className={inputStyle.input}
        />
      </div>

      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <CustomDropdown
          setFieldValue={setFieldValue}
          isError={false}
          error="Please choose option"
          list={[
            { title: 'Male', value: 'male' },
            { title: 'Female', value: 'female' },
          ]}
          placeHolder={'Select gender'}
          label="Gender"
        />
        <Input
          label="Date Of Birth (AD)"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your D.O.B"
          name="date-of-birth"
          error="Pease enter Date"
          className={inputStyle.input}
        />
        <Input
          label="Mobile No"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your mobile no"
          name="mobile"
          error="Pease enter mobile"
          className={inputStyle.input}
        />
      </div>
      <Input
        label="Email"
        isRequired={false}
        labelClass={inputStyle.label}
        placeholder="Your Email"
        name="email"
        error="Pease enter email"
        className={inputStyle.input}
      />
      <ImageDropZone />
      <Button type="button" onClick={handleNext}>
        Next
      </Button>
    </div>
  )
}
