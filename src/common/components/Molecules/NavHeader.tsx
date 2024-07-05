import React from 'react'
import { HomeWrapper } from '../Atom/HomeWrapper'
import Image from 'next/image'

export const NavHeader = () => {
  return (
    <div className="py-3 bg-[#E7EEF8]">
      <HomeWrapper>
        <div className="flex items-center gap-x-2">
          <Image
            width={11.67}
            height={9.33}
            src="/home/mail.svg"
            alt="mail icon"
          />
          <span className="font-workSans text-[14px] leading-[16px] font-normal">
            pawanprakriti2048@gmail.com
          </span>
        </div>
      </HomeWrapper>
    </div>
  )
}
