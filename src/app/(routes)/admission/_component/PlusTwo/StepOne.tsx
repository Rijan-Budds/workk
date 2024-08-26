import { Button } from '@/common/components/Atom/Button'
import { Input } from '@/common/components/Atom/Input'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'
import { ImageDropZone } from '@/common/components/Molecules/ImageDropZone'
import { FormikErrors, FormikTouched } from 'formik'
import React, { MouseEventHandler } from 'react'
import { IStepOneError, IStepOneTouched } from '../../interface/type'
import { provinces } from '../../constant/data'

export const StepOne = ({
  setFieldValue,
  handleNext,
  errors,
  touched,
  setFieldError,
}: {
  setFieldValue(field: string, value: string): void
  handleNext: MouseEventHandler<HTMLButtonElement>
  errors: FormikErrors<IStepOneError>
  touched: FormikTouched<IStepOneTouched>
  setFieldError: (field: string, message: string | undefined) => void
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
          error={errors!.firstName}
          className={inputStyle.input}
          isPage
          isError={!!errors!.firstName && touched.firstName}
        />
        <Input
          label="Middle Name"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your middle name"
          name="middleName"
          error={errors.middleName}
          className={inputStyle.input}
          isError={!!errors.middleName && touched.middleName}
        />
        <Input
          label="Last Name"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your last name"
          name="lastName"
          error={errors.lastName}
          className={inputStyle.input}
          isError={!!errors.lastName && touched.lastName}
        />
      </div>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="Street Address"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your Street Address"
          name="street"
          error={errors.street}
          className={inputStyle.input}
          isError={!!errors.street && touched.street}
        />
        <Input
          label="City"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your City"
          name="city"
          error={errors.city}
          className={inputStyle.input}
          isError={!!errors.city && touched.city}
        />

        <CustomDropdown
          setFieldValue={setFieldValue}
          isError={!!errors.province}
          error={errors.province}
          list={provinces}
          placeHolder={'Your Province No'}
          label="Province No"
          field={'province'}
        />
      </div>

      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <CustomDropdown
          setFieldValue={setFieldValue}
          isError={!!errors.gender}
          error={errors.gender}
          list={[
            { title: 'Male', value: 'male' },
            { title: 'Female', value: 'female' },
          ]}
          placeHolder={'Select gender'}
          label="Gender"
          field="gender"
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
          name="mobileNumber"
          error={errors.mobileNumber}
          className={inputStyle.input}
          isError={!!errors.mobileNumber && touched.mobileNumber}
        />
      </div>
      <Input
        label="Email"
        isRequired={false}
        labelClass={inputStyle.label}
        placeholder="Your Email"
        name="email"
        error={errors.email}
        className={inputStyle.input}
        isError={!!errors.email && touched.email}
      />
      <ImageDropZone
        isError={!!errors.document}
        error={errors.document}
        setValue={setFieldValue}
        setError={setFieldError}
      />
      <Button type="submit" onClick={handleNext} className="w-fit ml-auto">
        Next
      </Button>
    </div>
  )
}
