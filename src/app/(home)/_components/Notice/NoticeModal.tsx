'use client'

import { Button } from '@/common/components/Atom/Button'
import { CloseButton } from '@/common/components/Atom/CloseButton'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const NoticeModal = () => {
  const [openModal, setOpenModal] = useState<boolean>(true)

  useEffect(() => {
    const isModalAlreadyShown =
      sessionStorage.getItem('showAnnouncement') === 'true'
    if (isModalAlreadyShown) {
      setOpenModal(false)
    }
  }, [openModal])

  const handleCloseModal = () => {
    setOpenModal(false)
    sessionStorage.setItem('showAnnouncement', 'true')
  }

  return (
    <CustomModal isOpen={openModal}>
      <div
        className={cn(
          'bg-white p-6 md:w-[45vw] md:h-[80vw] lg:w-[45vw] lg:h-[60vh] xl:w-[42vw] xl:h-[94vh] 2xl:h-[94vh] 2xl:w-[29vw] flex 2xl_md:w-[45vw] 2xl_md:h-[94vh] 5xl:w-[45vw] 5xl:h-[94vh] flex-col items-center justify-center gap-y-6 rounded-[12px] relative'
        )}
      >
        <Image
          width={552}
          height={764}
          src={'/home/announce.jpg'}
          alt="notice announce image"
          className="w-full h-[90%]  object-contain"
        />
        <Link href={'/apply'}>
          <Button onClick={handleCloseModal}>Online Registration Form</Button>
        </Link>
      </div>
      <CloseButton handleClick={handleCloseModal} />
    </CustomModal>
  )
}
