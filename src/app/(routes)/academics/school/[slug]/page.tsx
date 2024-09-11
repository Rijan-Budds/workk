'use client'
import React from 'react'
import School from '../_components/School'
import { useParams } from 'next/navigation'

const Page = () => {
  const { slug } = useParams()

  const slugValue = Array.isArray(slug) ? slug[0] : slug

  if (!slugValue) return <div>Loading...</div>

  return (
    <div>
      <School slug={slugValue} />
    </div>
  )
}

export default Page
