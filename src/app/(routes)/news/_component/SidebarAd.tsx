import { ImageWithPlaceholder } from '@/common/components/ImageWithPlaceholder'
import Link from 'next/link'
import { INewsData } from '../interface/newsType'

export const SidebarAd = ({ data }: { data: INewsData }) => {
  return (
    <div draggable={false} className="size-[397px]">
      {data?.banner ? (
        <Link href={data.banner.link} target="_blank">
          <ImageWithPlaceholder
            src={data.banner.image.key}
            width={397}
            height={397}
            alt="admission"
          />
        </Link>
      ) : null}
    </div>
  )
}
