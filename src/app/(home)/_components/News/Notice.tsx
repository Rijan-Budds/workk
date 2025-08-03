'use client'
import { ShareModal } from '@/app/(routes)/notice/_component/ShareModal'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { NoDataFound } from '@/common/components/NoDataFound'
import { cn } from '@/common/utils/utils'
import { format } from 'date-fns'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { IoMdShare } from 'react-icons/io'
import { notices } from '@/data/notices'
import './notice.css'

const Notice = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [slug, setSlug] = useState('')
  const router = useRouter()

  const response = {
    status: 200,
    message: 'success',
    data: notices,
  }

  const isDisableViewAll = response.data.length < 6

  const handleShareButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsOpen(true)
  }

  const renderNoticeUi = () => {
    if (response.data && response.data.length > 0) {
      return (
        <div className="w-full overflow-y-auto notice-scrollbar max-h-[376px] px-8">
          {response.data.map((notice) => (
            <div
              key={notice.id}
              className="py-3 flex justify-between border-b-[1px]"
            >
              <div className="flex-1 mr-4">
                <h3 className="text-heading font-poppins font-medium text-base mb-1">
                  {notice.title}
                </h3>
                <p className="text-[#5D5F69] text-sm font-workSans font-normal">
                  {notice.createdAt
                    ? format(new Date(notice.createdAt), 'MMMM dd, yyyy')
                    : 'N/A'}
                </p>
              </div>
              <IoMdShare
                onClick={(e) => {
                  handleShareButtonClick(e)
                  setSlug(notice.slug)
                }}
                className="text-[23px] transition-all duration-500 text-primary cursor-pointer"
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
      <div className="bg-white rounded-xl w-full md:w-[672px] lg:w-[80%] 2lg:w-[100%] 2lg:min-w-[320px] 2xl_lg:w-[396px] 2lg:max-w-[396px] 2lg:h-[465px] overflow-hidden pb-3">
        <div className="py-8 pb-2 w-full">
          <div className="flex justify-between px-8 pb-6 items-center">
            <h1 className="text-xl font-poppins font-medium leading-6 text-heading">
              Notices
            </h1>
            <button
              disabled={isDisableViewAll}
              onClick={() => router.push('/news?type=notice')}
              className={cn(
                'text-primary font-workSans font-normal text-[14px] leading-4',
                {
                  'opacity-70 cursor-not-allowed': isDisableViewAll,
                }
              )}
            >
              View All
            </button>
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