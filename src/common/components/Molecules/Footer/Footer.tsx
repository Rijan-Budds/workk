import React from 'react'
import './footer.css'
import FooterHeader from './FooterHeader'
import Copywright from './Copywright'
import FooterLinks from './FooterLinks'
import { ISettingsResponseData } from '@/app/(routes)/contact/_interface/Contact'

const Footer = async ({
  settings,
}: {
  settings: ISettingsResponseData | undefined
}) => {
  return (
    <footer className="h-fit relative">
      <div className="bg-primary w-full">
        <FooterHeader footer={settings?.data} />
      </div>
      <div className="w-full">
        <FooterLinks footer={settings?.data} />
      </div>
      <div className="bg-primary w-full">
        <Copywright />
      </div>
    </footer>
  )
}

export default Footer
