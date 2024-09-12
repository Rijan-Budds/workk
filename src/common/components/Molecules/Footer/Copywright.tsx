import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'

const Copywright = () => {
  return (
    <HomeWrapper className="py-4">
      <div className="flex flex-col lg:flex-row gap-y-6  md:gap-y-4 lg:gap-y-0 justify-between">
        <h2 className="font-workSans font-light  text-[14px] md:text-[16px] leading-[21px] md:leading-[27.2px] text-white">
          Copyright ©2024. All Rights Reserved by Pawan Prakriti Secondary
          School | Powered
          <br className="hidden md:block 2lg:hidden" />
          by AITC International
        </h2>
        <p className="font-workSans font-light text-[14px]  leading-[21px]  text-white">
          Terms and Conditions {'\u00A0\u00A0'} / {'\u00A0\u00A0'} privacy
        </p>
      </div>
    </HomeWrapper>
  )
}

export default Copywright
