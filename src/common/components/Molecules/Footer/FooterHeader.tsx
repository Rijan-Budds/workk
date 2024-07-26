import React from 'react'
import Image from 'next/image'
import { HomeWrapper } from '../../Atom/HomeWrapper'

const FooterHeader = () => {
  return (
    <HomeWrapper className="py-8">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-6">
          <div className="bg-white w-[80px] h-[80px] rounded-full flex justify-center items-center">
            <Image
              src="/home/footerlogo.svg"
              width={800}
              height={890}
              alt="logo "
              className="w-[56px] h-[56px]"
            />
          </div>
          <div className="hidden lg:block">
            <h1 className="font-poppins text-white text-[18px]">
              Pawan Prakriti School
            </h1>
            <p className="font-workSans text-base text-white">
              Mahalaxmi Municipality-5, Tikathali, Lalitpur
            </p>
          </div>
        </div>
        <div>
          <ul className="flex gap-4">
            <li className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
              <Image
                src="/home/ftwitter.svg"
                width={100}
                height={100}
                alt="social"
                className="w-4 h-4"
              />
            </li>
            <li className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
              <Image
                src="/home/ffacebook.svg"
                width={100}
                height={100}
                alt="social"
                className="w-4 h-4"
              />
            </li>
            <li className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
              <Image
                src="/home/finstagram.svg"
                width={100}
                height={100}
                alt="social"
                className="w-4 h-4"
              />
            </li>
            <li className="bg-white w-8 h-8 rounded-full flex justify-center items-center">
              <Image
                src="/home/fyoutube.svg"
                width={100}
                height={100}
                alt="social"
                className="w-4 h-4"
              />
            </li>
          </ul>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default FooterHeader
