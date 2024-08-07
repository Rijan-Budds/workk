'use client'
import React from 'react'
import { ContactLocation } from './ContactLocation'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { ContactForm } from './ContactForm'
import { usePathname } from 'next/navigation'

export const ContactSection = () => {
  const pathname = usePathname()

  const isContactPage = pathname === '/contact'
  return (
    <HomeWrapper
      className={`${isContactPage ? 'pt-6' : 'pt-[40px]  md:pt-[112px]'}`}
    >
      <div className="flex flex-col-reverse lg:flex-row gap-y-6 md:gap-x-6 justify-center">
        <ContactLocation />
        <ContactForm />
      </div>
    </HomeWrapper>
  )
}
