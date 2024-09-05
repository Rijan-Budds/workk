'use client'

import React, { useState } from 'react'
import { MultipleSteps } from './StepUi'
import { Form, Formik, FormikValues } from 'formik'
import * as Yup from 'yup'
import {
  initialValues,
  MultiStepFormInputStyle,
  StepComponentPlusTwo,
  ValidationSchemas,
} from '../constant/data'
import { Button } from '@/common/components/Atom/Button'
import axios from 'axios'

interface IPlusTwoFormProps {
  onFormChange: (isDirty: boolean) => void
}

export const PlusTwoForm: React.FC<IPlusTwoFormProps> = ({ onFormChange }) => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [completedSteps] = useState<number[]>([])

  const handleNext = () => {
    completedSteps.push(currentStep)
    setCurrentStep((prev) =>
      Math.min(prev + 1, StepComponentPlusTwo.length - 1)
    )
  }

  const handlePrev = () => {
    completedSteps.pop()
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = async (values: FormikValues) => {
    if (currentStep < StepComponentPlusTwo.length - 1) {
      handleNext()
    } else {
      console.info('Final Values:', values)

      const formData = new FormData()
      Object.keys(values).forEach((key) => {
        formData.append(key, values[key])
      })

      try {
        const response = await axios.post(
          'http://192.168.110.52:3000/api/v1/application/register',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        console.info('Response:', response.data)
      } catch (error) {
        console.error('Error submitting form:', error)
      }
    }
  }

  return (
    <div className=" bg-background w-full rounded-xl p-6 flex flex-col gap-y-10">
      <MultipleSteps
        activeIndex={currentStep}
        steps={StepComponentPlusTwo.length}
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
            dirty,
          } = formik

          const StepComponentsPlusTwo = StepComponentPlusTwo[currentStep]

          onFormChange(dirty)
          return (
            <Form>
              <StepComponentsPlusTwo
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
                setFieldError={setFieldError}
                inputStyle={MultiStepFormInputStyle}
                values={values}
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
                  {currentStep < StepComponentPlusTwo.length - 1
                    ? 'Next'
                    : 'Submit'}
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
