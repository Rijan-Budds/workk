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
          return (value as File).size <= 1
        }
        return true
      })
      .test('fileType', 'Only images and PDFs are allowed', (value) => {
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
