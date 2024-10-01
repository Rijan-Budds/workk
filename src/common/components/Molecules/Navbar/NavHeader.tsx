'use client'

import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Image from 'next/image'
import { NavHeaderLink } from './NavHeaderLink'
import { useRouter } from 'next/navigation'
import { ISocialMediaData } from '@/app/(routes)/contact/_interface/Contact'
import Link from 'next/link'

export const NavHeader = ({
  socialLinks,
}: {
  socialLinks: ISocialMediaData[] | undefined
}) => {
  const router = useRouter()
  const handleMailClick = (mail: string) => {
    router.push(`mailto:${mail}`)
  }

  const handleRedirectContact = (contact: string) => {
    router.push(`tel:${contact}`)
  }

  return (
    <div className="py-3 bg-background border-b-[1px] border-border hidden 2lg:block ">
      <HomeWrapper className="py-0">
        <div className="flex justify-between">
          <div className="flex gap-x-8 ">
            <div
              onClick={() => handleMailClick('pawanprakriti2048@gmail.com')}
              className="flex items-center gap-x-2 cursor-pointer"
            >
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
            <div
              onClick={() => handleRedirectContact('9843589375')}
              className="flex items-center gap-x-2 cursor-pointer"
            >
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
            <NavHeaderSocialMedia links={socialLinks} />
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}

export const NavHeaderSocialMedia = ({
  links,
}: {
  links: ISocialMediaData[] | undefined
}) => {
  return (
    <div className="flex gap-x-6 2lg:gap-x-4 items-center">
      {links &&
        links?.map((d) => {
          return (
            <>
              {d.key === 'X' && (
                <Link href={d.key} target="_blank">
                  <Image
                    width={14}
                    height={14}
                    src={'/home/twitter.svg'}
                    alt="Twitter logo"
                    className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
                  />
                </Link>
              )}
              {d.key === 'Facebook' && (
                <Link href={d.key} target="_blank">
                  <Image
                    width={8}
                    height={14}
                    src={'/home/facebook.svg'}
                    alt="Twitter logo"
                    className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
                  />
                </Link>
              )}
              {d.key === 'Instagram' && (
                <Link href={d.key} target="_blank">
                  <Image
                    width={14}
                    height={14}
                    src={'/home/instagram.svg'}
                    alt="Twitter logo"
                    className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
                  />
                </Link>
              )}
              {d.key === 'YouTube' && (
                <Link href={d.key} target="_blank">
                  <Image
                    width={14}
                    height={14}
                    src={'/home/youtube.svg'}
                    alt="Twitter logo"
                    className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
                  />
                </Link>
              )}
            </>
          )
        })}
    </div>
  )
}
