'use client'

import { TabSwitch } from '@/common/components/Atom/TabSwitch'
import React, { useState } from 'react'
import { PlusTwoForm } from './PlusTwoForm'
import { SchoolForm } from './SchoolForm'

export const AdmissionTab = () => {
  const [active, setActiveTab] = useState<string>('')

  const renderFormUi = () => {
    if (active === 'plus-two') {
      return <PlusTwoForm />
    } else if (active === 'school') {
      return <SchoolForm />
    }
  }

  return (
    <div className="flex flex-col  justify-center items-center gap-y-10">
      <div className="w-fit flex flex-col justify-center items-center gap-y-10">
        <TabSwitch
          tabs={[
            { key: 'plus-two', title: '+2 Registration Form' },
            { key: 'school', title: 'School Registration Form' },
          ]}
          setActive={setActiveTab}
          className="w-fit text-sm"
        />
        <p className="font-workSans font-normal text-[16px] leading-[27.2px] text-center text-body">
          When reading an application, we get to know the person behind the
          numbers. We take into consideration your academic achievements,
          extracurricular activities, personal qualities, and life experiences.
          Just as there is no typical student, there is no ideal applicant. We
          look forward to learning more about you.
        </p>
      </div>
      {renderFormUi()}
    </div>
  )
}
