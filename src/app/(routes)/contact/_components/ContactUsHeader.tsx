'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { IContactInfoData, ISettingsResponseData } from '../_interface/Contact'

// Dynamically map icons to keys
const iconMap: { [key: string]: string } = {
  'Contact Number': '/home/phone.svg',
  Email: '/home/envelop.svg',
  'College Time': '/home/clock.svg',
  Address: '/home/location.svg', // Add other mappings as needed
}

const ContactUsHeader = () => {
  const [settings, setSettings] = useState<IContactInfoData[] | undefined>([])
  const handlePhone = (phone: string) => {
    window.location.href = `tel:${phone.trim()}`
  }

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const settings: ISettingsResponseData | undefined =
          await UseServerFetch('/api/v1/settings')
        const filteredSettings = settings?.data.data.filter(
          (contact) => contact.key !== 'Address'
        )
        setSettings(filteredSettings)
      } catch (error) {
        console.error('Error fetching settings:', error)
      }
    }

    fetchSettings()
  }, [])

  return (
    <HomeWrapper className="!pb-0">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] justify-center items-center">
        {settings?.map((contact, i) => (
          <div
            className="!max-w-[398px] h-[240px] bg-background flex flex-col justify-center items-center rounded-xl"
            key={i}
          >
            <div>
              <Image
                src={iconMap[contact.key] || '/home/default-icon.svg'} // Fallback to default icon if key isn't found
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
                <ul className="mt-6 font-poppins text-base font-normal text-body flex flex-col gap-2">
                  {contact.value.split('/').map((phone, idx) => (
                    <li key={idx} onClick={() => handlePhone(phone)}>
                      {phone}
                    </li>
                  ))}
                </ul>
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
