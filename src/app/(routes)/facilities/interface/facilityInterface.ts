interface Facility {
  facilityTitle: string
  slug: string
}

export interface IFacilityResponse {
  status: number
  message: string
  data: Facility[]
  totalCount: number
}
