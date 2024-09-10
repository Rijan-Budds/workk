import React from 'react'
import AcademicSideBar from './AcademicSideBar'

const StickyAcademicSide = () => {
  return (
    <div className="max-h-[1145px] w-[397px] bg-white  sticky top-24 transition-all duration-700  flex-col gap-y-6 hidden 2lg:flex  ">
      <AcademicSideBar />
    </div>
  )
}

export default StickyAcademicSide
