'use client'

import React from 'react'
import { MultipleSteps } from './StepUi'
import { Input } from '@/common/components/Atom/Input'
import { Form, Formik } from 'formik'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'
import { ImageDropZone } from '@/common/components/Molecules/ImageDropZone'

export const PlusTwoForm = () => {
  const inputStyle = {
    input: 'border-[1px] border-border shadow-sm placeholder:text-[14px] ',
    label: 'text-body font-normal',
  }
  return (
    <div className=" bg-background w-full rounded-xl p-6 flex flex-col gap-y-10">
      <MultipleSteps />

      <h1 className="text-heading font-poppins text-[20px] leading-[26px] font-medium">
        Personal Information
      </h1>
      <Formik initialValues={{}} onSubmit={(values) => console.info(values)}>
        {(formik) => {
          const { setFieldValue } = formik
          return (
            <Form>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
                  <Input
                    label="First Name"
                    isRequired
                    labelClass={inputStyle.label}
                    placeholder="Your name"
                    name="first name"
                    error="Pease enter first name"
                    className={inputStyle.input}
                  />
                  <Input
                    label="Middle Name"
                    isRequired={false}
                    labelClass={inputStyle.label}
                    placeholder="Your middle name"
                    name="middle name"
                    error="Pease enter MiddleName"
                    className={inputStyle.input}
                  />
                  <Input
                    label="Last Name"
                    isRequired={false}
                    labelClass={inputStyle.label}
                    placeholder="Your last name"
                    name="last name"
                    error="Pease enter last name"
                    className={inputStyle.input}
                  />
                </div>
                <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
                  <Input
                    label="Street Address"
                    isRequired
                    labelClass={inputStyle.label}
                    placeholder="Your Street Address"
                    name="Street Address"
                    error="Pease enter Street Address"
                    className={inputStyle.input}
                  />
                  <Input
                    label="City"
                    isRequired={false}
                    labelClass={inputStyle.label}
                    placeholder="Your City"
                    name="City"
                    error="Pease enter City"
                    className={inputStyle.input}
                  />
                  <Input
                    label="Province No"
                    isRequired={false}
                    labelClass={inputStyle.label}
                    placeholder="Your Province No"
                    name="Province No"
                    error="Pease enter Province No"
                    className={inputStyle.input}
                  />
                </div>

                <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
                  <CustomDropdown
                    setFieldValue={setFieldValue}
                    isError={false}
                    error="Please choose option"
                    list={[
                      { title: 'Male', value: 'male' },
                      { title: 'Female', value: 'female' },
                    ]}
                    placeHolder={'Select gender'}
                    label="Gender"
                  />
                  <Input
                    label="Date Of Birth (AD)"
                    isRequired={false}
                    labelClass={inputStyle.label}
                    placeholder="Your D.O.B"
                    name="date-of-birth"
                    error="Pease enter Date"
                    className={inputStyle.input}
                  />
                  <Input
                    label="Mobile No"
                    isRequired={false}
                    labelClass={inputStyle.label}
                    placeholder="Your mobile no"
                    name="mobile"
                    error="Pease enter mobile"
                    className={inputStyle.input}
                  />
                </div>
                <Input
                  label="Email"
                  isRequired={false}
                  labelClass={inputStyle.label}
                  placeholder="Your Email"
                  name="email"
                  error="Pease enter email"
                  className={inputStyle.input}
                />
                <ImageDropZone />
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
