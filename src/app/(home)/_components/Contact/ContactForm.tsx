'use client'

import { Button } from '@/common/components/Atom/Button'
import { Input } from '@/common/components/Atom/Input'
import { Form, Formik } from 'formik'
import React from 'react'

export const ContactForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  }

  return (
    <div className="relative z-10 w-full  bg-[url('/home/contact-bg.svg')] bg-no-repeat p-8  rounded-[12px]">
      <h1 className=" text-white font-poppins text-[28px] leading-[36.4px]  ">
        Get in touch with Us
      </h1>
      <p className="font-workSans font-light text-[16px] leading-[27.2px] text-white mt-4">
        You can reach us anytime via{' '}
        <span className="underline">pawanprakriti2048@gmail.com</span>
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        // validationSchema={Yup.object().shape({
        //   fullName: fullNameValidation,
        //   email: emailValidation,
        //   phone: phoneNumberValidation,
        //   address: addressValidation,
        //   message: messageValidation,
        // })}
      >
        {(formik) => {
          const { errors, touched } = formik
          return (
            <Form>
              <div className="flex flex-col gap-y-6  mt-[32px]   ">
                <Input
                  type="text"
                  label="Name"
                  isRequired
                  placeholder="Your name"
                  name="name"
                  className="bg-white w-full "
                  error={errors.fullName!}
                  isError={!!errors.fullName && touched.fullName}
                />
                <Input
                  type="text"
                  label="Your Email"
                  isRequired
                  placeholder="you@company.com"
                  name="email"
                  className="bg-white w-full "
                  error={errors.fullName!}
                  isError={!!errors.fullName && touched.fullName}
                />
                <Input
                  type="text"
                  label="Your Phone"
                  isRequired
                  placeholder="+977 - 9876543213"
                  name="email"
                  className="bg-white w-full "
                  error={errors.fullName!}
                  isError={!!errors.fullName && touched.fullName}
                />
                <Input
                  type="text"
                  label="Level"
                  isRequired
                  placeholder="Select level"
                  name="level"
                  className="bg-white w-full "
                  error={errors.fullName!}
                  isError={!!errors.fullName && touched.fullName}
                />
                <Input
                  isMessage
                  rows={3}
                  type="text"
                  label="Message"
                  isRequired
                  placeholder="Hello there!"
                  name="Hello there!"
                  className="bg-white w-full "
                  error={errors.fullName!}
                  isError={!!errors.fullName && touched.fullName}
                />
                <Button className="w-fit mt-[8px]">Submit</Button>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
