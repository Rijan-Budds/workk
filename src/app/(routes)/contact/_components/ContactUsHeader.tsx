import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const contactHeader = [
  {
    icon: '/home/phone.svg',
    title: 'Phone',
    desc: ['+977-9843589375 / ', '+977-9843201703'],
    secondDesc: ['01-5007259', '01-5007275'],
    redirect: '',
  },
  {
    icon: '/home/envelop.svg',
    title: 'E-mail',
    desc: ['pawanprakriti2048@gmail.com'],
    secondDesc: [''],
    redirect: 'mailto:support@example.com?subject=SendMail&body=Description',
  },
  {
    icon: '/home/clock.svg',
    title: 'Time',
    desc: ['Sun - Fri 6:00 AM - 5:00'],
    secondDesc: ['Sat Closed'],
    redirect: '',
  },
]

const ContactUsHeader = () => {
  return (
    <HomeWrapper className="!pb-0">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-[24px] justify-center items-center">
        {contactHeader.map((contact, i) => (
          <div
            className="max-w-[398px] h-[240px] bg-background flex flex-col justify-center items-center rounded-xl"
            key={i}
          >
            <div className="">
              <Image
                src={contact.icon}
                width={40}
                height={40}
                alt="conatct-info"
              />
            </div>
            <div className="mt-12 text-center ">
              <h1 className="font-workSans text-base font-medium left-4 text-heading">
                {contact.title}
              </h1>
              {contact.title === 'Phone' ? (
                <>
                  <ul className="mt-6 font-poppins text-base font-normal text-body flex gap-2">
                    {contact.desc.map((phone, idx) => (
                      <li key={idx}>
                        <Link href={`tel:${phone}`} key={idx} className="flex">
                          {phone}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-4 font-poppins text-base font-normal text-body flex justify-center items-center gap-2">
                    {contact.secondDesc.map((phone, idx) => (
                      <Link href={`tel:${phone}`} key={`second-${idx}`}>
                        {phone}
                      </Link>
                    ))}
                  </ul>
                </>
              ) : (
                <>
                  <Link href={contact.redirect}>
                    <p className="mt-6 font-poppins text-base font-normal text-body">
                      {contact.desc[0]}
                    </p>
                  </Link>
                  {contact.secondDesc[0] && (
                    <p
                      className={`mt-4 font-poppins text-base font-normal text-body ${
                        contact.secondDesc[0] === 'Sat Closed'
                          ? 'text-red-500'
                          : ''
                      }`}
                    >
                      {contact.secondDesc[0]}
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </HomeWrapper>
  )
}

export default ContactUsHeader
