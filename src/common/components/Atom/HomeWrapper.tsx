import { cn } from '@/common/utils/utils'
import React, { ReactNode } from 'react'

export const HomeWrapper = ({
  children,
  className,
  isBg = false,
}: {
  children: ReactNode
  className?: string
  isBg?: boolean
}) => {
  return (
    <div
      className={cn('w-full px-12  2xl:px-[340px] py-[112px]', className, {
        'bg-[#F8FAFD] py-[40px]  md:py-[100px]': isBg,
      })}
    >
      {children}
    </div>
  )
}
