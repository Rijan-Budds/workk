import React from 'react'
import './footer.css'
import FooterHeader from './FooterHeader'
import Copywright from './Copywright'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <footer className="h-[570px] relative">
      <div className="bg-[#187EC0] absolute w-full h-[144px] top-0">
        <FooterHeader />
      </div>
      <div className="absolute w-full h-[368px] top-36">
        <FooterLinks />
      </div>
      <div className="bg-[#187EC0] absolute w-full h-[59px] bottom-0">
        <Copywright />
      </div>
    </footer>
  )
}

export default Footer
