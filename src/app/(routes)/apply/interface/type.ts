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
  dateOfBirth: Date | undefined
  mobileNumber: string
  province: string
  document: File[]
  fatherName: string
  fatherProfession: string
  fatherMobileNumber: string
  localGuardainName: string
  localGuardianProfession: string
  localGuardianPhoneNumber: string
  schoolName: string
  schoolAddress: string
  schoolBoard: string
  seeSybmolNum: string
  seeGpaPoint: string
  seeGpaGrade: string
  stream: string
  shift: string
  hostel: string
  transportation: string
}
export interface IStepFields {
  firstName: string
  middleName?: string
  lastName: string
  street: string
  city: string
  email: string
  gender: string
  dateOfBirth: Date | undefined
  mobileNumber: string
  province: string
  document?: IFileMetadata[]
  fatherName: string
  fatherProfession: string
  fatherMobileNumber: string
  localGuardainName: string
  localGuardianProfession: string
  localGuardianPhoneNumber: string
  schoolName: string
  schoolAddress: string
  schoolBoard: string
  seeSybmolNum: string
  seeGpaPoint: string
  seeGpaGrade: string
  stream: string
  shift: string
  hostel: string
  transportation: string
}

export interface IStepOneTouched {
  firstName: boolean
  middleName: boolean
  lastName: boolean
  street: boolean
  city: boolean
  email: boolean
  gender: boolean
  dateOfBirth: boolean
  mobileNumber: boolean
  province: boolean
  document: boolean
  fatherName: boolean
  fatherProfession: boolean
  fatherMobileNumber: boolean
  localGuardainName: boolean
  localGuardianProfession: boolean
  localGuardianPhoneNumber: boolean
  schoolName: boolean
  schoolAddress: boolean
  schoolBoard: boolean
  seeSybmolNum: boolean
  seeGpaPoint: boolean
  seeGpaGrade: boolean
  stream: boolean
  shift: boolean
  hostel: boolean
  transportation: boolean
}

export interface InputStyle {
  input: string
  label: string
}

export interface IStepProps {
  setFieldValue(field: string, value: string | IFileMetadata[]): void
  errors: FormikErrors<IStepOneError>
  touched: FormikTouched<IStepOneTouched>
  setFieldError?: (field: string, message: string | undefined) => void
  inputStyle: InputStyle
  values?: IStepFields | undefined
}
