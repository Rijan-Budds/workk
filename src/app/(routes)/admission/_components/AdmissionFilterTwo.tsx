'use client'
import React, { useState } from 'react'
import { FiFileText } from 'react-icons/fi'
import { IAdmissionData } from '../_interface/admission'

interface AdmissionFilterTwoProps {
  admissions: IAdmissionData[]
  onFilterChange: (slug: string) => void
}

const AdmissionFilterTwo: React.FC<AdmissionFilterTwoProps> = ({
  admissions,
  onFilterChange,
}) => {
  const [activeAdmission, setActiveAdmission] = useState<string>('')

  const handleTabClick = (slug: string) => {
    setActiveAdmission(slug)
    onFilterChange(slug)
  }

  return (
    <div className="flex flex-col bg-background rounded-xl">
      {admissions?.map((admission: IAdmissionData, index: number) => (
        <div
          key={index}
          className={`flex justify-between p-6 font-workSans text-base leading-4 font-medium rounded-xl cursor-pointer transition-colors duration-200 ${
            activeAdmission === admission.academics.slug
              ? 'bg-secondary text-white'
              : 'bg-transparent text-heading hover:bg-secondary hover:text-white'
          }`}
          onClick={() => handleTabClick(admission.academics.slug)}
        >
          <h2>{admission.academics.title}</h2>
          <FiFileText />
        </div>
      ))}
    </div>
  )
}

export default AdmissionFilterTwo
