'use client'

import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Link from 'next/link'
import { ISettings } from '@/app/(routes)/contact/_interface/Contact'
import { staticFooterLinksData } from '@/common/constant/data'

interface FooterLinksProps {
  footer?: ISettings
}

const FooterLinks: React.FC<FooterLinksProps> = ({ footer }) => {
  // Use dynamic footer data or fallback to staticFooter
  const phoneNumbers = footer?.phoneNumber ?? [
    { key: 'Number1', value: '+977 9876543210' }
  ]
  const telephones = footer?.telephone ?? [{ key: 'Telephone1', value: '01-6630321' }]
  const otherData = footer?.data ?? [
    { key: 'Email', value: 'naulojyoti@gmail.com' },
    { key: 'Time', value: 'Sun-Fri 6:00 AM - 5:00 PM. Sat Closed' },
  ]

  const filterEmail = otherData.filter((d) => d.key === 'Email')
  const collegeTime = otherData.filter((d) => d.key === 'Time')

  const handleClick = (type: 'tel' | 'mailto', value: string) => {
    if (type === 'tel') {
      window.location.href = `tel:${value}`
    } else if (type === 'mailto') {
      window.location.href = `mailto:${value}`
    }
  }

  return (
    <HomeWrapper className="py-14 ">
      <div className="grid sm:grid-cols-2 mx-auto lg:flex lg:justify-between gap-11 lg:space-y-0">
        <div>
          <h1 className="font-poppins text-xl font-medium leading-[26px] text-white">
            Contact Information
          </h1>
          <div className="mt-6 space-y-4 text-sm leading-4 text-white font-workSans font-semibold">
            Mobile:
            <span
              className="font-light cursor-pointer"
              onClick={() => {
                if (phoneNumbers[0]?.value) {
                  handleClick('tel', phoneNumbers[0].value)
                }
              }}
            >
              {' '}
              {phoneNumbers[0]?.value}{' '}
            </span>
            {phoneNumbers[1] && (
              <span
                className="font-light cursor-pointer"
                onClick={() => {
                  handleClick('tel', phoneNumbers[1].value)
                }}
              >
                {` / ${phoneNumbers[1].value}`}
              </span>
            )}
          </div>
          <div className="mt-6 space-y-4 text-sm leading-4 text-white font-workSans font-semibold">
            Telephone:{' '}
            <span
              className="font-light cursor-pointer"
              onClick={() => {
                if (telephones[0]?.value) {
                  handleClick('tel', telephones[0].value)
                }
              }}
            >
              {telephones[0]?.value}{' '}
            </span>
            {telephones[1] && (
              <span
                onClick={() => {
                  handleClick('tel', telephones[1].value)
                }}
                className="font-light cursor-pointer"
              >
                {` / ${telephones[1].value}`}
              </span>
            )}
          </div>
          <div className="mt-6 space-y-4 text-sm leading-4 text-white font-workSans font-semibold">
            Email:{' '}
            <span
              className="font-light cursor-pointer"
              onClick={() => {
                if (filterEmail[0]?.value) {
                  handleClick('mailto', filterEmail[0].value)
                }
              }}
            >
              {filterEmail[0]?.value}{' '}
            </span>
          </div>
          <div className="mt-6 space-y-4 text-sm leading-4 text-white font-workSans font-semibold">
            Time:
            <span className="font-light"> {collegeTime[0]?.value}</span>
          </div>
        </div>

        {staticFooterLinksData.map((data, sectionIndex) => (
          <div key={sectionIndex} className="">
            <h2 className="font-poppins text-xl font-medium leading-[26px] text-white">
              {data.title}
            </h2>

            <div className="mt-6 space-y-4 text-sm leading-4 text-white font-workSans font-light">
              {data.content.map((content, index) => (
                <div
                  key={index}
                  className={'cursor-pointer hover:underline'}
                >
                  {'subtitle' in content && (
                    <span className="font-medium">
                      <>{content.subtitle}</>:{' '}
                    </span>
                  )}
                  {content.url ? (
                    <Link
                      href={content.url}
                      target={data.title === 'Important Links' ? '_blank' : undefined}
                      rel={
                        data.title === 'Important Links'
                          ? 'noopener noreferrer'
                          : undefined
                      }
                    >
                      {content.text}
                    </Link>
                  ) : (
                    content.text
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </HomeWrapper>
  )
}

export default FooterLinks
