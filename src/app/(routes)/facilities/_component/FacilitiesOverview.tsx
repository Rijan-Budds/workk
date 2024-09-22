import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import React from 'react'

const FacilitiesOverview = async () => {
  return (
    <HomeWrapper>
      <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-[81px]">
        <div className="flex gap-6 max-w-[656px]">
          <div className="w-[316px] ">
            <Image
              src="/home/about3.png"
              width={316}
              height={583}
              alt="about"
              className="rounded-xl"
            />
          </div>
          <div className="max-w-[316px]">
            <Image
              src="/home/about4.png"
              width={316}
              height={583}
              alt="about"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="w-full 2lg:max-w-[503px] flex flex-col justify-center mx-auto">
          <MiniHeading isMd className="text-start">
            ABOUT PAWAN PRAKRITI
          </MiniHeading>
          <SectionHeading isMd className="mt-2 text-center md:text-start">
            Let Your Spirit Soar
          </SectionHeading>
          <p className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6">
            College is about learning—and not all learning happens in the
            classroom. Extracurricular activities help you grow your talents and
            explore new interests. They create unique opportunities to bond with
            your classmates and develop skills that serve you well throughout
            your life.
            <br /> <br /> A dynamic hub designed exclusively for our alumni and
            senior students to collaborate, innovate, and thrive. Our
            state-of-the-art facility offers high-speed internet, flexible
            workstations and comfortable lounge areas, all accessible 24/7
            <br /> <br />
            Our College can also attend regular networking events, and benefit
            from exclusive resources and mentorship programs.
          </p>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default FacilitiesOverview
