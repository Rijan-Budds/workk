'use client'
import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Image from 'next/image'
import { NavHeaderLink } from './NavHeaderLink'
import Link from 'next/link'

export const NavHeader = () => {
  // Hardcoded replacement values
  const displayEmail = "glory@gloryschool.edu.np";
  const displayPhone = "01-6211915";
  
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
            <NavHeaderSocialMedia />
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}

// Static social media component
export const NavHeaderSocialMedia = () => {
  const socialMediaIcons = [
    {
      name: 'Twitter',
      icon: '/home/twitter.svg',
      href: 'twitter.com',
      width: 14,
      height: 14
    },
    {
      name: 'Facebook',
      icon: '/home/facebook.svg',
      href: 'facebook.com',
      width: 8,
      height: 14
    },
    {
      name: 'Instagram',
      icon: '/home/instagram.svg',
      href: 'instagram.com',
      width: 14,
      height: 14
    },
    {
      name: 'YouTube',
      icon: '/home/youtube.svg',
      href: 'youtube.com',
      width: 14,
      height: 14
    }
  ]

  return (
  <div className="flex gap-x-6 2lg:gap-x-4 items-center">
    {socialMediaIcons.map((social, index) => (
      <Link
        key={index}
        href={`https://${social.href}`}
        target="_blank"      // open in new tab
        rel="noopener noreferrer"
        aria-label={`Visit ${social.name}`}
        className="inline-block" // ensure clickable area fits icon
      >
        <Image
          width={social.width}
          height={social.height}
          src={social.icon}
          alt={`${social.name} logo`}
          className="w-6 h-6 2lg:w-[14px] 2lg:h-[14px]"
        />
      </Link>
    ))}
  </div>
)
}