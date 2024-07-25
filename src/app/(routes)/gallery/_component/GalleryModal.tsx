import { CloseButton } from '@/common/components/Atom/CloseButton'
import Image from 'next/image'
import React, { Dispatch } from 'react'

export const GalleryModal = ({
  src,
  setModalOpen,
  setSrc,
}: {
  src: string
  setModalOpen: Dispatch<boolean>
  setSrc: Dispatch<string>
}) => {
  return (
    <div className="w-full h-full relative">
      <Image
        src={src}
        alt="zoom gallery image"
        width={1280}
        height={854}
        className="object-contain  w-[343px] h-[229px] border-white rounded-[12px] md:w-[700px] md:h-[467px] 2lg:w-[1280px] 2lg:h-[90vh]"
      />

      <div>
        <CloseButton
          className="absolute -top-3 -right-4 2lg:right-11 2xl_lg:-right-4"
          handleClick={() => {
            setModalOpen(false)
            setSrc('')
          }}
        />
      </div>
    </div>
  )
}
