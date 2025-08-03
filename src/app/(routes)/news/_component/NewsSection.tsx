'use client'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { UiLoader } from '@/common/components/Atom/UiLoader'
import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { TabAnimation } from '@/common/components/Molecules/TabAnimation'
import { NoDataFound } from '@/common/components/NoDataFound'
import { Pagination } from '@/common/components/Pagination'
import { cn } from '@/common/utils/utils'
import { format } from 'date-fns'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import { INewsItem } from '../interface/newsType'

// Static data
const STATIC_NEWS_DATA: INewsItem[] = [
  {
    id: '1',
    slug: 'academic-excellence-program',
    title: 'Academic Excellence Program Launched',
    images: { key: '/home/user1.jpg' },
    createdAt: new Date('2024-01-15'),
    type: 'NEWS',
    content: 'New academic excellence program for students...'
  },
  {
    id: '2',
    slug: 'science-fair-2024',
    title: 'Annual Science Fair 2024',
    images: { key: '/home/user1.jpg' },
    createdAt: new Date('2024-01-10'),
    type: 'NEWS',
    content: 'Students showcase their innovative projects...'
  },
  {
    id: '3',
    slug: 'sports-day-celebration',
    title: 'Sports Day Celebration',
    images: { key: '/home/user1.jpg' },
    createdAt: new Date('2024-01-05'),
    type: 'NEWS',
    content: 'Annual sports day with various competitions...'
  },
  {
    id: '4',
    slug: 'library-renovation',
    title: 'Library Renovation Complete',
    images: { key: '/home/user1.jpg' },
    createdAt: new Date('2024-01-01'),
    type: 'NEWS',
    content: 'Modern library facilities now available...'
  },
  {
    id: '5',
    slug: 'new-lab-equipment',
    title: 'New Laboratory Equipment Installed',
    images: { key: '/home/user1.jpg' },
    createdAt: new Date('2023-12-28'),
    type: 'NEWS',
    content: 'State-of-the-art laboratory equipment...'
  },
  {
    id: '6',
    slug: 'student-achievement',
    title: 'Students Win National Competition',
    images: { key: '/home/user1.jpg' },
    createdAt: new Date('2023-12-25'),
    type: 'NEWS',
    content: 'Our students excel in national level competition...'
  }
]

const STATIC_NOTICE_DATA: INewsItem[] = [
  {
    id: '7',
    slug: 'admission-open-2024',
    title: 'Admission Open for Academic Year 2024-25',
    images: { key: '/home/user2.jpg' },
    createdAt: new Date('2024-01-20'),
    type: 'NOTICE',
    content: 'Applications are now open for new admissions...'
  },
  {
    id: '8',
    slug: 'exam-schedule',
    title: 'Final Examination Schedule',
    images: { key: '/home/user1.jpg' },
    createdAt: new Date('2024-01-18'),
    type: 'NOTICE',
    content: 'Final examination dates and guidelines...'
  },
  {
    id: '9',
    slug: 'parent-meeting',
    title: 'Parent-Teacher Meeting',
    images: { key: '/home/user1.jpg' },
    createdAt: new Date('2024-01-12'),
    type: 'NOTICE',
    content: 'Monthly parent-teacher meeting schedule...'
  },
  {
    id: '10',
    slug: 'holiday-notice',
    title: 'Holiday Notice',
    images: { key: '/home/user2.jpg' },
    createdAt: new Date('2024-01-08'),
    type: 'NOTICE',
    content: 'School holiday schedule for this month...'
  }
]

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
                  alt="Profile"
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
              <p className="text-body text-sm line-clamp-2">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export const NewsSection = () => {
  const tabs = [
    { key: 'news', title: 'News' },
    { key: 'notice', title: 'Notices' },
  ]
  const [active, setActiveTab] = useState<string>(tabs[1]?.key)
  const params = useSearchParams()

  const [newsNotice, setNewsNotice] = useState<INewsItem[] | undefined>(undefined)
  const pageSize = 6
  const [page, setPage] = useState<number>(1)
  const [totalCount, setTotalCount] = useState<number | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)

  const showPagination = () => totalCount && newsNotice && newsNotice.length < totalCount
  const isPagination = showPagination()

  useEffect(() => {
    const initialTab = params.get('type') === 'news' ? 'news' : 'notice'
    setActiveTab(initialTab)
    setPage(1)
  }, [])

  const fetchNewsAndNoticeList = async () => {
    try {
      setLoading(true)
      const allData = active === 'news' ? STATIC_NEWS_DATA : STATIC_NOTICE_DATA
      const startIndex = (page - 1) * pageSize
      const endIndex = startIndex + pageSize
      const paginatedData = allData.slice(startIndex, endIndex)
      const filteredData = paginatedData.filter((d) => d.type === active.toUpperCase())
      setNewsNotice(filteredData)
      setTotalCount(allData.length)
      setTimeout(() => setLoading(false), 300)
    } catch (error) {
      console.error('Error fetching news data:', error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNewsAndNoticeList()
  }, [active, page, params])

  const renderNewsNoticeUi = () => {
    if (loading) {
      return <UiLoader className="min-h-[200px]" />
    }

    if (newsNotice && newsNotice.length > 0) {
      if (active === 'news') {
        return (
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
                    alt="news"
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
            {isPagination && (
              <div className="w-full flex justify-center mt-4">
                <Pagination
                  currentPage={Number(page)}
                  pageSize={pageSize}
                  totalCount={Number(totalCount)}
                  onPageChange={(page: string | number) => setPage(page as number)}
                  siblingCount={0}
                />
              </div>
            )}
          </div>
        )
      } else if (active === 'notice') {
        return (
          <>
            <NonRedirectingNoticeClientSection notice={newsNotice} />
            <div className="w-full flex justify-center mt-4">
              {isPagination && (
                <Pagination
                  currentPage={Number(page)}
                  pageSize={pageSize}
                  totalCount={Number(totalCount)}
                  onPageChange={(page: string | number) => setPage(page as number)}
                  siblingCount={0}
                />
              )}
            </div>
          </>
        )
      }
    } else if (newsNotice?.length === 0) {
      return <NoDataFound title={`No ${active} found`} />
    }
    return null
  }

  useEffect(() => {
    const getNewsOrNotice = params.get('type')
    if (getNewsOrNotice) {
      setActiveTab(getNewsOrNotice === 'news' ? 'news' : 'notice')
    }
  }, [params])

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