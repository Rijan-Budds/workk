import React, { ReactNode } from 'react'

export const MiniHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="text-secondary text-[12px] 2lg:text-[14px] leading-[21px] tracking-[2px]  font-medium font-workSans uppercase text-center 2lg:text-left">
      {children}
    </h3>
  )
}
