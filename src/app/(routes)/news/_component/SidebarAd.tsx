import Image from 'next/image'
import React from 'react'

export const SidebarAd = () => {
  return (
    <div draggable={false} className="size-[397px]">
      <Image
        draggable={false}
        width={397}
        height={397}
        alt="advertisement banner"
        src={'/news/banner-ad.png'}
        className="2lg:size-[397px] size-[345px]"
      />
    </div>
  )
}
