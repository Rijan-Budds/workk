'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { Swiper as SwiperClass } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import './about.css'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import { AiFillInstagram } from 'react-icons/ai'
import { CheckIsIos } from '@/common/hook/useIos'
import { cn } from '@/common/utils/utils'

const voices = [
  {
    image: '/home/hero-image1.jpg',
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum, lorem sed sagittis tincidunt, justo augue tincidunt justo, sit amet congue turpis odio at purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    name: 'lorem',
    position: 'Director',
  },
  {
    image: '/home/hero-image2.jpg',
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    name: 'lorem',
    position: 'Principal',
  },
]

const VoiceOfDirector = () => {
  const isIos = CheckIsIos()
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <HomeWrapper isBg>
      <div className="max-w-[1230px] mx-auto relative">
        <MiniHeading className="text-start mb-6">Voice Of Directors</MiniHeading>
        <SwiperWrapper
          className="flex flex-col-reverse md:flex-col gap-[40px]"
          paginationData={voices}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          {voices.map((voice, index) => (
            <SwiperSlide key={index}>
              <div className="relative justify-between md:gap-[40px] lg:gap-[80px] p-4 w-full flex flex-col md:flex-row-reverse">
                <div
                  className={cn(
                    'relative lg:max-w-[552px] md:mt-[18px] h-[382px] md:h-[462px] lg:h-[726px]',
                    {
                      '2lg:w-[520px]': isIos,
                    }
                  )}
                >
                  <div className="absolute bg-[#187EC0] w-[200px] 2lg:w-[289px] h-[226px] 2lg:h-[389px] right-0 -top-4 rounded-tr-3xl" />
                  <ImageWithPlaceholder
                    src={voice.image}
                    width={528}
                    height={693}
                    alt="Director image"
                    className="w-[97%] md:w-[95%] 2lg:w-[97%] h-[382px] md:h-[462px] lg:h-[726px] object-cover rounded-xl relative"
                  />
                  <div className="absolute bottom-8 left-8 bg-secondary rounded-xl z-10">
                    <ul className="flex gap-4 p-4 text-white">
                      <Link href="#" className="flex items-center">
                        <FaXTwitter className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="flex items-center">
                        <FaFacebookF className="w-4 h-4" />
                      </Link>
                      <Link href="#" className="flex items-center">
                        <AiFillInstagram className="w-[18px] h-[18px]" />
                      </Link>
                    </ul>
                  </div>
                </div>
                <div className="md:max-w-[304px] lg:max-w-[500px] 2lg:max-w-[608px]">
                  <h1 className="font-poppins text-[28px] lg:text-[38px] font-medium mt-11 md:mt-0 2lg:mt-11 leading-[49px]">
                    Voice Of {voice.position}
                  </h1>
                  <p className="text-body font-workSans text-base leading-7 mt-6 break-all">
                    {voice.paragraph}
                  </p>
                  <h2 className="font-workSans font-medium text-lg leading-6 mt-6">
                    {voice.name}
                  </h2>
                  <p className="font-poppins text-base leading-4 mt-2">
                    {voice.position}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </div>
    </HomeWrapper>
  )
}

export default VoiceOfDirector

const SwiperWrapper = ({
  children,
  className,
  paginationData,
  activeIndex,
  setActiveIndex,
}: {
  children: React.ReactNode
  className?: string
  paginationData?: typeof voices
  activeIndex: number
  setActiveIndex: (index: number) => void
}) => {
  const mainSwiperRef = useRef<SwiperClass | null>(null)
  const paginationSwiperRef = useRef<SwiperClass | null>(null)

  const handleSlideChange = (swiper: SwiperClass) => {
    const index = swiper.activeIndex
    setActiveIndex(index)
    if (paginationSwiperRef.current) paginationSwiperRef.current.slideTo(index)
  }

  const handlePaginationClick = (index: number) => {
    setActiveIndex(index)
    if (mainSwiperRef.current) mainSwiperRef.current.slideTo(index)
  }

  return (
    <div className="flex flex-col-reverse gap-14 md:gap-0 md:flex-col">
      <Swiper
        spaceBetween={25}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 10000, disableOnInteraction: true }}
        pagination={false}
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        className={`w-full ${className} !flex`}
      >
        {children}
      </Swiper>

      {paginationData && paginationData.length > 0 && (
        <div className="pagination-wrapper flex gap-4 mt-6 flex-wrap md:absolute z-50 -bottom-[14%] ">
          {paginationData.map((slide, index) => (
            <div
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`custom-card ${activeIndex === index ? 'active' : ''}`}
            >
              <div className="custom-card-timer"></div>
              <ImageWithPlaceholder
                width={200}
                height={200}
                src={slide.image}
                alt={slide.name}
                className="custom-card-image"
              />
              <div className="custom-card-info">
                <h4>{slide.name}</h4>
                <p>{slide.position}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
