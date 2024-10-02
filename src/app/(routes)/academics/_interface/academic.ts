export interface IAcademicsResponse {
  status: number
  message: string
  data: IAcademicsData
  banner: IAcademicBanner
}

export interface IAcademicsData {
  id: string
  title: string
  slug: string
  articleTitle: string
  description: string
  image: Image
  programType: string
  createdAt: string
  updatedAt: string
}

export interface IAcademicBanner {
  id: string
  title: string
  image: Image
  link: string
  isEnabled: boolean
  type: string
  createdAt: string
  updatedAt: string
}
export interface Image {
  key: string[]
  bucket: string[]
  mimeType: string[]
}

export interface ISchoolGalleryResponse {
  status: number
  message: string
  data: ISchoolGallery[]
  totalCount: number
}

export interface ISchoolGallery {
  id?: string
  title?: string
  photo?: Image
}
