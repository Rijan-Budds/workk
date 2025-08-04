'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import { IContactInfoData, IPhoneNumberItem, ITelephoneItem } from '../_interface/Contact'

// Static contact data - CHANGE THESE VALUES AS NEEDED
const staticContactData = {
  phoneNumbers: [
    { value: '+977 984-1755834' }
  ] as IPhoneNumberItem[],
  
  telephoneNumbers: [
    { value: '01-6630321' }
  ] as ITelephoneItem[],
  
  contactInfo: [
    {
      key: 'Contact Number',
      value: '984-1755834' // This will be handled separately with phone numbers
    },
    {
      key: 'Email',
      value: 'adarsha02sec.school@gmail.com' // CHANGE THIS EMAIL
    },
    {
      key: 'College Time',
      value: 'Sun - Fri: 6:00 AM - 6:00 PM Sat Closed' // CHANGE THESE HOURS
    }
  ] as IContactInfoData[]
}

// Dynamically map icons to keys
const iconMap: { [key: string]: string } = {
  'Contact Number': '/home/phone.svg',
  'Email': '/home/envelop.svg',
  'College Time': '/home/clock.svg',
  'Address': '/home/location.svg', // Add other mappings as needed
}

const ContactUsHeader = () => {
  const handleClick = (type: 'tel' | 'mailto', value: string) => {
    if (type === 'tel') {
      window.location.href = `tel:${value}`
    } else if (type === 'mailto') {
      window.location.href = `mailto:${value}`
    }
  }

  return (
    <HomeWrapper className="!pb-0">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px] justify-center items-center">
        {staticContactData.contactInfo.map((contact, i) => (
          <div
            className="!max-w-[398px] h-[240px] bg-background flex flex-col justify-center items-center rounded-xl p-2"
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
                  <li className="cursor-pointer">
                    {/* Display phone numbers in two lines */}
                    <span
                      onClick={() => {
                        if (staticContactData.phoneNumbers[0]?.value) {
                          handleClick('tel', staticContactData.phoneNumbers[0].value)
                        }
                      }}
                    >
                      {staticContactData.phoneNumbers[0]?.value}
                    </span>{' '}
                    <span
                      onClick={() => {
                        if (staticContactData.phoneNumbers[1]?.value) {
                          handleClick('tel', staticContactData.phoneNumbers[1].value)
                        }
                      }}
                    >
                      / {staticContactData.phoneNumbers[1]?.value}
                    </span>
                  </li>
                  <li className="cursor-pointer">
                    <span
                      onClick={() => {
                        if (staticContactData.telephoneNumbers[0]?.value) {
                          handleClick('tel', staticContactData.telephoneNumbers[0].value)
                        }
                      }}
                    >
                      {staticContactData.telephoneNumbers[0]?.value}
                    </span>{' '}
                    <span
                      onClick={() => {
                        if (staticContactData.telephoneNumbers[1]?.value) {
                          handleClick('tel', staticContactData.telephoneNumbers[1].value)
                        }
                      }}
                    >
                      / {staticContactData.telephoneNumbers[1]?.value}
                    </span>
                  </li>
                </ul>
              ) : contact.key === 'Email' ? (
                <div 
                  className="mt-6 font-poppins text-base font-normal cursor-pointer"
                  onClick={() => handleClick('mailto', contact.value)}
                >
                  {contact.value}
                </div>
              ) : contact.key === 'College Time' ? (
                <div className="mt-6 font-poppins text-base font-normal text-body w-[295px]">
                  {/* Split by 'Sat Closed' and handle the formatting */}
                  {contact.value.replace('Sat Closed', '').trim()}
                  <br />
                  <span className="text-red-500">Sat Closed</span>
                </div>
              ) : (
                <p
                  onClick={() => {
                    handleClick('mailto', contact.value)
                  }}
                  className="mt-6 font-poppins text-base font-normal text-body cursor-pointer"
                >
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