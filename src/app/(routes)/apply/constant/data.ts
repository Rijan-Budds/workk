import { StepFour } from '../_component/PlusTwo/StepFour'
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
  hostelValidation,
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
  shiftValidation,
  streamValidation,
  streetValidation,
  transportationValidation,
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

export const StepComponent = [StepOne, StepTwo, StepThree, StepFour]

export const initialValues = {
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
  localGuardainName: '',
  localGuardianProfession: '',
  localGuardianPhoneNumber: '',
  schoolName: '',
  schoolAddress: '',
  schoolBoard: '',
  seeSybmolNum: '',
  seeGpaPoint: '',
  seeGpaGrade: '',
  stream: '',
  shift: '',
  hostel: '',
  transportation: '',
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

export const stepFourValidationSchema = {
  stream: streamValidation,
  shift: shiftValidation,
  hostel: hostelValidation,
  transportation: transportationValidation,
}

export const ValidationSchemas = [
  stepOneValidationSchema,
  stepTwoValidationSchema,
  stepThreeValidationSchema,
  stepFourValidationSchema,
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

export const genderList = [
  { title: 'Male', value: 'MALE' },
  { title: 'Female', value: 'FEMALE' },
  { title: 'Others', value: 'OTHERS' },
]

export const streamList = [
  { title: 'Education', value: 'EDUCATION' },
  { title: 'Management', value: 'MANAGEMENT' },
  { title: 'Humanities', value: 'HUMANITIES' },
  { title: 'Law', value: 'LAW' },
]

export const shiftList = [
  { title: 'Morning', value: 'MORNING' },
  { title: 'Day', value: 'DAY' },
]

export const hostelList = [
  { title: 'yes', value: 'YES' },
  { title: 'no', value: 'NO' },
]

export const transportationList = [
  { title: 'yes', value: 'YES' },
  { title: 'no', value: 'NO' },
]
