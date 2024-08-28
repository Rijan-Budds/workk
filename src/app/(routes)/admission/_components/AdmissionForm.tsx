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
import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { SuccessMessageUi } from '@/common/components/Molecules/SuccessMessageUi'
import { ContactDropdown } from '@/app/(home)/_components/Contact/ContactDropdown'

const AdmissionForm = () => {
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    if (message.length > 1) {
      setTimeout(() => {
        setMessage('')
      }, 3000)
    }
  }, [message])

  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    level: '',
    message: '',
  }

  return (
    <div className="relative z-10 w-full bg-cover p-8 rounded-[12px] bg-[url('/home/alt-contact-bg.svg')] text-white">
      <h1 className="font-poppins text-[20px] leading-6 font-medium text-heading">
        Free Admission Inquiry
      </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.error(values)}
        validationSchema={Yup.object().shape({
          fullName: fullNameValidation,
          email: emailValidation,
          phone: phoneNumberValidation,
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
                  name="fullName"
                  className="bg-white w-full "
                  error={errors.fullName!}
                  isError={!!errors.fullName && touched.fullName}
                  labelColor={'text-black'}
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
                  labelColor={'text-black'}
                />
                <Input
                  type="text"
                  label="Your Phone"
                  isRequired={false}
                  placeholder="+9779876543213"
                  name="phone"
                  className="bg-white w-full "
                  error={errors.phone!}
                  isError={!!errors.phone && touched.phone}
                  labelColor={'text-black'}
                />
                <ContactDropdown
                  setFieldValue={setFieldValue}
                  error={errors.level!}
                  isError={!!errors.level}
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
                  labelColor={'text-black'}
                />
                <Button
                  type="submit"
                  className="w-fit mt-[8px]"
                  onClick={() => setMessage('Form Submitted Successfully !')}
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
