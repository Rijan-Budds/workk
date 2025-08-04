import React from 'react'
import Image from 'next/image'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Link from 'next/link'

const FooterHeader = () => {
  const socialMediaIcons = [
    {
      name: 'Facebook',
      icon: '/home/ffacebook.svg',
      href: 'facebook.com'
    },
    {
      name: 'Twitter',
      icon: '/home/ftwitter.svg',
      href: 'twitter.com'
    },
    {
      name: 'Instagram',
      icon: '/home/finstagram.svg',
      href: 'instagram.com'
    },
    {
      name: 'YouTube',
      icon: '/home/fyoutube.svg',
      href: 'youtube.com'
    }
  ]

  return (
    <HomeWrapper className="py-8">
      <div className="flex justify-between items-center">
        <Link href={'/'}>
          <div className="flex justify-start items-center gap-x-6">
            <div className="bg-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
              <Image
                src="/home/logo.jpg"
                width={800}
                height={890}
                alt="logo "
                className="w-[56px] h-[56px]"
              />
            </div>
            <div className="hidden lg:block">
              <h1 className="font-poppins text-white text-[18px]">
                Adarsha Secondary School
              </h1>
              <p className="font-workSans text-white text-[14px] font-normal">
                Sanothimi
              </p>
            </div>
          </div>
        </Link>
        <div>
          <ul className="flex gap-4">
            {socialMediaIcons.map((item, index) => (
              <li key={index} className="flex justify-center items-center">
                <Link href={item.href} className="block">
                  <div className="bg-white w-8 h-8 rounded-full flex justify-center items-center hover:bg-gray-100 transition-colors">
                    <Image
                      src={item.icon}
                      width={100}
                      height={100}
                      alt={item.name}
                      className="w-4 h-4"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default FooterHeader