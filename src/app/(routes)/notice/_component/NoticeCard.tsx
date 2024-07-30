import Image from 'next/image'
import React from 'react'
import { IoMdShare } from 'react-icons/io'
import { INotice } from '../_interface/type'

export const NoticeCard = ({ notice }: { notice: INotice }) => {
  return (
    <div className="p-5 rounded-xl bg-white flex items-center justify-between gap-4  border-b-[4px] border-r-[4px] border-shadowBorder group hover:bg-primary transition-all duration-500 cursor-pointer 2lg:max-w-[397px] 2lg:max-h-[104px]">
      <Image
        src={notice.src}
        width={56}
        height={56}
        alt="notice image"
        className="rounded-full size-14 object-cover"
      />
      <div className=" w-full ">
        <p className="font-workSans font-medium text-[16px] leading-[27.2px] text-heading group-hover:text-white transition-all duration-500">
          {notice.title}
        </p>
        <span className="font-workSans font-normal text-[14px] leading-4 text-body group-hover:text-white transition-all duration-500 ">
          {notice.date}
        </span>
      </div>
      <IoMdShare className="text-[23px] text-body group-hover:text-white transition-all duration-500" />
    </div>
  )
}
