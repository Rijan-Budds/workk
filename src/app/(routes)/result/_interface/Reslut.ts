export interface IResultData {
  pdfUrl: string | Uint8Array
  id: number
  heading: string
  date: string
  type: 'Plus Two' | 'School Level' | string
  category: 'Management' | 'Humanities' | string
}
