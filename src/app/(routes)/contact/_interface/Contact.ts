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

export interface ISettings {
  data: IContactInfoData[]
  socialMedia: ISocialMediaData[]
}
