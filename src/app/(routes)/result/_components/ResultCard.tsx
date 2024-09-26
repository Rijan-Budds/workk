'use client'

import { FaFilePdf } from 'react-icons/fa'
import { IResult } from '../_interface/result'
import { FaDownload } from 'react-icons/fa6'
import { format } from 'date-fns'

const ResultCard = ({ data }: { data: IResult }) => {
  return (
    <div className="p-5 rounded-xl bg-white flex items-center justify-between gap-4 cursor-pointer 2lg:max-w-[397px] 2lg:max-h-[104px]">
      <FaFilePdf className="text-[32px] text-body" />
      <div className=" w-full ">
        <p className="font-workSans font-medium text-[16px] leading-[27.2px] text-heading ">
          {data.title}
        </p>
        <span className="font-workSans font-normal text-[14px] leading-4 text-body ">
          {format(data.createdAt, 'MMMM d, yyyy')}
        </span>
      </div>
      <FaDownload className="text-[25px] text-body " />
    </div>
  )
}

export default ResultCard
