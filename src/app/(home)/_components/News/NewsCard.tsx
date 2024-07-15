import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const newsandevent = [
  {
    id: 1,
    date: 'July 19, 2024',
    title: 'Co-currircular Activties',
    img: '/home/news1.png',
  },
  {
    id: 2,
    date: 'July 19, 2024',
    title: 'Co-currircular Activties',
    img: '/home/news2.png',
  },
]

const NewsCard = () => {
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
      <div className="flex gap-6 mt-[40px]">
        {newsandevent.map((news) => (
          <div className="relative group cursor-pointer" key={news.id}>
            <div className="overflow-hidden  rounded-xl ">
              <Image
                src={news.img}
                width={447}
                height={298}
                alt="news"
                className="relative w-[446px] h-[298px] object-cover  group-hover:scale-110 transition-all duration-500"
              />
            </div>

            <div className="absolute w-[94%] h-[98px] bg-white top-[87%] z-50 rounded-tl-none rounded-xl overflow-hidden">
              <div className="p-6">
                <p className="text-body text-sm font-workSans font-normal leading-4">
                  {news.date}
                </p>
                <h2 className="text-primary text-xl font-poppins font-medium leading-7 group-hover:text-secondary transition-all duration-500">
                  8{news.title}
                </h2>
              </div>
              <Link
                href={'/'}
                className="bg-primaryLight w-[82px] h-[82px] absolute -right-[20px] top-[55px] rounded-full"
              >
                <Image
                  src="/home/newsarrow.png"
                  width={21}
                  height={14}
                  alt="arrow"
                  className="ml-[25px] mt-[18px]"
                />
              </Link>
              -
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default NewsCard
