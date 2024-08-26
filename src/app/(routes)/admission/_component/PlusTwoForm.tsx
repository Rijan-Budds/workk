'use client'

import React, { useState } from 'react'
import { MultipleSteps } from './StepUi'
import { Form, Formik } from 'formik'
import { StepOne } from './PlusTwo/StepOne'
import { StepTwo } from './PlusTwo/StepTwo'
import * as Yup from 'yup'
import { fullNameValidation } from '@/common/utils/validation'

export const PlusTwoForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(1)

  console.log('currr', currentStep)

  const handleNext = () => {
    setCurrentStep((prev) => prev + 1)
  }

  return (
    <div className=" bg-background w-full rounded-xl p-6 flex flex-col gap-y-10">
      <MultipleSteps />

      <h1 className="text-heading font-poppins text-[20px] leading-[26px] font-medium">
        Personal Information
      </h1>
      <Formik
        initialValues={{}}
        onSubmit={(values) => console.info(values)}
        validateOnChange
        validationSchema={Yup.object().shape({
          firstName: fullNameValidation,
        })}
      >
        {(formik) => {
          const { setFieldValue, errors, values } = formik

          console.log('errors', errors)
          console.log('values', values)

          return (
            <Form>
              {currentStep === 1 ? (
                <StepOne
                  setFieldValue={setFieldValue}
                  handleNext={handleNext}
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
