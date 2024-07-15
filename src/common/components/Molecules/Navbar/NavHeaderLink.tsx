import Image from 'next/image'
import React from 'react'

export const NavHeaderLink = () => {
  return (
    <div className="flex gap-x-6  pr-6 border-r-[1px] border-border">
      <span className="flex gap-x-[6.67px] items-center font-medium text-[12px] leading-4 tracking-wide uppercase text-heading cursor-default hover:text-primary transition-all duration-500">
        Brochure
        <Image width={6} height={7} alt="arrow right" src={'/home/arrow.svg'} />
      </span>
      <span className="flex gap-x-[6.67px]  items-center font-medium text-[12px] leading-4 tracking-wide uppercase text-heading cursor-default hover:text-primary transition-all duration-500">
        Apply now
        <Image width={6} height={7} alt="arrow right" src={'/home/arrow.svg'} />
      </span>
      <span className="flex gap-x-[6.67px]  items-center font-medium text-[12px] leading-4 tracking-wide uppercase text-heading cursor-default hover:text-primary transition-all duration-500">
        Result
        <Image width={6} height={7} alt="arrow right" src={'/home/arrow.svg'} />
      </span>
    </div>
  )
}
