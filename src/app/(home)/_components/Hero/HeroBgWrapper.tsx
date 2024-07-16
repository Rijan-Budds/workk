import React, { ReactNode } from 'react'

export const HeroBgWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[url('/home/blue-bg.svg')] bg-no-repeat   2lg:bg-cover  bg-background 2lg:bg-transparent  ">
      {children}
    </div>
  )
}
