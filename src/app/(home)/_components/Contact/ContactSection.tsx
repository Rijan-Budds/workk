import React from 'react'
import { ContactLocation } from './ContactLocation'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { ContactForm } from './ContactForm'

export const ContactSection = () => {
  return (
    <HomeWrapper>
      <div className="flex  flex-row gap-x-6">
        <ContactLocation />
        <ContactForm />
      </div>
    </HomeWrapper>
  )
}
