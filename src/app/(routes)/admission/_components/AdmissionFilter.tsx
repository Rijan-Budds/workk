'use client'
import { cn } from '@/common/utils/utils'
import React, { useState } from 'react'
import { IAdmissionData } from '../_interface/admission'

interface AdmissionFilterProps {
  admissions: IAdmissionData[]
  onFilterChange: (slug: string) => void
}

const AdmissionFilter: React.FC<AdmissionFilterProps> = ({
  admissions,
  onFilterChange,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeAdmission, setActiveAdmission] = useState<string>('Management')

  const handleTabClick = (slug: string) => {
    setActiveAdmission(slug)
    onFilterChange(slug) // Trigger filter change
    setIsDropdownOpen(false)
  }
  return (
    <div className="2lg:hidden relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="font-workSans font-normal text-[18px] leading-6 px-4 py-2 bg-white text-black rounded-[8px] h-[48px] w-full text-left flex justify-between items-center shadow border-[#E7EEF8]"
      >
        {activeAdmission || 'Management'}
        <svg
          className={cn('w-6 h-6 transition-transform', {
            'transform rotate-180': isDropdownOpen,
          })}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute bg-white shadow-md rounded-[10px] mt-2 w-full z-10 border-b-[#E7EEF8]">
          {admissions?.map((admission: IAdmissionData) => (
            <button
              key={admission.academics.title}
              onClick={() => handleTabClick(admission.academics.title)}
              className={`font-workSans font-normal text-[18px] leading-6 px-4 py-2 w-full text-left bg-transparent text-black hover:bg-primary hover:text-white rounded-[10px] transition-all duration-300 ${
                activeAdmission === admission.academics.title
                  ? 'bg-primary text-black'
                  : ''
              }`}
            >
              {admission.academics.title}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdmissionFilter
