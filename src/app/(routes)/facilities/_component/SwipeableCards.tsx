import React from 'react'
import { facilitiesCardsData } from '../constant/data'
import Image from 'next/image'

export const SwipeableCards = () => {
  return (
    <div className="flex gap-x-2">
      {facilitiesCardsData.slice(0, 2).map((d) => (
        <Image
          key={d.id}
          src={d.src}
          width={152}
          height={152}
          className="size-[152px]"
          alt="facilites school"
        />
      ))}
    </div>
  )
}
