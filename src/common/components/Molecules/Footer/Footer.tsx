import React from 'react'
import './footer.css'
import FooterHeader from './FooterHeader'
import Copywright from './Copywright'
import FooterLinks from './FooterLinks'
import { ISettingsResponseData } from '@/app/(routes)/contact/_interface/Contact'
import { UseServerFetch } from '@/common/hook/useServerFetch'

const Footer = async () => {
  const footerData: ISettingsResponseData | undefined = await UseServerFetch(
    '/api/v1/settings'
  )
  return (
    <footer className="h-fit relative">
      <div className="bg-primary w-full">
        <FooterHeader footer={footerData?.data} />
      </div>
      <div className="w-full">
        <FooterLinks footer={footerData?.data} />
      </div>
      <div className="bg-primary w-full">
        <Copywright />
      </div>
    </footer>
  )
}

export default Footer
