'use client'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import React from 'react'
import './about.css'
import { Button } from '@/common/components/Atom/Button'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Link from 'next/link'

const staticAboutData = {
  title: 'Empowering Young Minds for the Future',
  description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis nisi eu lectus tincidunt, sed dignissim lorem fermentum. Proin finibus, sapien sit amet tempor convallis, velit justo efficitur velit, id bibendum sem sapien sed nunc.</p>
  <p>Maecenas porttitor, lorem a sollicitudin facilisis, nisi quam congue purus, a egestas nulla leo vel elit. Duis rutrum sapien a mauris commodo, vitae tempus est viverra.</p>`,
  features: [
    'Individual Student Focus',
    'Creative Learning Spaces',
    'Inclusive Education',
    'Modern Technology Integration',
  ],
}

const Aboutus = () => {
  const renderAboutDataUi = () => {
    const introduction = staticAboutData
    const features = introduction.features

    return (
      <div className="flex flex-col lg:flex-row gap-[40px] justify-between 2lg:gap-[80px]">
        <div className="w-full 2lg:max-w-[503px] flex flex-col justify-center mx-auto">
          <MiniHeading isMd className="text-start w-fit">
            about lorem
          </MiniHeading>
          <SectionHeading isMd className="mt-2 text-start">
            {introduction.title}
          </SectionHeading>
          <div
            className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6"
            dangerouslySetInnerHTML={{ __html: introduction.description }}
          ></div>
          <ul className="custom-list text-heading font-normal text-[16px] leading-[27.2px] grid grid-cols-1 lg:grid-cols-2 gap-y-[16px] gap-2 2lg:gap-[24px]">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="mt-[40px]">
            <Link href={'/about'}>
              <Button className="w-full 2lg:w-fit">About us</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <div className="gap-4 flex flex-col">
            <div>
              <Image
                src="/home/about1.1.jpg"
                width={320}
                height={335}
                alt="ab"
                className="w-full h-[360px] md:w-[321px] sm:h-[335px] object-cover rounded-xl"
              />
            </div>
            <div className="hidden md:block blue-bg text-white max-w-[320px] h-[258px] ">
              <h2 className="font-poppins text-[18px] 4xl:text-[20px] font-medium leading-[26px] p-6 2lg:p-10">
                Get guidance from our team of teachers
              </h2>
              <p className="text-[14px] 4xl:text-[16px] font-workSans font-normal leading-[27.2px] p-6 2lg:p-10">
                Teachers are the heart and soul of our daily operations.
              </p>
            </div>
          </div>
          <div className="h-[610px]">
            <Image
              src="/home/about1.2.jpg"
              width={320}
              height={610}
              alt="ab"
              className="w-full md:w-[321px] h-[610px] rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    )
  }

  return <HomeWrapper>{renderAboutDataUi()}</HomeWrapper>
}

export default Aboutus
