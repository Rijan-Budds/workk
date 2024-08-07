'use client'

import { Button } from '@/common/components/Atom/Button'
import { Input } from '@/common/components/Atom/Input'
import { Form, Formik } from 'formik'
import { usePathname } from 'next/navigation'
import React from 'react'

export const ContactForm = () => {
  const pathname = usePathname()
  const initialValues = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  }

  const isContactPage = pathname === '/contact'

  return (
    <div
      className={`relative z-10 w-full bg-cover p-8 rounded-[12px] ${isContactPage ? "bg-[url('/home/alt-contact-bg.svg')] text-black" : "bg-[url('/home/contact-bg.svg')] text-white"}`}
    >
      <h1 className="font-poppins text-[28px] leading-[36.4px]">
        Get in touch with Us
      </h1>
      <p className="font-workSans font-light text-[16px] leading-[27.2px] mt-4">
        You can reach us anytime via{' '}
        <span
          className={`underline ${isContactPage ? 'text-secondary' : 'text-white'}`}
        >
          pawanprakriti2048@gmail.com
        </span>
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.error(values)}
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
              <div className="flex flex-col gap-y-6  mt-[32px]">
                <Input
                  type="text"
                  label="Name"
                  isRequired
                  placeholder="Your name"
                  name="name"
                  className="bg-white w-full "
                  error={errors.fullName!}
                  isError={!!errors.fullName && touched.fullName}
                  labelColor={isContactPage ? 'text-black' : 'text-white'}
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
                  labelColor={isContactPage ? 'text-black' : 'text-white'}
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
                  labelColor={isContactPage ? 'text-black' : 'text-white'}
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
                  labelColor={isContactPage ? 'text-black' : 'text-white'}
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
                  labelColor={isContactPage ? 'text-black' : 'text-white'}
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
