'use client'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper as SwiperClass } from 'swiper/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './about.css'
import { socialLinks } from '../constants/data'
import { IVoiceOfManagementResponse } from '../_interface/About'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { NoDataFound } from '@/common/components/NoDataFound'

const VoiceOfDirector = () => {
  const [response, setResponse] = useState<IVoiceOfManagementResponse | null>(
    null
  )

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const voiceData = await UseServerFetch<IVoiceOfManagementResponse>(
          '/api/v1/voice-of-management'
        )
        if (voiceData) {
          setResponse(voiceData)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const RenderVoiceOfDirectorUi = () => {
    if (!response || !response.data) {
      return (
        <div className="text-center mt-10">
          <NoDataFound title="No Voice of Directors Found" />
        </div>
      )
    }

    return (
      <div className="mt-[56px] max-w-[1230px] mx-auto">
        <SwiperWrapper
          className="flex flex-col-reverse md:flex-col gap-[40px]"
          paginationData={response.data}
          activeIndex={activeIndex} // Pass active index
          setActiveIndex={setActiveIndex}
        >
          {response.data.map((voice, index) => (
            <SwiperSlide key={index}>
              <div className="relative justify-between md:gap-[40px] lg:gap-[80px] p-4 w-full flex flex-col md:flex-row-reverse">
                <div className="relative lg:max-w-[552px]">
                  <div className="absolute bg-[#187EC0] w-[200px] 2lg:w-[289px] h-[226px] right-0 -top-4 rounded-tr-3xl" />
                  <ImageWithPlaceholder
                    src={voice.Team.image ? voice.Team.image.key : undefined}
                    width={528}
                    height={693}
                    alt="Brochure image"
                    className="w-[95%] h-[382px] md:h-[462px] lg:h-[726px] object-cover rounded-xl relative"
                  />
                  <div className="absolute bottom-8 left-8 bg-secondary rounded-xl">
                    <ul className="flex gap-4 p-4">
                      {socialLinks.map((link, index) => (
                        <Link
                          href={link.href}
                          key={index}
                          className="flex justify-center items-center"
                        >
                          <Image
                            src={link.src}
                            width={100}
                            height={100}
                            alt={link.alt}
                            className="w-[14px] h-[14px]"
                          />
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:max-w-[304px] lg:max-w-[500px] 2lg:max-w-[608px]">
                  <h1 className="font-poppins text-[28px] lg:text-[38px] font-medium mt-11 leading-[49px]">
                    Voice Of Director
                  </h1>
                  <div
                    className="text-body font-workSans font-normal text-base leading-7 mt-6 break-all"
                    dangerouslySetInnerHTML={{ __html: voice.description }}
                  />
                  <h2 className="font-workSans font-medium text-lg leading-6 mt-6">
                    {voice.Team.name}
                  </h2>
                  <p className="font-poppins font-normal text-base leading-4 mt-2">
                    {voice.Team.position}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperWrapper>
      </div>
    )
  }

  return <HomeWrapper isBg>{RenderVoiceOfDirectorUi()}</HomeWrapper>
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
  paginationData?: IVoiceOfManagementResponse['data']
  activeIndex: number
  setActiveIndex: (index: number) => void
}) => {
  const mainSwiperRef = useRef<SwiperClass | null>(null)
  const paginationSwiperRef = useRef<SwiperClass | null>(null)

  const handleSlideChange = (swiper: SwiperClass) => {
    const index = swiper.activeIndex
    setActiveIndex(index)

    if (paginationSwiperRef.current) {
      paginationSwiperRef.current.slideTo(index)
    }
  }

  const handlePaginationClick = (index: number) => {
    setActiveIndex(index)
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideTo(index)
    }
  }

  // const paginationLength = paginationData ? paginationData.length : 0

  return (
    <>
      <Swiper
        id="director"
        breakpoints={{ 528: { slidesPerView: 1 } }}
        spaceBetween={25}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        pagination={false} // Disable default pagination
        onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
        onSlideChange={handleSlideChange} // Handle slide change
        className={`w-full ${className} !flex`}
      >
        {children}
      </Swiper>

      {/* Custom Pagination */}
      {paginationData && paginationData.length > 0 && (
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          modules={[Pagination]}
          onSwiper={(swiper) => (paginationSwiperRef.current = swiper)} // Get pagination swiper reference
          className="custom-pagination-swiper"
        >
          {paginationData?.map((slide, index) => (
            <SwiperSlide
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={activeIndex === index ? 'active' : ''} // Add active class
            >
              <div
                className={`custom-card ${
                  activeIndex === index ? 'active' : ''
                }`}
              >
                <div className="custom-card-timer"></div>
                <ImageWithPlaceholder
                  width={200}
                  height={200}
                  src={slide.Team.image ? slide.Team.image.key : undefined}
                  alt={slide.Team.name}
                  className="custom-card-image"
                />
                <div className="custom-card-info">
                  <h4>{slide.Team.name}</h4>
                  <p>{slide.Team.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  )
}
