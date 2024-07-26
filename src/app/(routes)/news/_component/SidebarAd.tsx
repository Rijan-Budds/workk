import Image from 'next/image'
import React from 'react'

export const SidebarAd = () => {
  return (
    <div className="size-[397px]">
      <Image
        width={397}
        height={397}
        alt="advertisement banner"
        src={'/news/banner-ad.png'}
      />
    </div>
  )
}
