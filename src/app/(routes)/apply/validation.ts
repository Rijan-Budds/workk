import { allowedFileypes } from '@/common/constant/fileType'
import * as Yup from 'yup'

export const firstNameValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .max(20, 'First Name must be at most 20 characters')
  .min(4, 'First Name must be at least 4 characters')
  .typeError('Please enter a valid name')
  .required('First Name is a required field')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .test('spaces', 'Multiple spaces are not allowed', function (value) {
    if (value) {
      const multipleSpacesPattern = /\s{2,}/
      return !multipleSpacesPattern.test(value)
    }
    return true
  })

export const middleNameValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .max(20, 'Middle name must be at most 20 characters')
  .min(4, 'Middle name must be at least 4 characters')
  .typeError('Please enter a valid name')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .test('spaces', 'Multiple spaces are not allowed', function (value) {
    if (value) {
      const multipleSpacesPattern = /\s{2,}/
      return !multipleSpacesPattern.test(value)
    }
    return true
  })

export const lastNameValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .max(20, 'Last name must be at most 20 characters')
  .min(4, 'Last name must be at least 4 characters')
  .typeError('Please enter a valid name')
  .required('Last name is a required field')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')
  .test('spaces', 'Multiple spaces are not allowed', function (value) {
    if (value) {
      const multipleSpacesPattern = /\s{2,}/
      return !multipleSpacesPattern.test(value)
    }
    return true
  })

export const streetValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .max(50, 'Street must be at most 30 characters')
  .min(4, 'Street must be at least 4 characters')
  .typeError('Please enter a valid name')
  .required('Street is a required field')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')

export const cityValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .max(30, 'City must be at most 30 characters')
  .min(4, 'City must be at least 4 characters')
  .typeError('Please enter a valid name')
  .required('City is a required field')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')

export const provinceNumberValidation = Yup.string().required(
  'Province is a required field'
)

export const genderValidation = Yup.string().required(
  'Gender is a required field'
)

export const mobileNumberValidation = Yup.string()
  .matches(/^(?!\s+$)[0-9+ ]+$/, 'Please enter a valid mobile number')
  .min(10, 'Mobile number must be at least 10 characters')
  .required('Mobile is a required field')
  .max(14, 'Mobile number must be at most 14 characters')

export const emailValidation = Yup.string()
  .email('Please enter a valid email')
  .max(50, 'Email must be less than or equal to 50 characters')
  .typeError('Please enter a valid email ')
  .required('Email is a required field')
  .trim()

export const fileValidation = Yup.array()
  .of(
    Yup.mixed()
      .test('fileSize', 'File size should be less than 10 MB', (value) => {
        if (value && (value as File).size) {
          return (value as File).size <= 10
        }
        return true
      })
      .test('fileType', 'Only PDFs are allowed', (value) => {
        if (value && (value as File).type) {
          return allowedFileypes.includes((value as File).type)
        }
        return false
      })
      .nullable()
  )
  .nullable()

export const dateOfBirthValidation = Yup.string().required(
  'Date of Birth is a required field'
)

export const fatherNameValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .max(50, 'Father name must be at most 50 characters')
  .min(4, 'Father name must be at least 4 characters')
  .typeError('Please enter a valid name')
  .required('Father name is a required field')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')

export const fatherProfessionValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .max(50, 'Father profession must be at most 50 characters')
  .min(2, 'Father profession must be at least 2 characters')
  .typeError('Please enter a valid profession')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')

export const localGuardianNameValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .max(50, 'Guardian name must be at most 50 characters')
  .min(4, 'Guardian name must be at least 2 characters')
  .typeError('Please enter a  valid name')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')

export const guardianProfessionValidation = Yup.string()
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    function (value) {
      if (value) {
        return !/^\s/.test(value)
      }
      return true
    }
  )
  .max(50, 'Guardian profession must be at most 50 characters')
  .min(2, 'Guardian profession must be at least 2 characters')
  .typeError('Please enter a  valid profession')
  .matches(/^[A-Za-z\s.]+$/, 'Must be alphabets only')

export const gurdianMobileNumber = Yup.string()
  .matches(/^(?!\s+$)[0-9+ ]+$/, 'Please enter a valid mobile number')
  .min(10, 'Mobile number must be at least 10 characters')
  .max(14, 'Mobile number must be at most 14 characters')

export const schoolNameValidation = Yup.string()
  .required('Previous school’s name is required')
  .min(3, 'School name must be at least 3 characters')
  .max(150, 'School name must be at most 150 characters')
  .test(
    'no-leading-space',
    'Space at beginning is not allowed',
    (value) => !/^\s/.test(value)
  )
  .matches(
    /^[A-Za-z0-9\s.-]+$/,
    'School name can only contain letters, numbers, spaces, hyphens, and periods'
  )
  .typeError('Please enter a valid school name')

export const schoolAddressValidation = Yup.string()
  .required('Previous school address is required')
  .min(5, 'School address must be at least 5 characters')
  .max(200, 'School address must be at most 200 characters')
  .matches(
    /^[A-Za-z0-9\s,.]+$/,
    'School address can only contain letters, numbers, spaces, commas, and periods'
  )
  .typeError('Please enter a valid school address')

export const schoolBoardValidation = Yup.string()
  .required('Previous school board is required')
  .min(5, 'School board must be at least 5 characters')
  .max(80, 'School board must be at most 80 characters')
  .matches(
    /^[A-Za-z\s.-]+$/,
    'School board can only contain letters, spaces, hyphens, and periods'
  )

export const seeSymbolNumberValidation = Yup.string()
  .required('SEE symbol number is required')
  .length(9, 'SEE symbol number must be exactly 9 characters')
  .matches(
    /^[A-Za-z0-9]+$/,
    'SEE symbol number can only contain letters and numbers'
  )

export const seeGpaPointValidation = Yup.number()
  .required('SEE GPA point is required')
  .min(0, 'SEE GPA point must be at least 0.0')
  .max(4, 'SEE GPA point must be at most 4.0')
  .typeError('SEE GPA point must be a numeric value')
  .test(
    'length',
    'SEE GPA point length must be between 3 and 4 characters',
    (value) => {
      const valueStr = value?.toString() || ''
      return valueStr.length >= 3 && valueStr.length <= 4
    }
  )

export const seeGpaGradeValidation = Yup.string()
  .required('SEE GPA Grade is required')
  .oneOf(
    ['a+', 'a', 'b+', 'b', 'c+', 'c', 'd'],
    'SEE GPA Grade must be one of the predefined grades'
  )
export const streamValidation = Yup.string().required('Please select stream.')

export const shiftValidation = Yup.string().required(
  'Please select one option.'
)

export const hostelValidation = Yup.string().required(
  'Please select one option.'
)

export const transportationValidation = Yup.string().required(
  'Please select one option. '
)
