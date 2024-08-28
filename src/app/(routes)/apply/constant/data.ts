import { StepOne } from '../_component/PlusTwo/StepOne'
import { StepThree } from '../_component/PlusTwo/StepThree'
import { StepTwo } from '../_component/PlusTwo/StepTwo'
import {
  cityValidation,
  dateOfBirthValidation,
  emailValidation,
  fatherNameValidation,
  fatherProfessionValidation,
  fileValidation,
  firstNameValidation,
  genderValidation,
  guardianProfessionValidation,
  gurdianMobileNumber,
  lastNameValidation,
  localGuardianNameValidation,
  middleNameValidation,
  mobileNumberValidation,
  provinceNumberValidation,
  schoolAddressValidation,
  schoolBoardValidation,
  schoolNameValidation,
  seeGpaGradeValidation,
  seeGpaPointValidation,
  seeSymbolNumberValidation,
  streetValidation,
} from '../validation'

export const provinces = [
  { title: 'Koshi Province', value: 'koshi-province' },
  { title: 'Madhesh Province', value: 'madhesh-province' },
  { title: 'Bagmati Province', value: 'bagmati-province' },
  { title: 'Gandaki Province', value: 'gandaki-province' },
  { title: 'Lumbini Province', value: 'lumbini-province' },
  { title: 'Karnali Province', value: 'karnali-province' },
  { title: 'Sudurpashchim Province', value: 'sudurpashchim-province' },
]

export const StepComponent = [StepOne, StepTwo, StepThree]

export const initialValues = {
  firstName: '',
  middleName: '',
  lastName: '',
  street: '',
  city: '',
  province: '',
  gender: '',
  dateOfBirth: '',
  mobileNumber: '',
  email: '',
  document: undefined,
  fatherName: '',
  fatherProfession: '',
  fatherMobileNumber: '',
  localGuardainName: '',
  localGuardianProfession: '',
  localGuardianPhoneNumber: '',
  schoolName: '',
  schoolAddress: '',
  schoolBoard: '',
  seeSybmolNum: '',
  seeGpaPoint: '',
  seeGpaGrade: '',
}

const stepOneValidationSchema = {
  firstName: firstNameValidation,
  middleName: middleNameValidation,
  lastName: lastNameValidation,
  street: streetValidation,
  city: cityValidation,
  province: provinceNumberValidation,
  gender: genderValidation,
  dateOfBirth: dateOfBirthValidation,
  mobileNumber: mobileNumberValidation,
  email: emailValidation,
  document: fileValidation,
}

const stepTwoValidationSchema = {
  fatherName: fatherNameValidation,
  fatherProfession: fatherProfessionValidation,
  fatherMobileNumber: mobileNumberValidation,
  localGuardainName: localGuardianNameValidation,
  localGuardianProfession: guardianProfessionValidation,
  localGuardianPhoneNumber: gurdianMobileNumber,
}

const stepThreeValidationSchema = {
  schoolName: schoolNameValidation,
  schoolAddress: schoolAddressValidation,
  schoolBoard: schoolBoardValidation,
  seeSybmolNum: seeSymbolNumberValidation,
  seeGpaPoint: seeGpaPointValidation,
  seeGpaGrade: seeGpaGradeValidation,
}

export const ValidationSchemas = [
  stepOneValidationSchema,
  stepTwoValidationSchema,
  stepThreeValidationSchema,
]

export const gpaDropdownList = [
  { title: 'A+', value: 'a+' },
  { title: 'A', value: 'a' },
  { title: 'B+', value: 'b+' },
  { title: 'B', value: 'b' },
  { title: 'C+', value: 'c+' },
  { title: 'C', value: 'c' },
  { title: 'D', value: 'd' },
]
