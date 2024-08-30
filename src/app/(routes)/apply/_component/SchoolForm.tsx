import React, { useState } from 'react'
import { MultipleSteps } from './StepUi'
import {
  schoolInitialValues,
  StepComponentSchool,
  ValidationSchemasSchool,
} from '../constant/school'
import { Form, Formik, FormikValues } from 'formik'
import { MultiStepFormInputStyle } from '../constant/data'
import { Button } from '@/common/components/Atom/Button'
import * as Yup from 'yup'

interface IPlusTwoFormProps {
  onFormChange: (isDirty: boolean) => void
}

export const SchoolForm = ({ onFormChange }: IPlusTwoFormProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [completedSteps] = useState<number[]>([])

  const handleNext = () => {
    completedSteps.push(currentStep)
    setCurrentStep((prev) => Math.min(prev + 1, StepComponentSchool.length - 1))
  }

  const handlePrev = () => {
    completedSteps.pop()
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleSubmit = (values: FormikValues) => {
    if (currentStep < StepComponentSchool.length - 1) {
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
        steps={StepComponentSchool.length}
        completedIndex={completedSteps}
      />

      <Formik
        initialValues={schoolInitialValues}
        validationSchema={Yup.object().shape(
          ValidationSchemasSchool[currentStep]
        )}
        onSubmit={(values) => handleSubmit(values)}
      >
        {(formik) => {
          const {
            errors,
            touched,
            values,
            setFieldValue,
            setFieldError,
            dirty,
          } = formik
          onFormChange(dirty)
          const StepComponentsSchool = StepComponentSchool[currentStep]
          return (
            <Form>
              <StepComponentsSchool
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
                  {currentStep < StepComponentSchool.length - 1
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
