import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import Image from 'next/image'
import React from 'react'

const AdmissionDetail = () => {
  return (
    <div className="max-w-[787px]">
      <MiniHeading className="text-left">Management</MiniHeading>
      <SectionHeading>We consider each application with care.</SectionHeading>
      <p className="mt-6 font-workSans font-normal text-base leading-7 text-body">
        When reading an application, we get to know the person behind the
        numbers. We take into consideration your academic achievements,
        extracurricular activities, personal qualities, and life experiences.
        Just as there is no typical Pawan Prakriti student, there is no ideal
        applicant. We look forward to learning more about you.
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
      <p className="my-10 font-workSans font-normal text-base leading-7 text-body">
        Student should fill up an online admission form which will be available
        in college’s website after the announcement of the result of grade 10
        (SEE). Students securing at least CGPA 2.05 and C grade each in
        Mathematics and English will be eligible to fill up form.
        <br />
        Prospectus, Fee structure, model question, Entrance center, entrance
        symbol number, entrance date and time will be sent to your registered
        email ID. Along with the application form students should attach
        recently taken photograph with white background.
      </p>
      <SectionHeading>Admission Process</SectionHeading>
      <p className="mt-6 font-workSans font-normal text-base leading-7 text-body">
        Admissions & Enrolments at Ankuram on religion, race, gender or zonal
        boundaries are strictly prohibited and are considered against the law.
        The availability of seats is limited. The application process includes:
      </p>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default AdmissionDetail
