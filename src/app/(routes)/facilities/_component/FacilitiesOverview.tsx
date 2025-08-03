import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'

const FacilitiesOverview = async () => {
  return (
    <HomeWrapper>
      <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-[81px] ">
        <div className="flex gap-6 max-w-[656px]">
          <div className="w-[316px] ">
            <Image
              src="/home/about1.2.jpg"
              width={316}
              height={583}
              alt="about"
              className="rounded-xl"
            />
          </div>
          <div className="max-w-[316px]">
            <Image
              src="/home/study.jpg"
              width={316}
              height={583}
              alt="about"
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="w-full 2lg:max-w-[503px] flex flex-col justify-center mx-auto">
          <MiniHeading isMd className="text-start">
          Naulo Jyoti English School
          </MiniHeading>
          <SectionHeading isMd className="mt-2 text-center md:text-start">
            Nurturing Tomorrow &apos;s Leaders
          </SectionHeading>
          <p className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate quod voluptate perspiciatis accusantium ad ipsum aperiam non tenetur dolores aspernatur quaerat odio ex aliquid, doloribus eveniet dolor distinctio recusandae?
            <br /> <br />
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium assumenda mollitia, blanditiis et deleniti doloremque facilis sunt qui quisquam, dolorem esse labore quis voluptatem quae recusandae dicta totam unde quo.
          </p>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default FacilitiesOverview
