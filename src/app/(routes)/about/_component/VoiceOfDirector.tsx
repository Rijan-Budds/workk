'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import React, { ReactNode } from 'react'

// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './about.css'
import Link from 'next/link'

const voices = [
  {
    image: '/home/director 1.png',
    paragraph: ` It gives me immense pleasure to learn that our motto of social service through education at an affordable cost has been highly praised by our guardians and well-wishers. After serving in this field for more than twenty years, now I believe this love and response is the main source of inspiration in our campaign of forming a civilized and developed society.\n\nPPESS, established to cater the students with hunger of quality and competitive education have an excellent panel of professional educationists with strong sense of responsibility. We ensure a persisting and appropriate progress of students' academic, emotional, physical and vocational skills including activities for daily living. We are looking forward working collectively with parents, teachers and wider community. We welcome you all to be the part of our PPESS family.`,
    name: 'Bigyan Deu Rai',
    position: 'Director',
  },
  {
    image: '/home/director 2.png',
    paragraph: ` It gives me immense pleasure to learn that our motto of social service through education at an affordable cost has been highly praised by our guardians and well-wishers. After serving in this field for more than twenty years, now I believe this love and response is the main source of inspiration in our campaign of forming a civilized and developed society.\n\nPPESS, established to cater the students with hunger of quality and competitive education have an excellent panel of professional educationists with strong sense of responsibility. We ensure a persisting and appropriate progress of students' academic, emotional, physical and vocational skills including activities for daily living. We are looking forward working collectively with parents, teachers and wider community. We welcome you all to be the part of our PPESS family.`,
    name: 'Bigyan Deu Rai',
    position: 'Director',
  },
  {
    image: '/home/director3.jpg',
    paragraph: ` It gives me immense pleasure to learn that our motto of social service through education at an affordable cost has been highly praised by our guardians and well-wishers. After serving in this field for more than twenty years, now I believe this love and response is the main source of inspiration in our campaign of forming a civilized and developed society.\n\nPPESS, established to cater the students with hunger of quality and competitive education have an excellent panel of professional educationists with strong sense of responsibility. We ensure a persisting and appropriate progress of students' academic, emotional, physical and vocational skills including activities for daily living. We are looking forward working collectively with parents, teachers and wider community. We welcome you all to be the part of our PPESS family.`,
    name: 'Bigyan Deu Rai',
    position: 'Director',
  },
  {
    image: '/home/director4.jpg',
    paragraph: ` It gives me immense pleasure to learn that our motto of social service through education at an affordable cost has been highly praised by our guardians and well-wishers. After serving in this field for more than twenty years, now I believe this love and response is the main source of inspiration in our campaign of forming a civilized and developed society.\n\nPPESS, established to cater the students with hunger of quality and competitive education have an excellent panel of professional educationists with strong sense of responsibility. We ensure a persisting and appropriate progress of students' academic, emotional, physical and vocational skills including activities for daily living. We are looking forward working collectively with parents, teachers and wider community. We welcome you all to be the part of our PPESS family.`,
    name: 'Bigyan Deu Rai',
    position: 'Director',
  },
]

const VoiceOfDirector = () => {
  return (
    <>
      <HomeWrapper isBg>
        <div className="mt-[56px]  max-w-[1230px] mx-auto">
          <SwiperWrapper className="flex flex-col-reverse md:flex-col  gap-[110px]">
            {voices.map((voice, index) => (
              <SwiperSlide key={index}>
                <div className="relative justify-between md:gap-[40px] lg:gap-[80px] p-4 w-full flex flex-col md:flex-row-reverse">
                  <div className="relative lg:max-w-[552px]">
                    <div className="absolute bg-[#187EC0] w-[200px] 2lg:w-[289px] h-[226px] right-0 -top-4 rounded-tr-3xl" />
                    <Image
                      src={voice.image}
                      width={528}
                      height={693}
                      alt="director"
                      className="w-[95%] h-[382px] md:h-[462px] lg:h-[726px] object-cover rounded-xl relative"
                    />
                    <div className="absolute bottom-8 left-8 bg-secondary rounded-xl">
                      <ul className="flex gap-4 p-4">
                        <Link
                          href="/"
                          className="flex justify-center items-center"
                        >
                          <Image
                            src="/home/twitter1.svg"
                            width={100}
                            height={100}
                            alt="social"
                            className="w-[14px] h-[14px]"
                          />
                        </Link>
                        <Link
                          href="/"
                          className="flex justify-center items-center"
                        >
                          <Image
                            src="/home/facebook (1).svg"
                            width={100}
                            height={100}
                            alt="social"
                            className="w-[14px] h-[14px]"
                          />
                        </Link>
                        <Link
                          href="/"
                          className=" flex justify-center items-center"
                        >
                          <Image
                            src="/home/insta.svg"
                            width={100}
                            height={100}
                            alt="social"
                            className="w-[14px] h-[14px]"
                          />
                        </Link>
                      </ul>
                    </div>
                  </div>
                  <div className="max-w-[304px] lg:max-w-[500px] 2lg:max-w-[608px]">
                    <h1 className="font-poppins text-[28px] lg:text-[38px] font-medium mt-11 leading-[49px]">
                      Voice Of Director
                    </h1>
                    {voice.paragraph.split('\n\n').map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-body font-workSans font-normal text-base leading-7 mt-6"
                      >
                        {paragraph}
                      </p>
                    ))}
                    <h2 className="font-workSans font-medium text-lg leading-6 mt-6">
                      {voice.name}
                    </h2>
                    <p className="font-inter font-normal text-base leading-4 mt-2">
                      {voice.position}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="custom-pagination" />
          </SwiperWrapper>
        </div>
      </HomeWrapper>
    </>
  )
}

export default VoiceOfDirector

interface SwiperWrapperProps {
  children: ReactNode
  className?: string
}

const SwiperWrapper = ({ children, className }: SwiperWrapperProps) => {
  const slides = [
    { name: 'Bigyan Deu Rai', role: 'Director', img: '/home/director 1.png' },
    { name: 'Uttar Kumar Rai', role: 'Principal', img: '/home/director 2.png' },
    {
      name: 'Bhuwan Ghimire',
      role: 'Vice - Principal',
      img: '/home/director3.jpg',
    },
    { name: 'Bhuwan Singh Rai', role: 'Founder', img: '/home/director4.jpg' },
  ]
  return (
    <Swiper
      breakpoints={{
        528: { slidesPerView: 1 },
      }}
      spaceBetween={25}
      slidesPerView={1}
      loop
      modules={[Pagination]}
      pagination={{
        el: '.custom-pagination',
        clickable: true,
        renderBullet: (index, className) => {
          return `
            <div class="${className} custom-card">
              <img src="${slides[index].img}" alt="${slides[index].name}" class="custom-card-image"/>
              <div class="custom-card-info">
                <h4>${slides[index].name}</h4>
                <p>${slides[index].role}</p>
              </div>
            </div>`
        },
      }}
      className={`w-full ${className} !flex`}
    >
      {children}
    </Swiper>
  )
}
