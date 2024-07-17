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
        'w-full px-4 lg:px-[60px] 2xl:[200px] 2xl_lg:px-[240px]  3xl:px-[340px]  5xl:px-[540px]  py-[112px]',
        className,
        {
          'bg-background py-[40px]  md:py-[112px]': isBg,
        }
      )}
    >
      {children}
    </div>
  )
}
