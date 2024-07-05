import React, { ReactNode } from 'react'

export const HomeWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="w-full px-12  2xl:px-[340px]">{children}</div>
}
