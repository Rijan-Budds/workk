import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const DownloadUi = () => {
  return (
    <div className=" border border-border rounded-lg p-6 flex flex-col gap-y-6">
      <h3 className="font-poppins text-[20px] leading-[26px] font-medium text-heading">
        Download
      </h3>
      <DownloadListUi />
      <DownloadListUi />
    </div>
  )
}

const DownloadListUi = () => {
  return (
    <Link
      href={`/news/sample.pdf`}
      download={'news-sample.pdf'}
      target="_blank"
      className="flex gap-x-3 "
    >
      <Image src={'/news/pdf-icon.svg'} width={20} height={20} alt="pdf icon" />
      <span className="text-body text-[16px] leading-4 font-workSans text-center font-medium">
        Prospectus Grade 11, 12
      </span>
    </Link>
  )
}
