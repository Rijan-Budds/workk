'use client'

import { Button } from '@/common/components/Atom/Button'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import Image from 'next/image'
import Link from 'next/link'

const staticAboutData = {
  title: 'Discover Our Vision & Values',
  description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed commodo ex at erat fermentum, vel malesuada libero scelerisque. Proin viverra, urna at fringilla tristique, justo risus tincidunt nulla, nec ultrices sapien magna a nulla. Duis commodo, sem vel facilisis lacinia, lectus sapien tincidunt ligula, at facilisis turpis lectus at orci.</p>
  <p>Integer accumsan quam ut purus fermentum, ac volutpat turpis tincidunt. In hac habitasse platea dictumst.</p>`,
  features: [
    'Modern Classrooms',
    'Experienced Faculty',
    'Safe Learning Environment',
    'Extra-Curricular Activities',
  ],
}

const AboutComponent = () => {
  const renderAboutDataUi = () => {
    const introduction = staticAboutData
    const features = introduction.features

    return (
      <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-[81px]">
        <div className="flex gap-6 max-w-[656px]">
          <div className="max-w-[316px]">
            <Image
              src="/home/hero-image2.jpg"
              width={316}
              height={583}
              alt="about"
              className="rounded-xl"
            />
          </div>
          <div className="max-w-[316px]">
            <Image
              src="/home/hero-image1.jpg"
              width={316}
              height={583}
              alt="about"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="w-full 2lg:max-w-[503px] flex flex-col justify-center mx-auto">
          <MiniHeading isMd className="text-start">
            Adarsha Secondary School
          </MiniHeading>
          <SectionHeading isMd className="mt-2 text-start">
            {introduction.title}
          </SectionHeading>
          <div
            className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6 break-all"
            dangerouslySetInnerHTML={{ __html: introduction.description }}
          ></div>
          <ul className="custom-list text-heading font-normal text-[16px] leading-[27.2px] grid grid-cols-1 lg:grid-cols-2 gap-y-[16px] gap-2 2lg:gap-[24px]">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="mt-[40px]">
            <Link href="/apply">
              <Button>Apply for Admission</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <CoverImage title="About Us" list={[{ link: null, title: 'About us' }]} />
      <div className="relative overflow-hidden">
        <HomeWrapper>
          {renderAboutDataUi()}
          <div className="hidden md:block absolute bg-primaryLighter w-[243px] h-[243px] rounded-full left-[218px] -bottom-[80px] -z-10" />
        </HomeWrapper>
      </div>
    </>
  )
}

export default AboutComponent
