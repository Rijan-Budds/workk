import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { notices } from '@/data/notices'

export default function NoticeDetailPage({ params }: { params: { slug: string } }) {
  const notice = notices.find((n) => n.slug === params.slug)

  if (!notice) return notFound()

  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{notice.title}</h1>
      <p className="text-gray-500 mb-6">
        {format(new Date(notice.createdAt), 'MMMM dd, yyyy')}
      </p>
      <div className="text-lg leading-relaxed">{notice.content}</div>
    </div>
  )
}
