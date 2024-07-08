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
    <div className="process-cards-container mt-[40px]">
      {steps.map((step, index) => (
        <div key={index} className="process-card">
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
  )
}

export default ProcessCards
