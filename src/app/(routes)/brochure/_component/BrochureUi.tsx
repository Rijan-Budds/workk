'use client'

import React, { useState } from 'react'
import { BrochureCardUi } from './BrochureCardUi'
import { PdfViewerModal } from './PdfViewerModal'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { IBrochureItem } from '../interface/brochureType'

export const BrochureUi = ({ data }: { data: IBrochureItem[] | undefined }) => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [pdfSrc, setPdfSrc] = useState<string | null>(null)

  return (
    <>
      <div className="flex flex-col  gap-y-10 2lg:items-center">
        <p className="text-body font-workSans text-[16px] leading-[27.2px] font-normal text-center 2lg:max-w-[713px] ">
          Discover why Pawan Prakriti English Secondary School (PPESS) is the
          right choice for your child`&apos;s education. Our comprehensive
          brochure provides insights into our academic programs,
          state-of-the-art facilities, co-curricular activities, and our
          commitment to nurturing well-rounded individuals. Get all the
          information you need to make an informed decision.
        </p>
        <div className="grid  2lg:grid-cols-3 gap-6">
          {data &&
            data.map((notice) => (
              <BrochureCardUi
                data={notice}
                key={notice.id}
                handleBrochureClick={() => {
                  setOpenModal(true)
                  setPdfSrc(
                    `${process.env.NEXT_PUBLIC_IMAGE_URL}/${notice.file.key}`
                  )
                }}
              />
            ))}
        </div>
      </div>
      {openModal && (
        <CustomModal isOpen={openModal}>
          <PdfViewerModal setOpen={setOpenModal} src={pdfSrc} />
        </CustomModal>
      )}
    </>
  )
}
