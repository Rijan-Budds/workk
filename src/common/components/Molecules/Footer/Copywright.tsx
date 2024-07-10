import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'

const Copywright = () => {
  return (
    <HomeWrapper className="py-4">
      <div className="flex justify-between">
        <h1 className="font-workSans font-light text-[16px] leading-[27.2px] text-white">
          Copyright ©2024. All Rights Reserved by Pawan Prakriti Secondary
          School | Powered by AITC International
        </h1>
        <h1 className="font-workSans font-light text-[16px] leading-[27.2px] text-white">
          Terms and Conditions / Privacy
        </h1>
      </div>
    </HomeWrapper>
  )
}

export default Copywright
