'use client'

import React, { Dispatch, SetStateAction } from 'react'
import { IoMdShare } from 'react-icons/io'
import { useRouter } from 'next/navigation'
import { INewsItem } from '../../news/interface/newsType'
import { format } from 'date-fns'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'

export const NoticeCard = ({
  notice,
  setOpen,
}: {
  notice: INewsItem | undefined
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const router = useRouter()

  const handleShareButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setOpen(true)
  }

  return (
    <div
      onClick={() => router.push(`notice/${notice?.id}`)}
      className="p-5 rounded-xl bg-white flex items-center justify-between gap-4  border-b-[4px] border-r-[4px] border-shadowBorder group hover:bg-primary transition-all duration-500 cursor-pointer 2lg:max-w-[397px] 2lg:max-h-[104px]"
    >
      <ImageWithPlaceholder
        src={notice?.images ? notice?.images.key : undefined}
        width={56}
        height={56}
        alt="notice image"
        className="rounded-full size-14 object-cover"
      />
      <div className=" w-full ">
        <p className="font-workSans font-medium text-[16px] leading-[27.2px] text-heading group-hover:text-white transition-all duration-500">
          {notice?.title}
        </p>
        {notice?.createdAt && (
          <span className="font-workSans font-normal text-[14px] leading-4 text-body group-hover:text-white transition-all duration-500 ">
            {format(notice?.createdAt, 'MMMM d, yyyy')}
          </span>
        )}
      </div>
      <IoMdShare
        onClick={handleShareButtonClick}
        className="text-[23px] text-body group-hover:text-white transition-all duration-500"
      />
    </div>
  )
}
