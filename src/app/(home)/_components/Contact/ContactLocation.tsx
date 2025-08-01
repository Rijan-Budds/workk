import React from 'react'

export const ContactLocation = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3533.367765622307!2d85.3842807!3d27.6750261!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a657251078d%3A0xb71f117263840323!2sNaulo%20Jyoti%20English%20School!5e0!3m2!1sen!2snp!4v1754036608779!5m2!1sen!2snp"
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
