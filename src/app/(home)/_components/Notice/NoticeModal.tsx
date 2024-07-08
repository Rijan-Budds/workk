'use client'

import { Button } from '@/common/components/Atom/Button'
import { CustomModal } from '@/common/components/Molecules/Modal'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'

export const NoticeModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(true)
  return (
    <CustomModal isOpen={openModal}>
      <div className="bg-white p-6 flex flex-col gap-y-6 rounded-[12px] relative">
        <Image
          width={552}
          height={764}
          src={'/home/announce.png'}
          alt="notice announce image"
        />
        <Button onClick={() => setOpenModal(false)}>
          Online Registration Form
        </Button>
      </div>

      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-10  2xl:top-1 right-1 bg-[#187EC0] size-[32px] rounded-full flex justify-center items-center"
      >
        <IoClose className="text-white size-5" />
      </button>
    </CustomModal>
  )
}
