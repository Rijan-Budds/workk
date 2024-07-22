import React from 'react'
import './footer.css'
import FooterHeader from './FooterHeader'
import Copywright from './Copywright'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer className="h-fit relative">
      <div className="bg-primary w-full">
        <FooterHeader />
      </div>
      <div className="w-full">
        <FooterLinks />
      </div>
      <div className="bg-primary w-full">
        <Copywright />
      </div>
    </footer>
  )
}

export default Footer
