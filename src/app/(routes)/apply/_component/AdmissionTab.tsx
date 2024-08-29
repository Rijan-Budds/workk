'use client'

import { TabSwitch } from '@/common/components/Atom/TabSwitch'
import React, { useState } from 'react'
import { PlusTwoForm } from './PlusTwoForm'
import { SchoolForm } from './SchoolForm'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { UnSaveChange } from './UnSaveChange'

export const AdmissionTab = () => {
  const tabs = [
    { key: 'plus-two', title: '+2 Registration Form' },
    { key: 'school', title: 'School Registration Form' },
  ]

  const [active, setActiveTab] = useState<string>(tabs[0]?.key)
  const [triggerModal, setTriggerModal] = useState<boolean>(false)
  const [clickedTab, setClickedTab] = useState<string>('')
  const [isFieldChange, setIsFieldChange] = useState<boolean>(false)

  const handleConfirm = () => {
    setActiveTab(clickedTab)
    setTriggerModal(false)
  }

  const renderFormUi = () => {
    switch (active) {
      case 'plus-two':
        return <PlusTwoForm onFormChange={setIsFieldChange} />
      case 'school':
        return <SchoolForm onFormChange={setIsFieldChange} />
      default:
        return null
    }
  }

  const handleTabClick = (key: string) => {
    if (isFieldChange && key !== active) {
      setTriggerModal(true)

      setClickedTab(key)
    } else {
      setActiveTab(key)
    }
  }

  return (
    <div className="flex flex-col  justify-center items-center gap-y-10">
      <div className="w-fit flex flex-col justify-center items-center gap-y-10">
        <TabSwitch
          activeTab={active}
          tabs={tabs}
          setActive={setActiveTab}
          className="w-fit text-sm"
          isFieldChange={true}
          handleDynamicData={handleTabClick}
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
      {triggerModal && (
        <CustomModal isOpen={triggerModal}>
          <UnSaveChange
            setOpen={setTriggerModal}
            handleConfirm={handleConfirm}
          />
        </CustomModal>
      )}
    </div>
  )
}
