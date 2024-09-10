'use client'

import React, { useState } from 'react'
import { NoticeCardData } from '../constant/data'
import { NoticeCard } from './NoticeCard'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { ShareModal } from './ShareModal'

export const NoticeClientSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className="flex flex-col  gap-y-10 2lg:items-center">
      <p className="text-body font-workSans text-[16px] leading-[27.2px] font-normal text-center 2lg:max-w-[713px] ">
        Stay up-to-date with the latest news and events at Pawan Prakriti
        Secondary School. Discover student achievements, sporting highlights and
        other event stories.
      </p>
      <div className="grid  2lg:grid-cols-3 gap-6">
        {NoticeCardData.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} setOpen={setIsOpen} />
        ))}
      </div>

      {isOpen && (
        <CustomModal isOpen={isOpen}>
          <ShareModal setOpen={setIsOpen} />
        </CustomModal>
      )}
    </div>
  )
}
