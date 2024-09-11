'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import AcademicDetail from '../_components/AcademicDetail'

const Page = () => {
  const { slug } = useParams() // Get the dynamic slug using next/navigation

  // Handle case where slug is an array or undefined
  const slugValue = Array.isArray(slug) ? slug[0] : slug

  if (!slugValue) return <div>Loading...</div>

  return (
    <div>
      <AcademicDetail slug={slugValue} />
    </div>
  )
}

export default Page
