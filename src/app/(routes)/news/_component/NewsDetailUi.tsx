import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { INewsData } from '../interface/newsType'
import { MobileSidebar } from './MobileSidebar'
import { NewsDetailSection } from './NewsDetailSection'
import { StickySidebar } from './StickySidebar'

export const NewsDetailUi = ({
  slug,
  data,
}: {
  slug: string
  data: INewsData | undefined
}) => {
  const BreadCrumbList = [
    {
      title: 'News & Events',
      link: '/news',
    },
    {
      title: slug,
      link: null,
    },
  ]

  return (
    <div className="overflow-x-hidden  2lg:overflow-visible">
      <CoverImage title="News" list={BreadCrumbList} />
      <HomeWrapper>
        <div className="flex flex-col gap-y-20 2lg:gap-y-0  2lg:flex-row justify-between gap-x-12">
          {data && <NewsDetailSection data={data.data} />}
          {data && <StickySidebar type={'NEWS'} data={data} />}
          <MobileSidebar type={'NEWS'} />
        </div>
      </HomeWrapper>
    </div>
  )
}
