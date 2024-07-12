import React from 'react'
import './footer.css'
import FooterHeader from './FooterHeader'
import Copywright from './Copywright'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer className="h-[570px] relative">
      <div className="bg-primary w-full h-[144px]">
        <FooterHeader />
      </div>
      <div className="w-full h-[368px]">
        <FooterLinks />
      </div>
      <div className="bg-primary w-full h-[59px]">
        <Copywright />
      </div>
    </footer>
  )
}

export default Footer
