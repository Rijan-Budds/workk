import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { academicCardsDataOne } from './constant/data'
import { cn } from '@/common/utils/utils'

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
      <span className="text-primary font-poppins font-semibold text-[20px] leading-[26px] z-10">
        {title}
      </span>
      <p className="font-workSans font-normal text-[16px] leading-[27.2px] max-w-[333px] z-10">
        {description}
      </p>
      <div className="mt-4 flex flex-col gap-y-8 z-10">
        {list.map((list, index) => (
          <AcademicList key={list.id} title={list.title} index={index} />
        ))}
      </div>
      <div
        className={`size-[259px] rounded-full ${color} absolute bottom-[-11.25rem] -right-[9.75rem] group-hover:scale-[500%] transition-all duration-500 z-[1]`}
      />
    </div>
  )
}

const AcademicList = ({ title, index }: { title: string; index: number }) => {
  return (
    <div className="flex items-center gap-x-2  group cursor-default ">
      <span
        className={cn(
          'font-workSans font-normal text-[16px] leading-4  transition-all duration-500 ',
          {
            'text-primary group-hover:text-black':
              index === 0 && title === 'Management',
          }
        )}
      >
        {title}
      </span>
      <GoArrowRight
        className={cn(' transition-all duration-500 w-4', {
          'text-primary group-hover:text-black':
            index === 0 && title === 'Management',
        })}
      />
    </div>
  )
}
