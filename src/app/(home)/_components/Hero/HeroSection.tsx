import { Button } from '@/common/components/Atom/Button'
import React from 'react'
import { HeroBgWrapper } from './HeroBgWrapper'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import Image from 'next/image'
import { HeroImageSection } from './HeroImageSection'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import Link from 'next/link'
import { IHomepageItem } from '@/app/(routes)/contact/_interface/Contact'

export const HeroSection = ({
  settings,
}: {
  settings: IHomepageItem[] | undefined
}) => {
  const filterRewardsNumber = settings?.filter(
    (d) => d.key === 'Honor and Awards Won'
  )

  return (
    <HeroBgWrapper>
      <HomeWrapper className="2lg:py-[97px]">
        <div className="flex items-center flex-col  2lg:flex-row  w-full ">
          <div className="flex justify-start items-center w-full  ">
            <div className="flex flex-col gap-y-24 2lg:mt-16">
              <div className="flex flex-col gap-y-2 items-center 2lg:items-start">
                <MiniHeading isMd className="text-center">
                  Welcome to Pawan prakriti school
                </MiniHeading>

                <h1 className="text-[32px] md:text-[42px] leading-[41.6px] md:leading-[54.6px] text-center 2lg:text-left font-medium md:font-semibold text-white font-poppins">
                  Empowering Minds, Shaping
                  <br className="hidden md:block" />
                  Futures.
                </h1>
                <p className="font-workSans text-[16px] leading-[27.2px] text-white font-normal mt-2 text-center 2lg:text-left">
                  At Pawan Prakriti, we believe in nurturing every
                  student`&apos;s potential to create
                  <br className="hidden 2lg:block" />
                  tomorrow`&apos;s leaders.
                </p>
                <div className="flex flex-col md:flex-row gap-y-4 justify-center 2lg:justify-start w-full mt-[32px]  md:gap-x-4">
                  <Link href={'/apply'}>
                    <Button className="w-full">Apply Now</Button>
                  </Link>
                  <Link
                    href={'/academics'}
                    className=" bg-white pr-6 pl-[10px] py-1 rounded-[8px] text-primary leading-4 font-medium flex items-center justify-center 2lg:justify-start gap-x-1"
                  >
                    <Image
                      width={40}
                      height={40}
                      alt="ripple animation on button"
                      src="/home/btn-animation.gif"
                    />
                    Admission Open
                  </Link>
                </div>
              </div>
              <div className=" items-center gap-x-3 hidden  2lg:flex">
                <Image
                  width={56}
                  height={56}
                  alt="Reward Start"
                  src={'/home/star-award.svg'}
                />
                <div className="flex flex-col ">
                  <h2 className="text-[28px] leading-[36.4px] font-semibold font-poppins text-white">
                    {filterRewardsNumber && filterRewardsNumber[0].value}
                  </h2>
                  <p className="font-medium text-[16px] leading-4 font-workSans text-white">
                    Honor & Award Win
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className=" -mb-[12rem] mt-14  2lg:mt-0 2lg:mb-0 ">
            <HeroImageSection />
          </div>
        </div>
      </HomeWrapper>
    </HeroBgWrapper>
  )
}
