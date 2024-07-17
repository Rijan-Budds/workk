import React, { ReactNode } from 'react'

export const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <span className="font-poppins text-[28px]  2lg:text-[38px] leading-[36.4px]  2lg:leading-[49.4px] font-medium text-center 2lg:text-left">
      {children}
    </span>
  )
}
