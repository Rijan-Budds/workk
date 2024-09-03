'use client'

import { FaDownload, FaFilePdf } from 'react-icons/fa'
import { IResultData } from '../_interface/Reslut'

const ResultCard = ({ data }: { data: IResultData }) => {
  return (
    <div className="p-5 rounded-xl bg-white flex items-center justify-between gap-4 cursor-pointer 2lg:max-w-[397px] 2lg:max-h-[104px]">
      <FaFilePdf className="text-[32px] text-body" />
      <div className=" w-full ">
        <p className="font-workSans font-medium text-[16px] leading-[27.2px] text-heading ">
          {data.heading}
        </p>
        <span className="font-workSans font-normal text-[14px] leading-4 text-body ">
          {data.date}
        </span>
      </div>
      <FaDownload className="text-[25px] text-body " />
      <div></div>
    </div>
  )
}

export default ResultCard
