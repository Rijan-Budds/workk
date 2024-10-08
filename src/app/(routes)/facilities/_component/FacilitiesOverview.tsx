import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'

const FacilitiesOverview = async () => {
  return (
    <HomeWrapper>
      <div className="flex flex-col md:flex-row gap-10 md:gap-8 lg:gap-[81px]">
        <div className="flex gap-6 max-w-[656px]">
          <div className="w-[316px] ">
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
          <SectionHeading isMd className="mt-2 text-center md:text-start">
            Nurturing Tomorrow &apos;s Leaders
          </SectionHeading>
          <p className="font-workSans text-body font-normal text-[16px] leading-[27.2px] my-6">
            At Pawan Prakriti English Secondary School, we recognize that
            education is not confined to textbooks and classrooms. Our
            co-curricular activities play a pivotal role in nurturing
            well-rounded individuals by fostering creativity, leadership, and
            social responsibility among our students. These activities are
            carefully integrated into our curriculum, ensuring a balanced
            development of both academic and personal skills.
            <br /> <br />
            Holistic Development through Diverse Opportunities: Our
            co-curricular programs are designed to complement academic learning
            by offering students a platform to explore and hone their interests
            and talents. Whether it’s arts, music, drama, debate, or community
            service, each activity is an opportunity for students to discover
            their potential, build confidence, and develop essential life
            skills.
          </p>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default FacilitiesOverview
