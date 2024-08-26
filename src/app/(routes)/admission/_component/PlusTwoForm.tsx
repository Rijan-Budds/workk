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
  const inputStyle = {
    input: 'border-[1px] border-border shadow-sm placeholder:text-[14px] ',
    label: 'text-body font-normal',
  }

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
    document: undefined,
    fatherName: '',
    fatherProfession: '',
    fatherMobileNumber: '',
    localGuardainName: '',
    localGuardianProfesstion: '',
    localGuardianPhoneNumber: '',
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

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={Yup.object().shape(validationSchema)}
      >
        {(formik) => {
          const { setFieldValue, setFieldError, errors, touched, values } =
            formik
          return (
            <Form>
              {currentStep === 0 ? (
                <StepOne
                  setFieldValue={setFieldValue}
                  errors={errors}
                  touched={touched}
                  setFieldError={setFieldError}
                  inputStyle={inputStyle}
                  values={values}
                />
              ) : (
                <StepTwo
                  errors={errors}
                  touched={touched}
                  setFieldError={setFieldError}
                  setStep={setCurrentStep}
                  inputStyle={inputStyle}
                  setFieldValue={setFieldValue}
                />
              )}
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
