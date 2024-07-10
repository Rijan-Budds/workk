import Image from 'next/image'
import React from 'react'

const cardData = [
  {
    id: 1,
    name: 'Bipina Bajracharya',
    position: 'Project Engineer in Dolidar',
    desc: 'After completing my SLC from Shree Champawati Secondary School,  I joined at Pawan Prakriti Secondary School for class 11.  The teachers were very kind and helpful who  taught me how to be  laborious and focus on stud.',
    img: '/home/stud.jpg',
  },
  {
    id: 2,
    name: 'Kusma Rai',
    position: 'George Washington University',
    desc: 'After completing my SLC from Shree Champawati Secondary School,  I joined at Pawan Prakriti Secondary School for class 11.  The teachers were very kind and helpful who  taught me how to be  laborious and focus on stud.',
    img: '/home/stud.jpg',
  },
  {
    id: 3,
    name: 'Bipina Bajracharya',
    position: 'Project Engineer in Dolidar',
    desc: 'After completing my SLC from Shree Champawati Secondary School,  I joined at Pawan Prakriti Secondary School for class 11.  The teachers were very kind and helpful who  taught me how to be  laborious and focus on stud.',
    img: '/home/stud.jpg',
  },
]

const TestimonialCard = () => {
  return (
    <>
      <div className="absolute right-0 top-[50px]">
        <button>
          <Image
            src="/home/buttonleft.svg"
            width={32}
            height={32}
            alt="left"
            className="w-8 h-8"
          />
        </button>
        <button>
          <Image
            src="/home/buttonright.svg"
            width={32}
            height={32}
            alt="left"
            className="w-8 h-8"
          />
        </button>
      </div>
      <div className="flex justify-between gap-[24px] mt-[40px]">
        {cardData.map((card) => (
          <div
            className="bg-white max-w-[397px] rounded-[12px] relative "
            key={card.id}
          >
            <Image
              src="/home/quote.svg"
              width={60}
              height={51}
              alt="quote"
              className="absolute w-[60px] h-[51px] top-[18.33px] left-[13.51px]"
            />
            <p className="p-[40px] font-workSans font-[400] text-base leading-[27.2px] tracking-tight">
              {card.desc}
            </p>
            <div className="px-10 py-6 flex gap-4 border-[#E7EEF8]-2 border-t-[1px]">
              <Image
                src={card.img}
                width={56}
                height={56}
                alt="stud"
                className="rounded-full w-14 h-14 object-cover"
              />
              <div className="flex flex-col justify-center space-y-[8px]">
                <h1 className="font-inter font-medium text-base leading-4 text-[#313131]">
                  {card.name}
                </h1>
                <p className="text-sm font-workSans font-[400] text-[#5D5F69] leading-4">
                  {card.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TestimonialCard
