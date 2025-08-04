'use client'
import { INewsItem } from '../../news/interface/newsType'
import { format } from 'date-fns'
import { cn } from '@/common/utils/utils'

export const NonRedirectingNoticeClientSection = ({ notice }: { notice: INewsItem[] }) => {
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
      ))}
    </div>
  )
}