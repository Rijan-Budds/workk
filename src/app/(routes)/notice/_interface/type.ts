export interface INotice {
  id: string
  title: string
  date: string
  src: string
  pdfSrc: string
}

export interface INoticeResponse {
  status: number
  message: string
  data: INoticeData
}

export interface INoticeData {
  id: string
  title: string
  description: string
  images: Images
  category: string
  type: string
  status: string
  publishedAt: string | null
  createdAt: string
  updatedAt: string
}

interface Images {
  key: string[]
  bucket: string[]
  mimeType: string[]
}
