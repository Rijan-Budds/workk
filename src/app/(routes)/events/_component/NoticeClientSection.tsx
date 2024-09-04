'use client'

import React, { useState } from 'react'
import { NoticeCardData } from '../constant/data'
import { NoticeCard } from './NoticeCard'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { ShareModal } from './ShareModal'

export const NoticeClientSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
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
    </>
  )
}
