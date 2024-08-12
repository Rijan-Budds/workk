import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import React from 'react'

const contactHeader = [
  {
    icon: '/home/phone.svg',
    title: 'Phone',
    desc: ' +977-9843589375 / +977-9843201703',
    secondDesc: '01-5007259 / 01-5007275',
  },
  {
    icon: '/home/envelop.svg',
    title: 'E-mail',
    desc: 'pawanprakriti2048@gmail.com',
    secondDesc: '',
  },
  {
    icon: '/home/clock.svg',
    title: 'Time',
    desc: 'Sun - Fri 6:00 AM - 5:00',
    secondDesc: 'Sat Closed',
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
              <p className="mt-6 font-inter text-base font-normal text-body">
                {contact.desc}
              </p>
              <p className="mt-4 font-inter text-base font-normal text-body">
                {contact.secondDesc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </HomeWrapper>
  )
}

export default ContactUsHeader
