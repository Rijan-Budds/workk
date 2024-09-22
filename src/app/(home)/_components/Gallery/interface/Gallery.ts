export interface IHomeGalleryResponse {
  status: number
  message: string
  data: IHomeGallery[]
  totalCount: number
}

export interface IHomeGallery {
  id?: string
  title?: string
  photo?: Image
}

export interface Image {
  key: string
  bucket: string
  mimeType: string
}
