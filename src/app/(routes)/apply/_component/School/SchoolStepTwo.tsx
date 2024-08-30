import React from 'react'
import { IStepProps } from '../../interface/type'
import { StepTwo } from '../PlusTwo/StepTwo'

export const SchoolStepTwo = ({
  errors,
  inputStyle,
  touched,
  setFieldError,
  setFieldValue,
}: IStepProps) => {
  return (
    <StepTwo
      errors={errors}
      inputStyle={inputStyle}
      touched={touched}
      setFieldError={setFieldError}
      setFieldValue={setFieldValue}
    />
  )
}
