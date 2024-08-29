import React from 'react'
import { IStepProps } from '../../interface/type'
import { StepFour } from '../PlusTwo/StepFour'

export const SchoolStepThree = ({
  errors,
  inputStyle,
  touched,
  setFieldError,
  setFieldValue,
  values,
}: IStepProps) => {
  return (
    <StepFour
      errors={errors}
      inputStyle={inputStyle}
      touched={touched}
      setFieldError={setFieldError}
      setFieldValue={setFieldValue}
      values={values}
    />
  )
}
