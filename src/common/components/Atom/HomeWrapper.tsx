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
      className={cn(
        'w-full lg:px-[60px] 2xl:[200px]  3xl:px-[340px] py-[112px]',
        className,
        {
          'bg-[#F8FAFD] py-[40px]  md:py-[112px]': isBg,
        }
      )}
    >
      {children}
    </div>
  )
}
