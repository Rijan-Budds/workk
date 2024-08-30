'use client'

import React, { useState } from 'react'
import { BrochureCardUi } from './BrochureCardUi'
import { NoticeCardData } from '../../notice/constant/data'
import { PdfViewerModal } from './PdfViewerModal'
import { CustomModal } from '@/common/components/Molecules/Modal'

export const BrochureUi = () => {
  const [openModal] = useState<boolean>(false)
  return (
    <>
      <div className="flex flex-col  gap-y-10 2lg:items-center">
        <p className="text-body font-workSans text-[16px] leading-[27.2px] font-normal text-center 2lg:max-w-[713px] ">
          Our vision is “Working hard to be always the best”. We, as an
          institute are aimed to encourage each of our students & Guide them to
          achieve a successful career tudents them to achieve success.
        </p>
        <div className="grid  2lg:grid-cols-3 gap-6">
          {NoticeCardData.map((notice) => (
            <BrochureCardUi data={notice} key={notice.id} />
          ))}
        </div>
      </div>
      {openModal && (
        <CustomModal isOpen={openModal}>
          <PdfViewerModal />
        </CustomModal>
      )}
    </>
  )
}
