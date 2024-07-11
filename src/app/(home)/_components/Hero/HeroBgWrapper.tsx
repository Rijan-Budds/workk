import React, { ReactNode } from 'react'

export const HeroBgWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[url('/home/blue-bg.svg')] bg-no-repeat min-h-[700px] bg-cover  ">
      {children}
    </div>
  )
}
