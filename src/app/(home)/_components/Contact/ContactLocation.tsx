import React from 'react'

export const ContactLocation = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.3679176325886!2d85.38685559999999!3d27.675021400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a657251078d%3A0xb71f117263840323!2sNaulo%20Jyoti%20English%20School!5e0!3m2!1sen!2snp!4v1754302231850!5m2!1sen!2snp"
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
