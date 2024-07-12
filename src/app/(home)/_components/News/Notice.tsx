import Image from 'next/image'
import React from 'react'
import './notice.css'

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
      <div className="bg-white rounded-xl max-w-[396px] max-h-[465px] overflow-auto notice-scrollbar">
        <div className="p-8 pb-2">
          <h1 className="text-xl font-poppins font-medium leading-6">
            Notices
          </h1>
          <div className="w-[332px] pt-[24px]">
            {notices.map((notice) => (
              <div
                className="py-3 flex justify-between border-b-[1px]"
                key={notice.title}
              >
                <div>
                  <h1
                    className={`text-sm leading-4 font-medium ${notice.isHoliday ? 'text-[#E0240A]' : 'text-gradient'}`}
                  >
                    {notice.title}
                  </h1>
                  <p className="text-body text-sm font-workSans font-normal">
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
