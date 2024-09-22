'use client'
import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    if (!activeAdmission && admissions.length > 0) {
      const defaultSlug = admissions[0].academics.slug
      setActiveAdmission(defaultSlug)
      onFilterChange(defaultSlug)
    }
  }, [admissions, activeAdmission, onFilterChange])

  const handleTabClick = (slug: string) => {
    setActiveAdmission(slug)
    onFilterChange(slug)
  }

  const getItemClasses = (index: number) => {
    const isActive = activeAdmission === admissions[index].academics.slug
    const baseClasses =
      'flex justify-between p-6 font-workSans text-base leading-4 font-medium cursor-pointer transition-colors duration-200'

    let borderRadiusClasses = ''

    // Apply top rounded border radius to the first item
    if (index === 0) {
      borderRadiusClasses = 'rounded-t-xl'
    }

    // Apply no border radius to middle items
    if (index > 0 && index < admissions.length - 1) {
      borderRadiusClasses = 'rounded-none'
    }

    // Apply bottom rounded border radius to the last item
    if (index === admissions.length - 1) {
      borderRadiusClasses = 'rounded-b-xl'
    }

    // If active, apply active styles (bg-secondary text-white)
    const activeClasses = isActive
      ? 'bg-secondary text-white'
      : 'bg-transparent text-heading hover:bg-secondary hover:text-white'

    // Combine all classes
    return `${baseClasses} ${borderRadiusClasses} ${activeClasses}`
  }

  return (
    <div className="flex flex-col bg-background rounded-xl">
      {admissions?.map((admission: IAdmissionData, index: number) => (
        <div
          key={index}
          className={getItemClasses(index)}
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
