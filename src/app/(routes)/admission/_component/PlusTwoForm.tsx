'use client'

import React from 'react'
import { MultipleSteps } from './StepUi'
import { Input } from '@/common/components/Atom/Input'
import { Form, Formik } from 'formik'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'

export const PlusTwoForm = () => {
  const inputStyle = 'border-[1px] border-border shadow-sm '
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
                <div className="flex gap-x-6">
                  <Input
                    label="First Name"
                    isRequired
                    labelClass="text-body font-normal"
                    placeholder="Your name"
                    name="first name"
                    error="Pease enter first name"
                    className={inputStyle}
                  />
                  <Input
                    label="Middle Name"
                    isRequired={false}
                    labelClass="text-body font-normal"
                    placeholder="Your middle name"
                    name="middle name"
                    error="Pease enter MiddleName"
                    className={inputStyle}
                  />
                  <Input
                    label="Last Name"
                    isRequired={false}
                    labelClass="text-body font-normal"
                    placeholder="Your last name"
                    name="last name"
                    error="Pease enter last name"
                    className={inputStyle}
                  />
                </div>
                <div className="flex gap-x-6">
                  <Input
                    label="Street Address"
                    isRequired
                    labelClass="text-body font-normal"
                    placeholder="Your Street Address"
                    name="Street Address"
                    error="Pease enter Street Address"
                    className={inputStyle}
                  />
                  <Input
                    label="City"
                    isRequired={false}
                    labelClass="text-body font-normal"
                    placeholder="Your City"
                    name="City"
                    error="Pease enter City"
                    className={inputStyle}
                  />
                  <Input
                    label="Province No"
                    isRequired={false}
                    labelClass="text-body font-normal"
                    placeholder="Your Province No"
                    name="Province No"
                    error="Pease enter Province No"
                    className={inputStyle}
                  />
                </div>

                <div className="flex gap-x-6">
                  <CustomDropdown
                    setFieldValue={setFieldValue}
                    isError={false}
                    error="Please choose option"
                    list={[
                      { title: 'Male', value: 'male' },
                      { title: 'Female', value: 'female' },
                    ]}
                    placeHolder={'Select gender'}
                  />
                </div>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
