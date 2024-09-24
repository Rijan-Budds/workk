'use client'
import { Button } from '@/common/components/Atom/Button'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import React from 'react'
import { IDetailData } from '../_interface/admission'
import Link from 'next/link'
import { NoDataFound } from '@/common/components/NoDataFound'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
interface AdmissionDetailProps {
  selectedAdmission: IDetailData | undefined
}

const AdmissionDetail: React.FC<AdmissionDetailProps> = ({
  selectedAdmission,
}) => {
  if (!selectedAdmission) {
    return (
      <div>
        <NoDataFound title="No Admission Found" />
      </div>
    )
  }

  const downloadUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${selectedAdmission.form?.key}`

  return (
    <div className="max-w-[787px]">
      <MiniHeading className="text-left text-secondary">
        {selectedAdmission.academics?.title}
      </MiniHeading>
      <SectionHeading>{selectedAdmission.articleTitle}</SectionHeading>
      <div className="flex gap-x-5 my-10">
        {selectedAdmission.image?.key.map((imageKey, index) => (
          <div key={imageKey} className={index === 1 ? 'mt-10' : ''}>
            <ImageWithPlaceholder
              src={imageKey ? imageKey : undefined}
              width={246}
              height={454}
              alt={`Image ${index + 1}`}
              className="h-[191px] md:h-[388px] 2lg:w-[246px] 2lg:h-[454px] rounded-xl object-cover"
            />
          </div>
        ))}
      </div>
      <div
        className="my-6 font-workSans font-normal text-base leading-7 text-body"
        dangerouslySetInnerHTML={{
          __html: selectedAdmission.description,
        }}
      ></div>

      <SectionHeading>Admission Process</SectionHeading>
      <div
        className="mt-6 font-workSans font-normal text-base leading-7 text-body break-all"
        dangerouslySetInnerHTML={{
          __html: selectedAdmission.process,
        }}
      ></div>

      <Link
        href={downloadUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button className="mt-10">Download Form</Button>
      </Link>
    </div>
  )
}

export default AdmissionDetail
