'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React from 'react'
import { TestimonailBigCard } from './TestimonialBigCard'
import { ITestimonialData } from '../_interface/testimonial'
import { NoDataFound } from '@/common/components/NoDataFound'

const staticTestimonials: ITestimonialData[] = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Frontend Developer at Google',
        rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Software Engineer at Meta',
        rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      key: '/home/user2.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: 3,
    name: 'Ali Khan',
    position: 'Backend Engineer at Amazon',
        rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    position: 'Full Stack Developer at Microsoft',
        rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      key: '/home/user2.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: 5,
    name: 'Mike Johnson',
    position: 'DevOps Engineer at Netflix',
        rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      key: '/home/user1.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: 6,
    name: 'Emily Davis',
    position: 'UI/UX Designer at Apple',
        rating: 5,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: {
      key: '/home/user2.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
]

const TestimonialsSection = () => {
  const renderTestimonialUi = () => {
    if (staticTestimonials && staticTestimonials.length > 0) {
      return (
        <div className="grid md:grid-cols-2 gap-6">
          {staticTestimonials.map((card) => (
            <TestimonailBigCard card={card} key={card.id} />
          ))}
        </div>
      )
    } else {
      return <NoDataFound title="No Testimonial Found" />
    }
  }

  return (
    <>
      <CoverImage
        title="Testimonial"
        list={[{ link: '', title: 'Testimonial' }]}
      />
      <HomeWrapper>
        {renderTestimonialUi()}
      </HomeWrapper>
    </>
  )
}

export default TestimonialsSection