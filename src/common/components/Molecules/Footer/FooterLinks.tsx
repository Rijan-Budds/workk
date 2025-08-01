'use client'

import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Link from 'next/link'
import { staticFooterLinksData } from '@/common/constant/data'

const staticFooter = {
  phoneNumber: [
    { key: 'Number1', value: '+1234567890' },
    { key: 'Number2', value: '+0987654321' },
  ],
  telephone: [
    { key: 'Telephone1', value: '+01-6630626' },
  ],
  data: [
    { key: 'Email', value: 'youremail@example.com' },
    { key: 'Time', value: 'Sun-Fri 6:00 AM - 5:00 PM. Sat Closed' },
  ],
}

const FooterLinks = () => {
  const filterEmail = staticFooter.data.filter((d) => d.key === 'Email')
  const collegeTime = staticFooter.data.filter((d) => d.key === 'Time')

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
                if (staticFooter.phoneNumber[0]?.value) {
                  handleClick('tel', staticFooter.phoneNumber[0].value)
                }
              }}
            >
              {' '}
              {staticFooter.phoneNumber[0]?.value}{' '}
            </span>
            {staticFooter.phoneNumber[1] && (
              <span
                className="font-light cursor-pointer"
                onClick={() => {
                  handleClick('tel', staticFooter.phoneNumber[1].value)
                }}
              >
                {` / ${staticFooter.phoneNumber[1].value}`}
              </span>
            )}
          </div>
          <div className="mt-6 space-y-4 text-sm leading-4 text-white font-workSans font-semibold">
            Telephone:{' '}
            <span
              className="font-light cursor-pointer"
              onClick={() => {
                if (staticFooter.telephone[0]?.value) {
                  handleClick('tel', staticFooter.telephone[0].value)
                }
              }}
            >
              {staticFooter.telephone[0]?.value}{' '}
            </span>
            {staticFooter.telephone[1] && (
              <span
                onClick={() => {
                  handleClick('tel', staticFooter.telephone[1].value)
                }}
                className="font-light cursor-pointer"
              >
                {` / ${staticFooter.telephone[1].value}`}
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
                  className={
                    'cursor-pointer hover:underline' // No hover effect for contact information
                  }
                >
                  {'subtitle' in content && (
                    <span className="font-medium">
                      <>{content.subtitle}</>:{' '}
                    </span>
                  )}
                  {content.url ? (
                    <Link
                      href={content.url}
                      target={
                        data.title === 'Important Links' ? '_blank' : undefined
                      }
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
