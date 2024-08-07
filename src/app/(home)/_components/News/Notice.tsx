import Image from 'next/image'
import React from 'react'
import './notice.css'
import Link from 'next/link'

const notices = [
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
    isHoliday: false,
  },
  {
    title: 'Happy Holi',
    date: 'July 19, 2024',
    isHoliday: true,
  },
  {
    title: 'Admission opens for academy',
    date: 'July 19, 2024',
    isHoliday: false,
  },
  {
    title: 'Inter-school Dance Competion',
    date: 'July 19, 2024',
    isHoliday: false,
  },
  {
    title: 'Confralutations to the team',
    date: 'July 19, 2024',
    isHoliday: false,
  },
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
    isHoliday: false,
  },
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
    isHoliday: false,
  },
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
    isHoliday: false,
  },
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
    isHoliday: false,
  },
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
    isHoliday: false,
  },
]

const Notice = () => {
  return (
    <>
      <div className="  bg-white rounded-xl w-full md:w-[80%] 2lg:min-w-[320px] 2xl_lg:w-[396px]   2lg:max-w-[396px] 2lg:h-[465px] overflow-hidden  ">
        <div className="py-8 pb-2 w-full">
          <div className="flex justify-between  px-8 pb-6 items-center">
            <h1 className="text-xl font-poppins font-medium leading-6 ">
              Notices
            </h1>
            <Link
              href={'/notice'}
              className="text-primary font-workSans font-normal text-[14px] leading-4"
            >
              View All
            </Link>
          </div>

          <div className="w-full   overflow-y-auto notice-scrollbar max-h-[376px] px-8  ">
            {notices.map((notice) => (
              <div
                className="py-3 flex justify-between border-b-[1px] group"
                key={notice.title}
              >
                <div>
                  <h1
                    className={`text-sm leading-4 font-medium transition-all duration-500 ${notice.isHoliday ? 'text-[#E0240A]' : 'text-primary group-hover:text-secondary'}`}
                  >
                    {notice.title}
                  </h1>
                  <p className="text-[#5D5F69] text-sm font-workSans font-normal">
                    {notice.date}
                  </p>
                </div>
                <Image
                  src="/home/share.svg"
                  width={11.33}
                  height={11.33}
                  alt="share"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Notice
