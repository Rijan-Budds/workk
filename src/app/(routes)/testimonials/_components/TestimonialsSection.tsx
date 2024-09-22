'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React, { useEffect, useState } from 'react'
import { TestimonailBigCard } from './TestimonialBigCard'
import { Button } from '@/common/components/Atom/Button'
import { ITestimonialResponse } from '../_interface/testimonial'
import { UseServerFetch } from '@/common/hook/useServerFetch'

const TestimonialsSection = () => {
  const [response, setResponse] = useState<ITestimonialResponse | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true) // Tracks if there are more pages to load
  const pageSize = 6
  const totalCount = response?.totalCount || 0 // Using totalCount from the API
  const totalPages = Math.ceil(totalCount / pageSize) // Calculate total pages

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ITestimonialResponse | undefined = await UseServerFetch(
          `/api/v1/testimonial?page=${page}&pageSize=${pageSize}`
        )

        if (response) {
          setResponse(response)
          setHasMore(response.data.length === pageSize)
        }
      } catch (error) {
        console.error('Error fetching testimonials:', error)
      }
    }

    fetchData()
  }, [page])

  const handleNextPage = () => {
    if (hasMore) {
      setPage((prev) => prev + 1)
    }
  }

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1)
    }
  }

  const getVisiblePages = () => {
    const startPage = Math.max(1, page - 1)
    const endPage = Math.min(totalPages, page + 1)

    const pages = []
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }
    return pages
  }

  return (
    <>
      <CoverImage
        title="Testimonial"
        list={[{ link: '', title: 'Testimonial' }]}
      />
      <HomeWrapper>
        <div className="grid md:grid-cols-2 gap-6">
          {response?.data.map((card) => (
            <TestimonailBigCard card={card} key={card.id} />
          ))}
        </div>
        <div className="mt-10 flex justify-center items-center gap-2">
          <Button
            variant="outline"
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="w-[133px] h-[40px] rounded-xl hover:bg-primary text-heading font-workSans text-base font-medium"
          >
            Previous Page
          </Button>

          {getVisiblePages().map((pg) => (
            <Button
              key={pg}
              variant={pg === page ? 'secondary' : 'outline'}
              onClick={() => setPage(pg)}
              className={`hover:bg-primary rounded-xl w-10 h-10 text-heading font-workSans text-base font-medium ${
                pg === page ? 'bg-primary text-white' : ''
              }`} // Add bg-primary to the active page
            >
              {pg}
            </Button>
          ))}

          <Button
            variant="outline"
            onClick={handleNextPage}
            disabled={!hasMore}
            className="w-[133px] h-[40px] rounded-xl hover:bg-primary text-heading font-workSans text-base font-medium"
          >
            Next Page
          </Button>
        </div>
      </HomeWrapper>
    </>
  )
}

export default TestimonialsSection
