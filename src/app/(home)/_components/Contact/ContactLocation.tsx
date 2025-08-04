import React from 'react'

export const ContactLocation = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1553395087362!2d85.37363062614723!3d27.681593376625532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a6ada9ef59f%3A0x1ceb33d394a77335!2sAdarsha%20Secondary%20School%2C%20Madhyapur%20Thimi%20Muncipality%2044600!5e0!3m2!1sen!2snp!4v1754299792477!5m2!1sen!2snp"
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
