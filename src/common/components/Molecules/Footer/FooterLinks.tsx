import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import { FooterLink } from './footer'

const FooterLinksData: FooterLink[] = [
  {
    title: 'Contact Information',
    subtitle: ['Mobile', 'Telephone', 'Email', 'Time'],
    // className: 'min-w-[397px]',
    content: [
      {
        subtitle: 'Mobile',
        text: '+977-9843589375 / +977-9843201703',
      },
      {
        subtitle: ' Telephone',
        text: '01-5007259 / 01-5007275',
      },
      {
        subtitle: 'Email',
        text: 'pawanprakriti2048@gmail.com',
      },

      {
        subtitle: ' Time ',
        text: 'Sun - Fri 6:00 AM - 5:00 PM. Sat Closed',
      },
    ],
  },
  {
    title: 'Quick Links',
    content: [{ text: 'Introduction' }, { text: 'Our Success' }],
  },
  {
    title: '  Plus Two',
    content: [
      { text: 'Management' },
      { text: 'Humanities' },
      { text: 'Education' },
      { text: 'Law' },
    ],
  },
  {
    title: ' Important Link',
    content: [
      { text: 'Tribhuvan University' },
      { text: 'National Examinations Board' },
      { text: 'Ministry of Education' },
      { text: 'Office of the Controller of Examinations' },
      { text: 'District Education Office, Kathmandu' },
    ],
  },
]

const FooterLinks = () => {
  return (
    <HomeWrapper className="py-14">
      <div className="grid sm:grid-cols-2 mx-auto lg:flex lg:justify-between space-y-11 lg:space-y-0">
        {FooterLinksData.map((data, index) => (
          <div key={index}>
            <h1 className="font-poppins text-xl font-medium leading-[26px] text-white">
              {data.title}
            </h1>

            <div className="mt-6 space-y-4 text-base leading-4 text-white font-workSans font-light">
              {data.content.map((content, index) => (
                <div key={index}>
                  {'subtitle' in content && (
                    <span className="font-medium">{content.subtitle} : </span>
                  )}
                  {content.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </HomeWrapper>
  )
}

export default FooterLinks
