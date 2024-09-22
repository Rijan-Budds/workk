'use client'

import React, { useEffect, useState } from 'react'
import { ActiveImage } from './ActiveImage'
import { SwipeableCards } from './SwipeableCards'
import { FacilitesDesc } from './FacilitesDesc'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import {
  IFacilityData,
  IFacilityDetailResponse,
} from '../interface/facilityInterface'

export const FacilitesTabSection = ({ slug }: { slug: string }) => {
  const [activeSrc, setActiveSrc] = useState<string | null>(null)
  const [facility, setFacility] = useState<IFacilityData | undefined>(undefined)

  const fetchFacilities = async () => {
    const response: IFacilityDetailResponse | undefined = await UseServerFetch(
      `/api/v1/facility/${slug}`
    )
    if (response && response.data) {
      setActiveSrc(response.data.images.key[0])
      setFacility(response.data)
    }
  }

  useEffect(() => {
    fetchFacilities()
  }, [])

  return (
    <div className="flex justify-between flex-col md:flex-row gap-x-6  2lg:flex-row gap-y-6 2lg:gap-y-0 ">
      {activeSrc && <ActiveImage src={activeSrc} />}
      <div className="flex flex-col md:flex-col-reverse gap-y-3  2lg:max-w-[503px]  ">
        {facility?.images && (
          <SwipeableCards setActiveSrc={setActiveSrc} data={facility?.images} />
        )}
        {facility?.description && <FacilitesDesc detail={facility} />}
      </div>
    </div>
  )
}
