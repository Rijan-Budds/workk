'use client'

import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Image from 'next/image'
import { NavHeaderLink } from './NavHeaderLink'
import {
  ISettings,
  ISocialMediaData,
} from '@/app/(routes)/contact/_interface/Contact'

export const NavHeader = ({
  socialLinks,
}: {
  socialLinks: ISettings | undefined
}) => {
  // Hardcoded replacement values
  const displayEmail = "info@naulojyoti.edu.np";
  const displayPhone = "+977 1-5110000";

  return (
    <div className="py-3 bg-background border-b-[1px] border-border hidden 2lg:block ">
      <HomeWrapper className="py-0">
        <div className="flex justify-between">
          <div className="flex gap-x-8 ">
            {/* Using hardcoded email */}
            <div className="flex items-center gap-x-2">
              <Image
                width={11.67}
                height={9.33}
                src="/home/mail.svg"
                alt="mail icon"
              />
              <span className="font-workSans text-[14px] leading-[16px] font-normal">
                {displayEmail}
              </span>
            </div>
            
            {/* Using hardcoded phone number */}
            <div className="flex items-center gap-x-2">
              <Image
                width={11.67}
                height={9.33}
                src="/home/call.svg"
                alt="call icon"
              />
              <span className="font-workSans text-[14px] leading-[16px] font-normal">
                {displayPhone}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-6 justify-between">
            <NavHeaderLink />
            <NavHeaderSocialMedia links={socialLinks?.socialMedia} />
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}

// Social media component remains the same as your last version
export const NavHeaderSocialMedia = ({
  links,
}: {
  links: ISocialMediaData[] | undefined
}) => {
  return (
    <div className="flex gap-x-6 2lg:gap-x-4 items-center">
      {links &&
        links?.map((d, index) => {
          return (
            <React.Fragment key={index}>
              {d.key === 'X' && (
                <Image
                  width={14}
                  height={14}
                  src={'/home/twitter.svg'}
                  alt="Twitter logo"
                  className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
                />
              )}
              {d.key === 'Facebook' && (
                <Image
                  width={8}
                  height={14}
                  src={'/home/facebook.svg'}
                  alt="Facebook logo"
                  className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
                />
              )}
              {d.key === 'Instagram' && (
                <Image
                  width={14}
                  height={14}
                  src={'/home/instagram.svg'}
                  alt="Instagram logo"
                  className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
                />
              )}
              {d.key === 'YouTube' && (
                <Image
                  width={14}
                  height={14}
                  src={'/home/youtube.svg'}
                  alt="YouTube logo"
                  className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
                />
              )}
            </React.Fragment>
          )
        })}
    </div>
  )
}