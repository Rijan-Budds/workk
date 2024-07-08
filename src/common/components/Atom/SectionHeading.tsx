import React, { ReactNode } from 'react'

export const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <span className="font-poppins text-[38px] leading-[49.4px] font-medium">
      {children}
    </span>
  )
}
