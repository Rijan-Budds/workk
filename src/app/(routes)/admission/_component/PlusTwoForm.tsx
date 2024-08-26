'use client'

import React, { useState } from 'react'
import { MultipleSteps } from './StepUi'
import { Form, Formik, FormikValues } from 'formik'
import { StepOne } from './PlusTwo/StepOne'
import { StepTwo } from './PlusTwo/StepTwo'
import * as Yup from 'yup'
import {
  cityValidation,
  emailValidation,
  fileValidation,
  firstNameValidation,
  genderValidation,
  lastNameValidation,
  middleNameValidation,
  mobileNumberValidation,
  provinceNumberValidation,
  streetValidation,
} from '../validation'

export const PlusTwoForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const handleSubmit = (values: FormikValues) => {
    console.info(values)
    if (currentStep !== 2) {
      handleNext()
    }
  }

  const initialValues = {
    firstName: '',
    middleName: '',
    lastName: '',
    street: '',
    city: '',
    province: '',
    gender: '',
    mobileNumber: '',
    email: '',
    document: null,
  }

  const validationSchema = {
    firstName: firstNameValidation,
    middleName: middleNameValidation,
    lastName: lastNameValidation,
    street: streetValidation,
    city: cityValidation,
    province: provinceNumberValidation,
    gender: genderValidation,
    mobileNumber: mobileNumberValidation,
    email: emailValidation,
    document: fileValidation,
  }

  return (
    <div className=" bg-background w-full rounded-xl p-6 flex flex-col gap-y-10">
      <MultipleSteps activeIndex={currentStep} />

      <h1 className="text-heading font-poppins text-[20px] leading-[26px] font-medium">
        Personal Information
      </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={Yup.object().shape(validationSchema)}
      >
        {(formik) => {
          const { setFieldValue, setFieldError, errors, touched } = formik
          return (
            <Form>
              {currentStep === 0 ? (
                <StepOne
                  setFieldValue={setFieldValue}
                  handleNext={handleNext}
                  errors={errors}
                  touched={touched}
                  setFieldError={setFieldError}
                />
              ) : (
                <StepTwo />
              )}
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
