import Image from 'next/image'
import React from 'react'
import './notice.css'

const notices = [
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
  },
  {
    title: 'Happy Holi',
    date: 'July 19, 2024',
  },
  {
    title: 'Admission opens for academy',
    date: 'July 19, 2024',
  },
  {
    title: 'Inter-school Dance Competion',
    date: 'July 19, 2024',
  },
  {
    title: 'Confralutations to the team',
    date: 'July 19, 2024',
  },
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
  },
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
  },
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
  },
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
  },
  {
    title: 'Awards and Achievement',
    date: 'July 19, 2024',
  },
]

const Notice = () => {
  return (
    <div className="bg-white rounded-xl max-w-[396px] max-h-[465px] overflow-auto notice-scrollbar">
      <div className="p-8 pb-2">
        <h1 className="text-xl font-poppins font-medium leading-6">Notices</h1>
        <div className="w-[332px] pt-[24px]">
          {notices.map((notice) => (
            <div
              className="py-3 flex justify-between border-b-[1px]"
              key={notice.title}
            >
              <div className="">
                <h1 className="text-gradient text-sm leading-4 font-medium">
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
  )
}

export default Notice
