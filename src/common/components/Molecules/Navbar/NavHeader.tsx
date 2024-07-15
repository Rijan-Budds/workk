import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Image from 'next/image'

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
            <div className="flex gap-x-6  pr-6 border-r-[1px] border-border">
              <span className="flex gap-x-[6.67px] items-center font-medium text-[12px] leading-4 tracking-wide uppercase text-heading cursor-default hover:text-primary transition-all duration-500">
                Brochure
                <Image
                  width={6}
                  height={7}
                  alt="arrow right"
                  src={'/home/arrow.svg'}
                />
              </span>
              <span className="flex gap-x-[6.67px]  items-center font-medium text-[12px] leading-4 tracking-wide uppercase text-heading cursor-default hover:text-primary transition-all duration-500">
                Apply now
                <Image
                  width={6}
                  height={7}
                  alt="arrow right"
                  src={'/home/arrow.svg'}
                />
              </span>
              <span className="flex gap-x-[6.67px]  items-center font-medium text-[12px] leading-4 tracking-wide uppercase text-heading cursor-default hover:text-primary transition-all duration-500">
                Result
                <Image
                  width={6}
                  height={7}
                  alt="arrow right"
                  src={'/home/arrow.svg'}
                />
              </span>
            </div>

            <div className="flex gap-x-4 items-center">
              <Image
                width={14}
                height={14}
                src={'/home/twitter.svg'}
                alt="Twitter logo"
              />
              <Image
                width={8}
                height={14}
                src={'/home/facebook.svg'}
                alt="Twitter logo"
              />
              <Image
                width={14}
                height={14}
                src={'/home/instagram.svg'}
                alt="Twitter logo"
              />
              <Image
                width={14}
                height={14}
                src={'/home/youtube.svg'}
                alt="Twitter logo"
              />
            </div>
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}
