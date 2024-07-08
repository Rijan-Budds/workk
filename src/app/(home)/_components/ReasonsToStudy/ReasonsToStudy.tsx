import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import React from 'react'
import { VideoSection } from './VideoSection'

export const ReasonsToStudy = () => {
  const missionData = [
    {
      title: 'Mission',
      description:
        'Our mission is to cultivate a love of learning in each student.',
      icon: '/home/mission.svg',
    },
    {
      title: 'Vision',
      description:
        'Our vision is to devote all our efforts to achieving excellence in education.',
      icon: '/home/vision.svg',
    },
    {
      title: 'Goal',
      description:
        'Our goal is to create a transformative educational environment that fosters academic excellence',
      icon: '/home/goal.svg',
    },
  ]
  return (
    <HomeWrapper>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <SectionHeading>
            Reasons For Students To Be
            <br />
            At Pawan Prakriti
          </SectionHeading>

          <p className="font-workSans font-normal text-[16px] leading-[27.2px]">
            As you begin to consider your career goals choices may
            <br />
            appear confusing. Go with Modern Technology. Through the
            <br />
            use of learning management systems.
          </p>
        </div>
        <div className="flex justify-between items-center mt-4 ">
          <div className="mt-[123px]">
            {missionData.map((d, index) => (
              <MissionTimeline
                key={index}
                title={d.title}
                description={d.description}
                src={d.icon}
                showLine={index !== missionData.length - 1}
              />
            ))}
          </div>
          <VideoSection />
        </div>
      </div>
    </HomeWrapper>
  )
}

const MissionTimeline = ({
  title,
  description,
  src,
  showLine,
}: {
  title: string
  description: string
  src: string
  showLine: boolean
}) => {
  return (
    <div className="flex gap-x-6">
      <div className="flex flex-col  items-center">
        <Image width={64} height={64} src={src} alt="mission icon" />
        {showLine && (
          <Image
            width={2}
            height={100}
            src={'/home/line.svg'}
            alt="mission icon"
          />
        )}
      </div>
      <div>
        <span className="text-[20px] leading-[26px] font-poppins text-[#313131] font-medium">
          {title}
        </span>
        <p className="font-workSans text-[14px] leading-[21px] text-[#5D5F69] max-w-[285px]">
          {description}
        </p>
      </div>
    </div>
  )
}
