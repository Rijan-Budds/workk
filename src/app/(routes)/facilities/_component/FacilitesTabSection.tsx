'use client'

import React, { useEffect, useState } from 'react'
import { ActiveImage } from './ActiveImage'
import { SwipeableCards } from './SwipeableCards'
import { FacilitesDesc } from './FacilitesDesc'
import { facilitiesCardsData } from '../constant/data'

export const FacilitesTabSection = () => {
  const [activeSrc, setActiveSrc] = useState<string | null>(null)

  useEffect(() => {
    const filterFirstData = facilitiesCardsData[0].src

    if (!activeSrc) {
      setActiveSrc(filterFirstData)
    }
  }, [activeSrc])

  return (
    <div className="flex justify-between flex-col md:flex-row gap-x-6  2lg:flex-row gap-y-6 2lg:gap-y-0 ">
      {activeSrc && <ActiveImage src={activeSrc} />}
      <div className="flex flex-col md:flex-col-reverse gap-y-3  2lg:max-w-[503px]  ">
        <SwipeableCards setActiveSrc={setActiveSrc} />
        <FacilitesDesc />
      </div>
    </div>
  )
}
