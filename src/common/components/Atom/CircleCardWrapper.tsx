import React, { ReactNode } from 'react'

export const CircleCardWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-6 bg-background  relative overflow-hidden rounded-3xl">
      {children}
    </div>
  )
}
