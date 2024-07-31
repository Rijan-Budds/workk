import React from 'react'
import { NewsDetailUi } from '../_component/NewsDetailUi'

const page = ({ params }: { params: { slug: string } }) => {
  return <NewsDetailUi slug={params.slug} />
}

export default page
