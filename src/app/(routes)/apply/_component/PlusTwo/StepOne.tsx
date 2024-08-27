import { Button } from '@/common/components/Atom/Button'
import { Input } from '@/common/components/Atom/Input'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'
import { ImageDropZone } from '@/common/components/Molecules/ImageDropZone'
import { IStepProps } from '../../interface/type'
import { provinces } from '../../constant/data'
import { InputWithDate } from '@/common/components/Atom/InputWithDate'

export const StepOne = ({
  setFieldValue,
  errors,
  setFieldError,
  inputStyle,
  values,
  handleClick,
}: IStepProps) => {
  return (
    <div className="flex flex-col gap-6 ">
      <h1 className="text-heading font-poppins text-[20px] leading-[26px] font-medium">
        Personal Information
      </h1>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="First Name"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your name"
          name="firstName"
          error={errors!.firstName}
          className={inputStyle.input}
          isPage
          isError={!!errors!.firstName}
        />
        <Input
          label="Middle Name"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your middle name"
          name="middleName"
          error={errors.middleName}
          className={inputStyle.input}
          isError={!!errors.middleName}
        />
        <Input
          label="Last Name"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your last name"
          name="lastName"
          error={errors.lastName}
          className={inputStyle.input}
          isError={!!errors.lastName}
        />
      </div>
      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <Input
          label="Street Address"
          isRequired
          labelClass={inputStyle.label}
          placeholder="Your Street Address"
          name="street"
          error={errors.street}
          className={inputStyle.input}
          isError={!!errors.street}
        />
        <Input
          label="City"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your City"
          name="city"
          error={errors.city}
          className={inputStyle.input}
          isError={!!errors.city}
        />

        <CustomDropdown
          setFieldValue={setFieldValue}
          isError={!!errors.province}
          error={errors.province}
          list={provinces}
          placeHolder={'Your Province No'}
          label="Province No"
          field={'province'}
        />
      </div>

      <div className="flex flex-col gap-y-4  lg:flex-row gap-x-6">
        <CustomDropdown
          setFieldValue={setFieldValue}
          isError={!!errors.gender}
          error={errors.gender}
          list={[
            { title: 'Male', value: 'male' },
            { title: 'Female', value: 'female' },
          ]}
          placeHolder={'Select gender'}
          label="Gender"
          field="gender"
        />
        <InputWithDate
          label="Date Of Birth (AD)"
          setValue={setFieldValue}
          error={errors.dateOfBirth}
          isError={!!errors.dateOfBirth}
        />

        <Input
          label="Mobile No"
          isRequired={false}
          labelClass={inputStyle.label}
          placeholder="Your mobile no"
          name="mobileNumber"
          error={errors.mobileNumber}
          className={inputStyle.input}
          isError={!!errors.mobileNumber}
        />
      </div>
      <Input
        label="Email"
        isRequired={false}
        labelClass={inputStyle.label}
        placeholder="Your Email"
        name="email"
        error={errors.email}
        className={inputStyle.input}
        isError={!!errors.email}
      />
      <ImageDropZone
        isError={!!errors.document}
        error={errors.document}
        setValue={setFieldValue}
        setError={setFieldError}
        values={values}
      />

      <Button onClick={handleClick} type="button" className="w-fit ml-auto">
        Next
      </Button>
    </div>
  )
}
