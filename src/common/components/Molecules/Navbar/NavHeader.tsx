import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Image from 'next/image'
import { NavHeaderLink } from './NavHeaderLink'

export const NavHeader = () => {
  return (
    <div className="py-3 bg-background border-b-[1px] border-border hidden 2lg:block ">
      <HomeWrapper className="py-0">
        <div className="flex justify-between">
          <div className="flex gap-x-8 ">
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
            <div className="flex items-center gap-x-2">
              <Image
                width={11.67}
                height={9.33}
                src="/home/call.svg"
                alt="call icon"
              />
              <span className="font-workSans text-[14px] leading-[16px] font-normal">
                9843589375
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-6 justify-between">
            <NavHeaderLink />
            <NavHeaderSocialMedia />
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}

export const NavHeaderSocialMedia = () => {
  return (
    <div className="flex gap-x-6 2lg:gap-x-4 items-center">
      <Image
        width={14}
        height={14}
        src={'/home/twitter.svg'}
        alt="Twitter logo"
        className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
      />
      <Image
        width={8}
        height={14}
        src={'/home/facebook.svg'}
        alt="Twitter logo"
        className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
      />
      <Image
        width={14}
        height={14}
        src={'/home/instagram.svg'}
        alt="Twitter logo"
        className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
      />
      <Image
        width={14}
        height={14}
        src={'/home/youtube.svg'}
        alt="Twitter logo"
        className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
      />
    </div>
  )
}
