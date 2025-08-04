'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const staticFacilities = [
  {
    id: 1,
    title: 'Science Lab',
    description: 'Well-equipped lab for hands-on experiments.',
    image: '/home/science.jpg',
  },
  {
    id: 2,
    title: 'Library',
    description: 'A quiet space for reading and research.',
    image: '/home/library.jpg',
  },
  {
    id: 3,
    title: 'School Canteen',
    description: 'School canteen.',
    image: '/home/canteen.jpg',
  },
  {
    id: 4,
    title: 'Transportation',
    description: 'Safe and reliable transport services.',
    image: '/home/transport.jpg',
  },
]

const FacilitiesSwiperSection = () => {
  return (
    <HomeWrapper
      className="!px-0 md:!pl-12 lg:!pl-[60px] 2xl_lg:!pl-[240px] 3xl:!pl-[310px] 5xl:!pl-[540px]"
      isBg
    >
      <div className="flex flex-col 2lg:flex-row justify-between overflow-hidden gap-[47px]">
        {/* Left Side */}
        <div className="md:max-w-full lg:max-w-[397px] mx-5 md:mx-0 2lg:mx-0 flex flex-col justify-center flex-shrink-0">
          <MiniHeading className="text-center md:text-start 2lg:text-start">
            Facilities
          </MiniHeading>
          <h2 className="font-poppins text-[28px] 2lg:text-[38px] leading-[36.4px] 2lg:leading-[49.4px] font-medium text-center md:text-left 2lg:text-left text-heading mt-2">
            Our facilities
          </h2>
          <p className="font-workSans text-center md:text-start 2lg:text-start font-normal text-[16px] leading-7 text-heading mt-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus vero ea sequi itaque cumque similique at expedita nesciunt deserunt ad. Sed odit possimus provident ipsam libero quaerat deleniti eius est!
          </p>
          <div className="flex items-start justify-center md:justify-start gap-x-2 mt-4">
            <Image
              width={112}
              height={40}
              src={'/home/default-users.svg'}
              alt="list of user profiles"
              className="pointer-events-none"
            />
            <div className="flex flex-col gap-y-1">
              <span className="font-workSans font-semibold text-[14px] leading-4 text-heading">
                15000 +
              </span>
              <p className="font-workSans text-[12px] leading-[18px] text-body">
                Satisfied Students
              </p>
            </div>
          </div>
        </div>

        {/* Right Side – Static Swiper */}
        <div className="max-w-[1100px] flex-grow">
          <Swiper
            spaceBetween={24}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {staticFacilities.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="rounded-2xl overflow-hidden bg-white shadow-md border border-border">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-[220px] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-heading mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-body">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default FacilitiesSwiperSection
