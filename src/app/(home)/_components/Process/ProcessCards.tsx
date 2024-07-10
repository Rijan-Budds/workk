import React from 'react'
import './process.css'
import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Inquiry',
    description:
      'Submit an inquiry form through our website or contact our admissions office to express your interest.',
    icon: '/home/inquiry.svg',
  },
  {
    number: '02',
    title: 'Application Form',
    description:
      "Complete the application form and provide the required documents, including child's birth certificate.",
    icon: '/home/form.svg',
  },
  {
    number: '03',
    title: 'Student Assessment',
    description:
      'For certain age groups, a student assessment may be conducted to understand their developmental progress.',
    icon: '/home/assessment.svg',
  },
  {
    number: '04',
    title: 'Acceptance',
    description:
      'Once the admission process is complete, you will receive an official acceptance letter from Pawan Prakriti School.',
    icon: '/home/awards.svg',
  },
]

const ProcessCards = () => {
  return (
    <div className="relative">
      <Image
        src="/home/processline1.svg"
        width={173}
        height={45}
        alt="line 1"
        className="absolute top-[313px] left-[113px]"
      />
      <Image
        src="/home/processline2.svg"
        width={173}
        height={45}
        alt="line 2"
        className="absolute top-[18px] left-[417px]"
      />
      <Image
        src="/home/processline3.svg"
        width={219}
        height={69}
        alt="line 3"
        className="absolute top-0 left-[898px]"
      />
      <div className="process-cards-container mt-[40px] relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="process-card hover:shadow-md transition-all duration-500"
          >
            <div className="absolute -top-6 -right-6 w-[82px] h-[82px] bg-[#CDDFED] rounded-full flex items-center justify-center">
              <Image
                width={32}
                height={32}
                src={step.icon}
                alt={`${step.title} icon`}
                className="w-[32px] h-[32px] mt-5 mr-5"
              />
            </div>
            <h1 className="text-[48px] font-poppins leading-[62.4px] text-[#DBDBDB]">
              {step.number}
            </h1>
            <h2 className="font-poppins text-xl font-semibold text-gradient">
              {step.title}
            </h2>
            <p className="text-[16px] font-workSans font-normal leading-[27.2px] text-[#5D5F69]">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProcessCards
