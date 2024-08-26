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
}
