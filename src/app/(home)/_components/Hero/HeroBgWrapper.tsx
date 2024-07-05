import React, { ReactNode } from 'react'

export const HeroBgWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[url('/home/blue-bg.svg')] bg-contain bg-no-repeat  h-screen mt-[100px]">
      {children}
    </div>
  )
}
