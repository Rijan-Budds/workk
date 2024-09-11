'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { Dispatch, SetStateAction } from 'react'

export const NavHeaderLink = ({
  setOpenSidebar,
}: {
  setOpenSidebar?: Dispatch<SetStateAction<boolean>>
}) => {
  const handleLinkClick = () => {
    if (setOpenSidebar) {
      setOpenSidebar(false)
    }
  }

  return (
    <div className="flex gap-x-6  pr-6 border-r-[1px] border-border">
      <Link href={'/brochure'} onClick={handleLinkClick}>
        <span className="flex gap-x-[6.67px] items-center font-medium text-[16px] 2lg:text-[12px] leading-4 tracking-wide uppercase text-heading  hover:text-primary transition-all duration-500">
          Brochure
          <Image
            width={6}
            height={7}
            alt="arrow right"
            src={'/home/arrow.svg'}
          />
        </span>
      </Link>
      <Link href={'/apply'} className="" onClick={handleLinkClick}>
        <span className="flex gap-x-[6.67px]  items-center  font-medium text-[16px] 2lg:text-[12px] leading-4 tracking-wide uppercase text-heading  hover:text-primary transition-all duration-500">
          Apply now
          <Image
            width={6}
            height={7}
            alt="arrow right"
            src={'/home/arrow.svg'}
          />
        </span>
      </Link>

      <Link href={'/result'} className="" onClick={handleLinkClick}>
        <span className="flex gap-x-[6.67px] items-center font-medium text-[16px] 2lg:text-[12px] leading-4 tracking-wide uppercase text-heading  hover:text-primary transition-all duration-500 font-workSans">
          Result
          <Image
            width={6}
            height={7}
            alt="arrow right"
            src={'/home/arrow.svg'}
          />
        </span>
      </Link>
    </div>
  )
}
