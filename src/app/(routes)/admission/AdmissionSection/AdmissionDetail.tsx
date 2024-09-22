'use client'
import { Button } from '@/common/components/Atom/Button'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import React from 'react'
import { IDetailData } from '../_interface/admission'
import Link from 'next/link'
interface AdmissionDetailProps {
  selectedAdmission: IDetailData | undefined
}

const AdmissionDetail: React.FC<AdmissionDetailProps> = ({
  selectedAdmission,
}) => {
  if (!selectedAdmission) {
    return <div>Loading...</div>
  }

  const downloadUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${selectedAdmission.form?.key}`

  return (
    <div className="max-w-[787px]">
      <MiniHeading className="text-left text-secondary">
        {selectedAdmission.academics?.title}
      </MiniHeading>
      <SectionHeading>{selectedAdmission.articleTitle}</SectionHeading>
      <div
        className="mt-6 font-workSans font-normal text-base leading-7 text-body"
        dangerouslySetInnerHTML={{
          __html: selectedAdmission.description,
        }}
      ></div>
      <div className="flex gap-x-5 mt-10">
        <div>
          <Image
            src="/home/academicgirl1.svg"
            width={246}
            height={454}
            alt="hello"
          />
        </div>
        <div className="mt-9">
          <Image
            src="/home/academicgirl2.svg"
            width={246}
            height={454}
            alt="hello"
          />
        </div>
        <div>
          <Image
            src="/home/academicgirl3.svg"
            width={246}
            height={454}
            alt="hello"
          />
        </div>
      </div>
      <SectionHeading>Admission Process</SectionHeading>
      <div
        className="mt-6 font-workSans font-normal text-base leading-7 text-body"
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
