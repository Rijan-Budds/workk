import React from 'react'
import { FacilitesSection } from '../_component/FacilitesSection'

const page = ({ params }: { params: { slug: string } }) => {
  return <FacilitesSection slug={params.slug} />
}

export default page
