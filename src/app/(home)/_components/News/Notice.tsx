'use client'
import React, { useEffect, useState } from 'react'
import './notice.css'
import Link from 'next/link'
import { INewsResponseData } from '@/app/(routes)/news/interface/newsType'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { format } from 'date-fns'
import { IoMdShare } from 'react-icons/io'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { ShareModal } from '@/app/(routes)/notice/_component/ShareModal'
import { useRouter } from 'next/navigation'
import { NoDataFound } from '@/common/components/NoDataFound'

const Notice = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [response, setResponse] = useState<INewsResponseData | null>(null)
  const router = useRouter()
  const [slug, setSlug] = useState<string>('')

  const handleShareButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsOpen(true)
  }

  useEffect(() => {
    const fetchNewsAndNoticeList = async () => {
      try {
        const newsNoticeData: INewsResponseData | undefined =
          await UseServerFetch(`/api/v1/news-and-notice/type/NOTICE`)
        if (newsNoticeData) {
          setResponse(newsNoticeData)
        }
      } catch (error) {
        console.error('Error fetching news data:', error)
      }
    }
    fetchNewsAndNoticeList()
  }, [])

  const renderNoticeUi = () => {
    if (response?.data && response.data.length > 0) {
      return (
        <div className="w-full   overflow-y-auto notice-scrollbar max-h-[376px] px-8  ">
          {response &&
            response.data.map((notice) => (
              <div
                key={notice.id}
                onClick={() => router.push(`/notice/${notice.slug}`)}
                className="py-3 flex justify-between border-b-[1px] group cursor-pointer"
              >
                <div>
                  <h1
                    className={`text-sm leading-4 font-medium transition-all duration-500 ${
                      notice.isHoliday
                        ? 'text-[#E0240A]'
                        : 'text-primary group-hover:text-secondary'
                    }`}
                  >
                    {notice.title}
                  </h1>
                  <p className="text-[#5D5F69] text-sm font-workSans font-normal">
                    {notice.createdAt
                      ? format(new Date(notice.createdAt), 'MMMM dd, yyyy') // Full month, day, and year
                      : 'N/A'}
                  </p>
                </div>
                <IoMdShare
                  onClick={(e) => {
                    handleShareButtonClick(e)
                    setSlug(notice.slug)
                  }}
                  className="text-[23px] transition-all duration-500 text-primary"
                />
              </div>
            ))}
        </div>
      )
    } else {
      return <NoDataFound title="No Notice Data Found" />
    }
  }

  return (
    <>
      <div className="bg-white rounded-xl  w-full md:w-[672px] lg:w-[80%] 2lg:min-w-[320px] 2xl_lg:w-[396px]   2lg:max-w-[396px] 2lg:h-[465px] overflow-hidden  ">
        <div className="py-8 pb-2 w-full">
          <div className="flex justify-between  px-8 pb-6 items-center">
            <h1 className="text-xl font-poppins font-medium leading-6 text-heading">
              Notices
            </h1>
            <Link
              href={'/news?type=notice'}
              className="text-primary font-workSans font-normal text-[14px] leading-4"
            >
              View All
            </Link>
          </div>
        </div>
        {renderNoticeUi()}
      </div>
      {isOpen && (
        <CustomModal isOpen={isOpen}>
          <ShareModal setOpen={setIsOpen} slug={slug} />
        </CustomModal>
      )}
    </>
  )
}

export default Notice
