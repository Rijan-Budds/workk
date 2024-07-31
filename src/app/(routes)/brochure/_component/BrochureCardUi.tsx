import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa6'
import { INotice } from '../../notice/_interface/type'
import Link from 'next/link'

export const BrochureCardUi = ({ data }: { data: INotice }) => {
  return (
    <Link
      download={'brochure-sample.pdf'}
      target="_blank"
      href={`/news/sample.pdf`}
    >
      <div className="p-5 rounded-xl bg-white flex items-center justify-between gap-4  border-b-[4px] border-r-[4px] border-shadowBorder group hover:bg-primary transition-all duration-500 cursor-pointer 2lg:max-w-[397px] 2lg:max-h-[104px]">
        <Image
          src={data.src}
          width={56}
          height={56}
          alt="Brochure image"
          className="rounded-full size-14 object-cover"
        />
        <div className=" w-full ">
          <p className="font-workSans font-medium text-[16px] leading-[27.2px] text-heading group-hover:text-white transition-all duration-500">
            {data.title}
          </p>
          <span className="font-workSans font-normal text-[14px] leading-4 text-body group-hover:text-white transition-all duration-500 ">
            {data.date}
          </span>
        </div>
        <FaDownload className="text-[25px] text-body group-hover:text-white transition-all duration-500" />
      </div>
    </Link>
  )
}
