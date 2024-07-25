export interface IGalleryItem {
  id: number
  serialNo: string
  title: string
  src: string
  type: 'image' | 'video' | string
}
