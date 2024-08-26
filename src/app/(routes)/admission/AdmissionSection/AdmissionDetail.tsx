import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import React from 'react'

const AdmissionDetail = () => {
  return (
    <div>
      <MiniHeading className="text-left">Management</MiniHeading>
      <SectionHeading>Are you prepared to advance your career?</SectionHeading>
      <p className="mt-6 font-workSans font-normal text-base leading-7 text-body">
        The National Examination Board (NEB), Nepal offers +2 programs which has
        been a mile stone to further education after SLC/SEE. The +2 program has
        wide ranges of subject choices to meet the purpose of secondary
        education in Nepal. It has almost every stream including Management,
        Humanities, Law, education and Science.
        <br />
        Pawan Prakriti English Secondary School (PPESS) is on a fascinating path
        of growth and development adopting different streams for + 2 Level. As
        you are aware, it has already established itself as one of the top
        colleges in the country. Ever since the inception of this college, we
        have been striving hard to comprehend the broad significance of
        education while designing our mode of instruction.{' '}
      </p>
      <div className="flex gap-x-5 mt-10">
        <div>
          <Image
            src="/home/academicgirl1.svg"
            width={246}
            height={454}
            alt="hello"
          />
        </div>
        <div className="mt-9">
          <Image
            src="/home/academicgirl2.svg"
            width={246}
            height={454}
            alt="hello"
          />
        </div>
        <div>
          <Image
            src="/home/academicgirl3.svg"
            width={246}
            height={454}
            alt="hello"
          />
        </div>
      </div>
      <p className="mt-10 font-workSans font-normal text-base leading-7 text-body">
        We mentor our students to sharpen their intelligence and enable them to
        accomplish their aspirations. The excellence in teaching and research
        comes from the careful choice of faculty members in which The PPESS has
        not made any compromise. We procure the support of a strong team of
        faculty members, who wholeheartedly put their efforts to motivate our
        students and guide them to progress at every step. Similarly, we instill
        in them a positive value system that shapes their attitude, outlook and
        conduct, that provides a strong foundation for them to tackle the
        challenges of life. The sacred vibrations of our campus invite you to
        the unique experience of quality learning in a multi-dimensional and
        participatory manner where you too shape the process. Students at PPESS
        work collaboratively in their classroom context. They are required to do
        their daily assignments, classwork, project work, individual or groups
        presentation and adequate self-study. PPESS also offers full, partial
        and semi partial scholarships to the needy students. The scholarships at
        PPESS are in wide rages and they are provided based on the academic
        excellence or performance of the students. The deserving students
        receive many different types of scholarships such as Entrance Toppers,
        Board Examination Toppers, etc.
      </p>
    </div>
  )
}

export default AdmissionDetail
