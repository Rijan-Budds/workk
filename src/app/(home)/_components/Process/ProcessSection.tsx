import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import React from 'react'
import ProcessCards from './ProcessCards'

const ProcessSection = () => {
  return (
    <HomeWrapper isBg>
      <div>
        <h3 className="text-secondary text-[14px] leading-[21px] tracking-[2px]  font-medium font-workSans uppercase text-center">
          Process
        </h3>
        <h1 className="font-poppins font-medium text-[38px] leading-[49.4px] mt-2 text-center">
          Admission Process
        </h1>
        <ProcessCards />
      </div>
    </HomeWrapper>
  )
}

export default ProcessSection
