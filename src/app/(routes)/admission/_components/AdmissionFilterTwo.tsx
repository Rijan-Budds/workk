'use client'
import React, { useEffect, useState } from 'react'
import { FiFileText } from 'react-icons/fi'
import { IAdmissionData } from '../_interface/admission'
import { cn } from '@/common/utils/utils'

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

    // Combine all classes
    return `${baseClasses} ${borderRadiusClasses}`
  }

  return (
    <div className="flex flex-col bg-background rounded-xl cursor-pointer">
      {admissions?.map((admission: IAdmissionData, index: number) => (
        <div
          key={index}
          className={cn(
            `${getItemClasses(
              index
            )} bg-transparent text-heading hover:bg-secondary/50 hover:text-black transition-all duration-500 `,
            {
              'hover:bg-secondary bg-secondary text-white hover:text-white hover:pointer-events-none':
                activeAdmission === admissions[index].academics.slug,
            }
          )}
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
