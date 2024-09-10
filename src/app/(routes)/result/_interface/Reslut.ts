export interface ITitle {
  title: string
}

export interface ICategory {
  category: string
}

export interface ITitleCategory {
  title: string
  categories: ICategory[]
}
export interface IResultData {
  pdfUrl: string | Uint8Array
  id: number
  heading: string
  date: string
  type: string
  category: string
}
