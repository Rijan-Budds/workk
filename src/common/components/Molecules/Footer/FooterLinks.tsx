import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import { ISettings } from '@/app/(routes)/contact/_interface/Contact'
import Link from 'next/link'
import { staticFooterLinksData } from '@/common/constant/data'

interface FooterLinksProps {
  footer: ISettings | undefined
}

const FooterLinks = async ({ footer }: FooterLinksProps) => {
  const contactData = footer?.data || []

  const contactInfoSection = {
    title: 'Contact Information',
    content: contactData.map((item) => ({
      subtitle: item.key,
      text: item.value,
      url:
        item.key === 'Email'
          ? `mailto:${item.value}`
          : item.key === 'Contact Number'
          ? `tel:${item.value}`
          : undefined,
    })),
  }

  const allFooterLinksData = [contactInfoSection, ...staticFooterLinksData]
  return (
    <HomeWrapper className="py-14">
      <div className="grid sm:grid-cols-2 mx-auto lg:flex lg:justify-between gap-11 lg:space-y-0">
        {allFooterLinksData.map((data, sectionIndex) => (
          <div key={sectionIndex} className="">
            <h1 className="font-poppins text-xl font-medium leading-[26px] text-white">
              {data.title}
            </h1>

            <div className="mt-6 space-y-4 text-sm leading-4 text-white font-workSans font-light">
              {data.content.map((content, index) => (
                <div
                  key={index}
                  className={
                    sectionIndex === 0
                      ? 'cursor-pointer' // No hover effect for contact information
                      : 'hover:underline cursor-pointer'
                  }
                >
                  {'subtitle' in content && (
                    <span className="font-medium">{content.subtitle} : </span>
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
