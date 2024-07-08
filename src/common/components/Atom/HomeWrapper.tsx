import { cn } from '@/common/utils/utils'
import React, { ReactNode } from 'react'

export const HomeWrapper = ({
  children,
  isBg,
  className,
}: {
  children: ReactNode
  isBg?: boolean
  className?: string
}) => {
  return (
    <div
      className={cn(
        'w-full px-12  2xl:px-[340px] py-[48px]  md:py-[100px]',
        {
          'bg-[#F8FAFD] py-[40px]  md:py-[100px]': isBg,
        },
        className
      )}
    >
      {children}
    </div>
  )
}
