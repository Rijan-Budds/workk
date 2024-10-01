export interface IContactInfoData {
  key: string
  value: string
}

export interface ISocialMediaData {
  key: string
  value: string
}
export interface ISettingsResponseData {
  status: number
  message: string
  data: ISettings
}

interface IPhoneNumberItem {
  key: string
  value: string
}

interface ITelephoneItem {
  key: string
  value: string
}

export interface IHomepageItem {
  key: string
  value: string
}

export interface ISettings {
  data: IContactInfoData[]
  socialMedia: ISocialMediaData[]
  phoneNumber: IPhoneNumberItem[]
  telephone: ITelephoneItem[]
  homepage: IHomepageItem[]
}
