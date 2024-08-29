'use client'

import React, { useState } from 'react'
import { MultipleSteps } from './StepUi'
import { Form, Formik, FormikValues } from 'formik'
import * as Yup from 'yup'
import {
  initialValues,
  StepComponent,
  ValidationSchemas,
} from '../constant/data'
import { Button } from '@/common/components/Atom/Button'

export const PlusTwoForm = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [completedSteps] = useState<number[]>([])

  const inputStyle = {
    input: 'border-[1px] border-border shadow-sm placeholder:text-[14px] ',
    label: 'text-body font-normal',
  }

  const handleNext = () => {
    completedSteps.push(currentStep)
    setCurrentStep((prev) => Math.min(prev + 1, StepComponent.length - 1))
  }

  const handlePrev = () => {
    completedSteps.pop()
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = (values: FormikValues) => {
    if (currentStep < StepComponent.length - 1) {
      handleNext()
    } else {
      console.info('Final Values:', values)
      // Submit final form data here
    }
  }

  return (
    <div className=" bg-background w-full rounded-xl p-6 flex flex-col gap-y-10">
      <MultipleSteps
        activeIndex={currentStep}
        steps={StepComponent.length}
        completedIndex={completedSteps}
      />

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={Yup.object().shape(ValidationSchemas[currentStep])}
      >
        {(formik) => {
          const {
            setFieldValue,
            setFieldError,
            errors,
            touched,
            values,
            validateForm,
          } = formik
          const StepComponents = StepComponent[currentStep]

          return (
            <Form>
              <StepComponents
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
                setFieldError={setFieldError}
                inputStyle={inputStyle}
                values={values}
                handleClick={() => validateForm()}
              />

              <div className="flex justify-end  gap-x-3 mt-10 ml-auto">
                {currentStep > 0 && (
                  <Button
                    onClick={handlePrev}
                    type="button"
                    variant={'outline'}
                    className="w-fit"
                  >
                    Previous
                  </Button>
                )}
                <Button type="submit" className="w-fit">
                  {currentStep < StepComponent.length - 1 ? 'Next' : 'Submit'}
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
