import { Button } from '@/common/components/Atom/Button'
import { Input } from '@/common/components/Atom/Input'
import React, { Dispatch, SetStateAction } from 'react'
import { IStepProps } from '../../interface/type'

interface IStepTwo extends IStepProps {
  setStep: Dispatch<SetStateAction<number>>
}

export const StepTwo = ({ setStep, errors, inputStyle, touched }: IStepTwo) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h1 className="text-heading font-poppins text-[20px] leading-[26px] font-medium">
        Family Details
      </h1>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="Father's Name"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your father's name"
          name="fatherName"
          error={errors!.fatherName}
          className={inputStyle.input}
          isPage
          isError={!!errors!.fatherName && touched.fatherName}
        />
        <Input
          label="Father's Profession"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your father's profession"
          name="fatherProfession"
          error={errors!.fatherProfession}
          className={inputStyle.input}
          isPage
          isError={!!errors!.fatherProfession && touched.fatherProfession}
        />
        <Input
          label="Father's Mobile No."
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your father's mobile no."
          name="fatherMobileNumber"
          error={errors!.fatherMobileNumber}
          className={inputStyle.input}
          isPage
          isError={!!errors!.fatherMobileNumber && touched.fatherMobileNumber}
        />
      </div>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="Local Guardian's Name"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your local guardian's name"
          name="localGuardainName"
          error={errors!.localGuardainName}
          className={inputStyle.input}
          isPage
          isError={!!errors!.localGuardainName && touched.localGuardainName}
        />
        <Input
          label="Local Guardian's Profession"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your local guardian's profession"
          name="localGuardianProfesstion"
          error={errors!.localGuardianProfesstion}
          className={inputStyle.input}
          isPage
          isError={
            !!errors!.localGuardianProfesstion &&
            touched.localGuardianProfesstion
          }
        />
        <Input
          label="Local Guardian's Phone No"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your local guardian's phone no"
          name="localGuardainName"
          error={errors!.localGuardianPhoneNumber}
          className={inputStyle.input}
          isPage
          isError={
            !!errors!.localGuardianPhoneNumber &&
            touched.localGuardianPhoneNumber
          }
        />
      </div>
      <div className="flex gap-x-3 justify-end">
        <Button
          variant={'outline'}
          onClick={() => setStep((prev) => prev - 1)}
          className="w-fit"
        >
          Previous
        </Button>
        <Button
          variant={'default'}
          onClick={() => setStep((prev) => prev - 1)}
          className="w-fit"
        >
          Next
        </Button>
      </div>
    </div>
  )
}
