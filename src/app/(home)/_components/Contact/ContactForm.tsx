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
import { ContactDropdown } from './ContactDropdown'
import { SuccessMessageUi } from '@/common/components/Molecules/SuccessMessageUi'

export const ContactForm = () => {
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
    <div
      className={`relative z-10 w-full bg-cover p-8 rounded-[12px] bg-[url('/home/contact-bg.svg')] text-white`}
    >
      <h1 className="font-poppins text-[28px] leading-[36.4px]">
        Get in touch with Us
      </h1>
      <p className="font-workSans font-light text-[16px] leading-[27.2px] mt-4">
        You can reach us anytime via{' '}
        <span className={`underline text-white`}>
          pawanprakriti2048@gmail.com
        </span>
      </p>
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
                  labelColor={'text-white'}
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
                  labelColor={'text-white'}
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
                  labelColor={'text-white'}
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
                  labelColor={'text-white'}
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
