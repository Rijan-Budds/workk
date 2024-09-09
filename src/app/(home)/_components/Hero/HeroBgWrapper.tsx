import React, { ReactNode } from 'react'

export const HeroBgWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" bg-[linear-gradient(270deg,#187EC0_-3.39%,#005296_112.11%)] md:bg-[url('/home/blue-bg.svg')] bg-no-repeat 2lg:bg-cover bg-background 2lg:bg-transparent  ">
      {children}
    </div>
  )
}
