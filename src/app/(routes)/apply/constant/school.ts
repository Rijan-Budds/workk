import { SchoolStepOne } from '../_component/School/SchoolStepOne'
import { SchoolStepThree } from '../_component/School/SchoolStepThree'
import { SchoolStepTwo } from '../_component/School/SchoolStepTwo'
import {
  stepFourValidationSchema,
  stepOneValidationSchema,
  stepTwoValidationSchema,
} from './data'

export const StepComponentSchool = [
  SchoolStepOne,
  SchoolStepTwo,
  SchoolStepThree,
]

export const schoolInitialValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  street: '',
  city: '',
  province: '',
  gender: '',
  dateOfBirth: undefined,
  mobileNumber: '',
  email: '',
  document: undefined,
  fatherName: '',
  fatherProfession: '',
  fatherMobileNumber: '',
  localGuardianName: '',
  localGuardianProfession: '',
  localGuardianPhoneNumber: '',
  schoolName: '',
  schoolAddress: '',
  schoolBoard: '',
  seeSymbolNum: '',
  seeGpaPoint: '',
  seeGpaGrade: '',
  stream: '',
  shift: '',
  hostel: '',
  transportation: '',
}

export const ValidationSchemasSchool = [
  stepOneValidationSchema,
  stepTwoValidationSchema,
  stepFourValidationSchema,
]
