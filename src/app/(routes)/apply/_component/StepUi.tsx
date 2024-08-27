import { cn } from '@/lib/utils'
import React from 'react'

export const MultipleSteps = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div className="flex gap-x-3 w-full justify-center ">
      {Array.from({ length: 3 }).map((_, i) => (
        <StepUi key={i} isActive={i === activeIndex} />
      ))}
    </div>
  )
}

export const StepUi = ({ isActive }: { isActive: boolean }) => {
  return (
    <div className="flex items-center gap-x-3 w-full">
      <div
        className={cn('size-6 bg-white rounded-full', {
          ' border border-primary  p-1 transition-all duration-500': isActive,
        })}
      >
        <div
          className={cn(
            'bg-primaryLight rounded-full w-full h-full aspect-square ',
            {
              'bg-primary transition-all duration-500': isActive,
            }
          )}
        />
      </div>
      <span
        className={cn('min-w-[62px] w-full  h-1 bg-primaryLight rounded-full', {
          'bg-primary transition-all duration-500': isActive,
        })}
      />
    </div>
  )
}
