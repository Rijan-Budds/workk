'use client'

import { FaFilePdf } from 'react-icons/fa'
import { IResult } from '../_interface/result'
import { format } from 'date-fns'
import { MdArrowForwardIos } from 'react-icons/md'
import { Dispatch, SetStateAction } from 'react'

const ResultCard = ({
  data,
  setPdfSrc,
  setOpen,
}: {
  data: IResult
  setPdfSrc: Dispatch<SetStateAction<string | null>>
  setOpen: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div
      onClick={() => {
        setPdfSrc(`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data.file.key}`)
        setOpen(true)
      }}
      className="p-5 rounded-xl bg-white flex items-center justify-between gap-4 cursor-pointer 2lg:max-w-[397px] 2lg:max-h-[104px] group hover:bg-primary transition-colors duration-300"
    >
      <FaFilePdf className="text-[32px] text-body group-hover:text-white transition-colors duration-500" />
      <div className=" w-full ">
        <p className="font-workSans font-medium text-[16px] leading-[27.2px] text-heading group-hover:text-white transition-colors duration-500">
          {data.title}
        </p>
        <span className="font-workSans font-normal text-[14px] leading-4 text-body group-hover:text-white transition-colors duration-500 ">
          {format(data.createdAt, 'MMMM d, yyyy')}
        </span>
      </div>
      <MdArrowForwardIos className="text-[25px] text-body group-hover:text-white transition-all duration-500" />
    </div>
  )
}

export default ResultCard
