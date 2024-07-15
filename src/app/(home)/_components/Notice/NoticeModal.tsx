'use client'

import { Button } from '@/common/components/Atom/Button'
import { CloseButton } from '@/common/components/Atom/CloseButton'
import { CustomModal } from '@/common/components/Molecules/Modal'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export const NoticeModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(true)

  useEffect(() => {
    const isModalAlreadyShown =
      sessionStorage.getItem('showAnnouncement') === 'true'
    if (isModalAlreadyShown) {
      setOpenModal(false)
    }
  }, [])

  const handleCloseModal = () => {
    setOpenModal(false)
    sessionStorage.setItem('showAnnouncement', 'true')
  }

  return (
    <CustomModal isOpen={openModal}>
      <div className="bg-white p-6 w-fit h-fit xl:w-[45vw] xl:h-[94vh]  2xl:h-[90vh] 2xl:w-[29vw]  flex flex-col items-center justify-center gap-y-6 rounded-[12px] relative ">
        <Image
          width={552}
          height={764}
          src={'/home/announce.png'}
          alt="notice announce image"
          className="w-full h-[90%]  object-contain"
        />
        <Button onClick={handleCloseModal}>Online Registration Form</Button>
      </div>
      <CloseButton handleClick={handleCloseModal} />
    </CustomModal>
  )
}
