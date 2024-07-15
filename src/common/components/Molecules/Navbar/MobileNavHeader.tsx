import Image from 'next/image'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

export const MobileNavHeader = () => {
  return (
    <div className="p-4 bg-background flex justify-between items-center  py-4">
      <Image
        width={48}
        height={48}
        src={'/home/logo.svg'}
        alt="pawan prakriti logo"
      />
      <IoMenu className="size-6" />
    </div>
  )
}
