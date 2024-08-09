import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import React from 'react'

export const NewsDetailSection = () => {
  return (
    <>
      <div className="flex flex-col gap-y-2  items-start   2lg:max-w-[787px]">
        <MiniHeading>July 19, 2024</MiniHeading>
        <SectionHeading isMd>Co-currircular Activties</SectionHeading>
        <div className="flex flex-col gap-y-10 mt-8">
          <Image
            src={'/home/gallery-1.png'}
            width={343}
            height={228}
            alt="student studying on class"
            className="rounded-[12px] w-[343px] h-[228px] md:w-[671px] md:h-[448px] 2lg:w-[787px] 2lg:h-[525px]"
          />
          <p className="font-workSans font-normal text-[16px] leading-[27.2px] text-body">
            College/school curriculum relatively has a limited space for the
            holistic development of the learners. The learners have a high
            propensity of learning and mastery over the thing but the prescribed
            curriculum may not be sufficient for the learners. In doing so, the
            learners are expected to involve in different co-curricular
            activities to improve their overall performance.
            <br />
            Most importantly, co-curricular activities that are recognized by a
            school/college /universitythat fall beyond the domain of academic
            curriculum but is an essential part of a student life at an
            educational institute.
            <br />
            Pawan Prakriti English Secondary School organizes several activities
            and tasks as the co-curricular activities including spelling
            contest, quiz content, talent hunt, debate competition, speech
            competition, dramatization, role play, musical events, magazine
            writing competition, project work, field report, research and
            academic writing, drafting editorial and newspaper writing, etc.
            <br />
            More specifically, it is believed that co-curricular activities are
            mainly intended to explore students’ potentials pertaining to their
            content knowledge, methodological skills and curricular enrichment
            within their course content.Thus, we rigorously organize and invite
            students to involve in different activities which are most effective
            to improve their overall performance.
            <br />
            More specifically, it is believed that co-curricular activities are
            mainly intended to explore students’ potentials pertaining to their
            content knowledge, methodological skills and curricular enrichment
            within their course content.Thus, we rigorously organize and invite
            students to involve in different activities which are most effective
            to improve their overall performance.
            <br />
            More specifically, it is believed that co-curricular activities are
            mainly intended to explore students’ potentials pertaining to their
            content knowledge, methodological skills and curricular enrichment
            within their course content.Thus, we rigorously organize and invite
            students to involve in different activities which are most effective
            to improve their overall performance.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <Image
              src={'/home/gallery-2.png'}
              width={343}
              height={228}
              alt="student studying on class"
              className="rounded-[12px] w-[343px] h-[228px] md:w-[324px] md:h-[216px]"
            />
            <Image
              src={'/home/gallery-3.png'}
              width={343}
              height={228}
              alt="student studying on class"
              className="rounded-[12px] w-[343px] h-[228px] md:w-[324px] md:h-[216px]"
            />
          </div>
        </div>
      </div>
    </>
  )
}
