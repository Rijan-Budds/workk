import { Button } from '@/common/components/Atom/Button'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { NoDataFound } from '@/common/components/NoDataFound'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import Image from 'next/image'
import Link from 'next/link'
import { IAboutResponse } from '../_interface/About'

const AboutComponent = async () => {
  const response: IAboutResponse | undefined = await UseServerFetch(
    '/api/v1/introduction'
  )

  const renderAboutDataUi = () => {
    if (response?.data) {
      const introduction = response?.data
      const features = introduction.features

      return (
        <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-[81px]">
          <div className="flex gap-6 max-w-[656px]">
            <div className="max-w-[316px] ">
              <Image
                src="/home/about3.png"
                width={316}
                height={583}
                alt="about"
                className="rounded-xl"
              />
            </div>
            <div className="max-w-[316px]">
              <Image
                src="/home/about4.png"
                width={316}
                height={583}
                alt="about"
                className="rounded-xl"
              />
            </div>
          </div>
          <div className="w-full 2lg:max-w-[503px] flex flex-col justify-center mx-auto">
            <MiniHeading isMd className="text-start">
              Pawan Prakriti English Secondary School
            </MiniHeading>
            <SectionHeading isMd className="mt-2 text-start">
              {introduction.title}
            </SectionHeading>
            <div
              className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6 break-all"
              dangerouslySetInnerHTML={{ __html: introduction.description }}
            ></div>
            <div className="">
              <ul className="custom-list text-heading font-normal text-[16px] leading-[27.2px] grid grid-cols-1 lg:grid-cols-2 gap-y-[16px] gap-2 2lg:gap-[24px]">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mt-[40px]">
              <Link href={'/apply'}>
                <Button>Apply for Admission</Button>
              </Link>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          {' '}
          <MiniHeading isMd className="text-start">
            Pawan Prakriti English Secondary School
          </MiniHeading>
          <NoDataFound title="No About Us Data Found" />
        </div>
      )
    }
  }

  return (
    <>
      <CoverImage
        title="About Us"
        list={[{ link: 'about', title: 'About us' }]}
      />
      <HomeWrapper>{renderAboutDataUi()}</HomeWrapper>
    </>
  )
}

export default AboutComponent
