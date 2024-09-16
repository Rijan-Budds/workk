import React, { useState } from 'react'
import { MultipleSteps } from './StepUi'
import {
  schoolInitialValues,
  StepComponentSchool,
  ValidationSchemasSchool,
} from '../constant/school'
import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import {
  applicationCourseDetailSchema,
  applicationFamilyDetailSchema,
  initialValues,
  MultiStepFormInputStyle,
} from '../constant/data'
import { Button } from '@/common/components/Atom/Button'
import * as Yup from 'yup'
import Axios from '@/common/utils/Axios'
import { postPlusTwoForm } from '@/common/constant/route'
import { toast } from '@/common/hook/use-toast'
import { ToastClose } from '@/common/components/ui/toast'
import Image from 'next/image'

interface IPlusTwoFormProps {
  onFormChange: (isDirty: boolean) => void
}

export const SchoolForm = ({ onFormChange }: IPlusTwoFormProps) => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [completedSteps, setCompletedStep] = useState<number[]>([])

  const handleNext = () => {
    completedSteps.push(currentStep)
    setCurrentStep((prev) => Math.min(prev + 1, StepComponentSchool.length - 1))
  }

  const handlePrev = () => {
    completedSteps.pop()
    setCurrentStep((prev) => Math.max(prev - 1, 0))
  }

  const handleFinalSubmit = async (
    values: FormikValues,
    resetForm: FormikHelpers<typeof initialValues>['resetForm']
  ) => {
    const formData = new FormData()
    const applicationFamilyDetail: { [key: string]: string } = {}
    const applicationCourseDetail: { [key: string]: string } = {}

    Object.keys(values).forEach((key) => {
      if (
        values[key] !== '' &&
        values[key] !== undefined &&
        values[key] !== null
      ) {
        if (applicationFamilyDetailSchema.includes(key)) {
          applicationFamilyDetail[key] = values[key]
        } else if (applicationCourseDetailSchema.includes(key)) {
          applicationCourseDetail[key] = values[key]
        } else if (key === 'document') {
          for (let i = 0; i < values['document'].length; i++) {
            formData.append('document', values['document'][i])
          }
        } else {
          formData.append(key, values[key])
        }
      }
    })

    formData.append('applicationFor', 'SCHOOL')
    formData.append(
      'applicationFamilyDetail',
      JSON.stringify(applicationFamilyDetail)
    )
    formData.append(
      'applicationCourseDetail',
      JSON.stringify(applicationCourseDetail)
    )

    try {
      const response = await Axios.post(`${postPlusTwoForm}`, formData)
      if (response.data) {
        toast({
          title: response.data.message,
          action: (
            <ToastClose>
              <Image
                src={'/admission/toast-close.svg'}
                width={20}
                height={20}
                alt="close icon"
                className="size-5"
              />
            </ToastClose>
          ),
          className:
            'bg-successBg py-[18px] px-4 text-success font-workSans text-[16px] leading-4  font-medium',
        })
        setTimeout(() => {
          resetForm()
          setCurrentStep(0)
          setCompletedStep([])
        }, 500)
      } else {
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  const handleSubmit = (
    values: FormikValues,
    resetForm: FormikHelpers<typeof initialValues>['resetForm']
  ) => {
    if (currentStep < StepComponentSchool.length - 1) {
      handleNext()
    } else {
      handleFinalSubmit(values, resetForm)
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
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
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
