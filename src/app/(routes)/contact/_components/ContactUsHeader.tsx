import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ISettingsResponseData } from '../_interface/Contact'
import { UseServerFetch } from '@/common/hook/useServerFetch'

// Dynamically map icons to keys
const iconMap: { [key: string]: string } = {
  'Contact Number': '/home/phone.svg',
  Email: '/home/envelop.svg',
  'College Time': '/home/clock.svg',
  Address: '/home/location.svg', // Add other mappings as needed
}

const ContactUsHeader = async () => {
  const settings: ISettingsResponseData | undefined = await UseServerFetch(
    '/api/v1/settings'
  )

  const filteredSettings = settings?.data.data.filter(
    (contact) => contact.key !== 'Address'
  )

  const phoneNumbers = settings?.data.phoneNumber || []
  const telephones = settings?.data.telephone || []

  // Combine both phoneNumber and telephone into a single list
  const allContactNumbers = [...phoneNumbers, ...telephones]

  const formattedNumbers = [
    allContactNumbers
      .slice(0, 2)
      .map((num) => num.value)
      .join(' / '),
    allContactNumbers
      .slice(2, 4)
      .map((num) => num.value)
      .join(' / '),
  ]

  return (
    <HomeWrapper className="!pb-0">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] justify-center items-center">
        {filteredSettings?.map((contact, i) => (
          <div
            className="!max-w-[398px] h-[240px] bg-background flex flex-col justify-center items-center rounded-xl"
            key={i}
          >
            <div>
              <Image
                src={iconMap[contact.key] || '/home/default-icon.svg'}
                width={40}
                height={40}
                alt={`${contact.key}-icon`}
              />
            </div>
            <div className="mt-12 text-center">
              <h1 className="font-workSans text-base font-medium text-heading">
                {contact.key}
              </h1>

              {/* Display content dynamically based on key */}
              {contact.key === 'Contact Number' ? (
                <div className="mt-6 font-poppins text-base font-normal text-body">
                  {/* Display phone numbers in two lines */}
                  {formattedNumbers.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
              ) : contact.key === 'E-mail' ? (
                <Link
                  href={`mailto:${contact.value}`}
                  className="mt-6 font-poppins text-base font-normal text-body"
                >
                  {contact.value}
                </Link>
              ) : contact.key === 'College Time' ? (
                <div className="mt-6 font-poppins text-base font-normal text-body w-[295px]">
                  {/* Split by 'Sat Closed' and handle the formatting */}
                  {contact.value.replace('Sat Closed', '').trim()}
                  <br />
                  <span className="text-red-500">Sat Closed</span>
                </div>
              ) : (
                <p className="mt-6 font-poppins text-base font-normal text-body ">
                  {contact.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </HomeWrapper>
  )
}

export default ContactUsHeader
