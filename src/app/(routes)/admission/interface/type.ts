import { IFileMetadata } from '@/common/interface/type'
import { FormikErrors, FormikTouched } from 'formik'

export interface IStepOneError {
  firstName: string
  middleName: string
  lastName: string
  street: string
  city: string
  email: string
  gender: string
  mobileNumber: string
  province: string
  document: File[]
  fatherName: string
  fatherProfession: string
  fatherMobileNumber: string
  localGuardainName: string
  localGuardianProfesstion: string
  localGuardianPhoneNumber: string
}
export interface IStepFields {
  firstName: string
  middleName?: string
  lastName: string
  street: string
  city: string
  email: string
  gender: string
  mobileNumber: string
  province: string
  document?: IFileMetadata[]
  fatherName: string
  fatherProfession: string
  fatherMobileNumber: string
  localGuardainName: string
  localGuardianProfesstion: string
  localGuardianPhoneNumber: string
}

export interface IStepOneTouched {
  firstName: boolean
  middleName: boolean
  lastName: boolean
  street: boolean
  city: boolean
  email: boolean
  gender: boolean
  mobileNumber: boolean
  province: boolean
  document: boolean
  fatherName: boolean
  fatherProfession: boolean
  fatherMobileNumber: boolean
  localGuardainName: boolean
  localGuardianProfesstion: boolean
  localGuardianPhoneNumber: boolean
}

export interface InputStyle {
  input: string
  label: string
}

export interface IStepProps {
  setFieldValue(field: string, value: string | IFileMetadata[]): void
  errors: FormikErrors<IStepOneError>
  touched: FormikTouched<IStepOneTouched>
  setFieldError: (field: string, message: string | undefined) => void
  inputStyle: InputStyle
  values?: IStepFields | undefined
}
