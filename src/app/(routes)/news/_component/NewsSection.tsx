'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { format } from 'date-fns'
import { GoArrowRight } from 'react-icons/go'

import { INewsItem } from '../interface/newsType'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { UiLoader } from '@/common/components/Atom/UiLoader'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { TabAnimation } from '@/common/components/Molecules/TabAnimation'
import { NoDataFound } from '@/common/components/NoDataFound'
import { Pagination } from '@/common/components/Pagination'
import { cn } from '@/common/utils/utils'

// Combined static news + notice data
const staticNewsData: INewsItem[] = [
  {
    id: '1',
    slug: 'academic-excellence-program',
    title: 'Academic Excellence Program Launched',
    description: 'New academic excellence program for students...',
    images: {
      key: '/home/academic.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
    category: 'Education',
    type: 'NEWS',
    status: 'published',
    publishedAt: new Date('2024-01-15').toISOString(),
    createdAt: new Date('2024-01-15').toISOString(),
    updatedAt: new Date('2024-01-15').toISOString(),
  },
  {
    id: '2',
    slug: 'science-fair-2024',
    title: 'Annual Science Fair 2024',
    description: 'Students showcase their innovative projects...',
    images: {
      key: '/home/sins.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
    category: 'Event',
    type: 'NEWS',
    status: 'published',
    publishedAt: new Date('2024-01-10').toISOString(),
    createdAt: new Date('2024-01-10').toISOString(),
    updatedAt: new Date('2024-01-10').toISOString(),
  },
  {
    id: '3',
    slug: 'sports-day-celebration',
    title: 'Sports Day Celebration',
    description: 'Annual sports day with various competitions...',
    images: {
      key: '/home/sports.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
    category: 'Event',
    type: 'NEWS',
    status: 'published',
    publishedAt: new Date('2024-01-05').toISOString(),
    createdAt: new Date('2024-01-05').toISOString(),
    updatedAt: new Date('2024-01-05').toISOString(),
  },
  {
    id: '7',
    slug: 'admission-open-2024',
    title: 'Admission Open for Academic Year 2024-25',
    description: 'Applications are now open for new admissions...',
    images: {
      key: '/home/user2.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
    category: 'Admission',
    type: 'NOTICE',
    status: 'published',
    publishedAt: new Date('2024-01-20').toISOString(),
    createdAt: new Date('2024-01-20').toISOString(),
    updatedAt: new Date('2024-01-20').toISOString(),
  },
  {
    id: '8',
    slug: 'exam-schedule',
    title: 'Final Examination Schedule',
    description: 'Final examination dates and guidelines...',
    images: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
    category: 'Exam',
    type: 'NOTICE',
    status: 'published',
    publishedAt: new Date('2024-01-18').toISOString(),
    createdAt: new Date('2024-01-18').toISOString(),
    updatedAt: new Date('2024-01-18').toISOString(),
  },
  // Add more as needed...
]

// Non-clickable notice list component
const NonRedirectingNoticeClientSection = ({ notice }: { notice: INewsItem[] }) => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      {notice.map((item) => (
        <div
          key={item.id}
          className={cn(
            'flex flex-col md:flex-row gap-x-4 gap-y-2 p-4 rounded-lg border border-gray-200',
            'hover:bg-gray-50 transition-colors duration-200 cursor-default'
          )}
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}
        >
          <div className="flex items-center gap-x-4">
            {item.images?.key && (
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <ImageWithPlaceholder
                  src={item.images.key}
                  width={64}
                  height={64}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex flex-col gap-y-2 w-full">
              <div className="flex justify-between items-center">
                <h3 className="text-primary text-lg font-medium">{item.title}</h3>
                <p className="text-body text-sm">
                  {format(new Date(item.createdAt), 'MMMM d, yyyy')}
                </p>
              </div>
              <p className="text-body text-sm line-clamp-2">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const NewsSection = () => {
  const tabs = [
    { key: 'NEWS', title: 'News' },
    { key: 'NOTICE', title: 'Notices' },
  ]
  const [active, setActiveTab] = useState<string>('NOTICE')
  const params = useSearchParams()

  const [newsNotice, setNewsNotice] = useState<INewsItem[]>([])
  const pageSize = 6
  const [page, setPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number>(staticNewsData.length)
  const [loading, setLoading] = useState<boolean>(false)

  // Determine if pagination is needed
  const showPagination = totalCount > pageSize

  // Initialize tab from URL query param
  useEffect(() => {
    const typeParam = params.get('type')?.toUpperCase()
    if (typeParam === 'NEWS' || typeParam === 'NOTICE') {
      setActiveTab(typeParam)
    }
    setPage(1)
  }, [params])

  // Fetch data according to active tab and page
  useEffect(() => {
    setLoading(true)
    const filtered = staticNewsData.filter((item) => item.type === active)
    const startIndex = (page - 1) * pageSize
    const paginated = filtered.slice(startIndex, startIndex + pageSize)
    setNewsNotice(paginated)
    setTotalCount(filtered.length)
    setTimeout(() => setLoading(false), 300) // simulate async delay
  }, [active, page])

  const renderNewsNoticeUi = () => {
    if (loading) return <UiLoader className="min-h-[200px]" />

    if (!newsNotice.length) return <NoDataFound title={`No ${active.toLowerCase()} found`} />

    if (active === 'NEWS') {
      return (
        <>
          <div className="flex flex-row flex-wrap justify-center md:justify-evenly gap-x-4 gap-y-28 pb-16 2lg:pb-1">
            {newsNotice.map((news) => (
              <div
                key={news.slug}
                className={cn('mb-0 relative max-w-[397px] group cursor-default', {
                  'mb-8 2lg:mb-0': news.title.length > 40,
                })}
              >
                <div className="overflow-hidden rounded-xl max-w-[397px]">
                  <ImageWithPlaceholder
                    src={news.images?.key}
                    width={447}
                    height={298}
                    alt={news.title}
                    className="relative w-[343px] h-[231px] md:w-[324px] md:h-[243px] 2lg:w-[398px] 2lg:h-[298px] object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="absolute w-[94%] max-h-[145px] 2lg:max-h-[120px] bg-white shadow-sm top-[87%] z-50 rounded-tl-none rounded-xl overflow-hidden">
                  <div className="p-6 z-10 relative flex flex-col gap-y-2">
                    <p className="text-body text-sm font-workSans font-normal leading-4 z-20">
                      {format(new Date(news.createdAt), 'MMMM d, yyyy')}
                    </p>
                    <h2 className="text-primary text-xl font-poppins font-medium leading-7 transition-all duration-500 2lg:line-clamp-2">
                      {news.title}
                    </h2>
                  </div>
                  <div>
                    <div className="bg-primaryLighter will-change-transform w-[82px] h-[82px] absolute -right-[20px] group-hover:scale-[10] transition-transform duration-700 top-[55px] rounded-full z-0" />
                    <GoArrowRight className="absolute right-3 top-1/2 -translate-y-1/2 mt-8 z-20 text-2xl text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showPagination && (
            <div className="w-full flex justify-center mt-4">
          <Pagination
  currentPage={page}
  pageSize={pageSize}
  totalCount={totalCount}
  onPageChange={(page) => setPage(typeof page === 'string' ? parseInt(page, 10) : page)}
  siblingCount={0}
/>

            </div>
          )}
        </>
      )
    } else {
      // active === 'NOTICE'
      return (
        <>
          <NonRedirectingNoticeClientSection notice={newsNotice} />
          {showPagination && (
            <div className="w-full flex justify-center mt-4">
            <Pagination
  currentPage={page}
  pageSize={pageSize}
  totalCount={totalCount}
  onPageChange={(page) => setPage(typeof page === 'string' ? parseInt(page, 10) : page)}
  siblingCount={0}
/>

            </div>
          )}
        </>
      )
    }
  }

  return (
    <>
      <CoverImage title="News & Notices" list={[{ link: null, title: 'News & Notices' }]} />
      <HomeWrapper className="2lg:pb-32">
        <div className="flex justify-center mb-10">
          <TabAnimation
            tabs={tabs}
            activeTab={active}
            setActive={setActiveTab}
            className="text-sm"
            handleDynamicData={(key) => {
              setActiveTab(key)
              setPage(1)
            }}
            isEvent={false}
          />
        </div>
        {renderNewsNoticeUi()}
      </HomeWrapper>
    </>
  )
}
