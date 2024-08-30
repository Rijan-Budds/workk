import React from 'react'
import { IStepProps } from '../../interface/type'
import { StepOne } from '../PlusTwo/StepOne'

export const SchoolStepOne = ({
  errors,
  inputStyle,
  setFieldError,
  setFieldValue,
  touched,
  values,
}: IStepProps) => {
  return (
    <StepOne
      errors={errors}
      inputStyle={inputStyle}
      setFieldError={setFieldError}
      setFieldValue={setFieldValue}
      values={values}
      touched={touched}
    />
  )
}
