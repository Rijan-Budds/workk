import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { academicCardsDataOne } from './constant/data'

export const AcademicCards = ({
  title,
  description,
  list,
  color,
}: {
  title: string
  description: string
  list: typeof academicCardsDataOne
  color: string
}) => {
  return (
    <div className="bg-white p-8 rounded-[12px] flex flex-col gap-y-4 relative group overflow-hidden">
      <span className="text-[#187EC0] font-poppins font-semibold text-[20px] leading-[26px]">
        {title}
      </span>
      <p className="font-workSans font-normal text-[16px] leading-[27.2px] max-w-[333px]">
        {description}
      </p>
      <div className="mt-4 flex flex-col gap-y-8">
        {list.map((list) => (
          <AcademicList key={list.id} title={list.title} />
        ))}
      </div>
      <div
        className={`size-[259px] rounded-full ${color} absolute bottom-[-11.25rem] -right-[9.75rem] group-hover:scale-[500%] transition-all duration-500`}
      />
    </div>
  )
}

const AcademicList = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center gap-x-2  group cursor-default ">
      <span className="font-workSans font-normal text-[16px] leading-4 group-hover:text-[#187EC0] transition-all duration-500">
        {title}
      </span>
      <GoArrowRight className="group-hover:text-[#187EC0] transition-all duration-500 w-4" />
    </div>
  )
}
