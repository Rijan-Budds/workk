import React from 'react'
import { ContactLocation } from './ContactLocation'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { ContactForm } from './ContactForm'

export const ContactSection = () => {
  return (
    <HomeWrapper>
      <div className="flex flex-col-reverse lg:flex-row gap-y-6 md:gap-x-6 justify-center">
        <ContactLocation />
        <ContactForm />
      </div>
    </HomeWrapper>
  )
}
