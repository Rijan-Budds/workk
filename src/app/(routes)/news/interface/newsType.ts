export interface INewsResponseData {
  status: number
  message: string
  data: INewsItem[]
  totalCount: number
}

export interface INewsItem {
  id: string
  title: string
  description: string
  images: Images
  category: string
  type: string
  status: string
  publishedAt: string
  createdAt: string
  updatedAt: string
  slug: string
  isHoliday?: boolean
}

interface IBanner {
  id: string
  title: string
  image: Images
  link: string
  isEnabled: boolean
  type: string
  createdAt: string
  updatedAt: string
}
export interface INewsData {
  data: INewsItem
  banner: IBanner
}
export interface INewsDetailResponse {
  status: number
  message: string
  data: INewsData
  totalCount: number
}

interface Images {
  key: string
  bucket: string
  mimeType: string
}
