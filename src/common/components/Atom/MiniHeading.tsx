import React, { ReactNode } from 'react'

export const MiniHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h3 className="text-secondary text-[14px] leading-[21px] tracking-[2px]  font-medium font-workSans uppercase">
      {children}
    </h3>
  )
}
