'use client'

import { Button } from '@/common/components/Atom/Button'
import { Input } from '@/common/components/Atom/Input'
import {
  emailValidation,
  fullNameValidation,
  levelValidation,
  messageValidation,
  phoneNumberValidation,
} from '@/common/utils/validation'
import { Form, Formik, FormikHelpers } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { SuccessMessageUi } from '@/common/components/Molecules/SuccessMessageUi'
import { ContactDropdown } from '@/app/(home)/_components/Contact/ContactDropdown'
import Axios from '@/common/utils/Axios'
import { contactForm } from '@/common/constant/route'
import { toast } from '@/common/hook/use-toast'
import { ToastClose } from '@/common/components/ui/toast'
import Image from 'next/image'

const AdmissionForm = () => {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    if (message.length > 1) {
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }
  }, [message])

  const initialValues = {
    name: '',
    email: '',
    phoneNo: '',
    level: '',
    message: '',
  }

  const handleSubmit = async (
    values: typeof initialValues,
    resetForm: FormikHelpers<typeof initialValues>['resetForm']
  ) => {
    try {
      setLoading(true)
      const response = await Axios.post(`/${contactForm}`, values)

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
        }, 500)
      } else {
      }
    } catch (error) {
      setLoading(false)
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative z-10 w-full bg-cover p-8 rounded-[12px] bg-[url('/home/alt-contact-bg.svg')] text-white">
      <h1 className="font-poppins text-[20px] leading-6 font-medium text-heading">
        Free Admission Inquiry
      </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
        validationSchema={Yup.object().shape({
          name: fullNameValidation,
          email: emailValidation,
          phoneNo: phoneNumberValidation,
          level: levelValidation,
          message: messageValidation,
        })}
      >
        {(formik) => {
          const { errors, touched, setFieldValue } = formik
          return (
            <Form>
              <div className="flex flex-col gap-y-6  mt-[32px]">
                <Input
                  type="text"
                  label="Name"
                  isRequired
                  placeholder="Your name"
                  name="name"
                  className="bg-white w-full "
                  error={errors.name!}
                  isError={!!errors.name && touched.name}
                  labelClass="text-body font-normal"
                />
                <Input
                  type="text"
                  label="Your Email"
                  isRequired
                  placeholder="you@company.com"
                  name="email"
                  className="bg-white w-full "
                  error={errors.email!}
                  isError={!!errors.email && touched.email}
                  labelClass="text-body font-normal"
                />
                <Input
                  type="text"
                  label="Your Phone"
                  isRequired={false}
                  placeholder="+9779876543213"
                  name="phoneNo"
                  className="bg-white w-full "
                  error={errors.phoneNo!}
                  isError={!!errors.phoneNo && touched.phoneNo}
                  labelClass="text-body font-normal"
                />
                <ContactDropdown
                  label="Level"
                  setFieldValue={setFieldValue}
                  error={errors.level!}
                  isError={!!errors.level}
                  className="text-body"
                />
                <Input
                  isMessage
                  rows={3}
                  type="text"
                  label="Message"
                  isRequired
                  placeholder="Hello there!"
                  name="message"
                  className="bg-white w-full "
                  error={errors.message!}
                  isError={!!errors.message && touched.message}
                  labelClass="text-body font-normal"
                />
                <Button
                  className="w-fit mt-[8px]"
                  disabled={loading}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          )
        }}
      </Formik>
      {message.length > 1 && <SuccessMessageUi showMessage={message} />}
    </div>
  )
}

export default AdmissionForm
