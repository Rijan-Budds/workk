import React from 'react'

export const ContactLocation = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.245142932409!2d85.39848757614713!3d27.678817226747917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a8a2eecc375%3A0x50300e20dbd93edb!2sGlory%20English%20Secondary%20School!5e0!3m2!1sen!2snp!4v1754296949256!5m2!1sen!2snp" 
        width="608"
        height="748"
        className="rounded-[12px] w-full h-[426px] lg:h-[781px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
