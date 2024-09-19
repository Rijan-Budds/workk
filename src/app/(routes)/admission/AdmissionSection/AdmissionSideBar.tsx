'use client'
import React from 'react'
import { DownloadUi } from '../../news/_component/DownloadUi'
import AdmissionFilterTwo from '../_components/AdmissionFilterTwo'
import AdmissionForm from '../_components/AdmissionForm'
import { IAdmissionResponse } from '../_interface/admission'

interface AdmissionSideBarProps {
  admissions: IAdmissionResponse | null
  onFilterChange: (slug: string) => void
}

const AdmissionSideBar: React.FC<AdmissionSideBarProps> = ({
  admissions,
  onFilterChange,
}) => {
  return (
    <div className="2lg:flex flex-col gap-6 w-full hidden">
      <AdmissionFilterTwo
        admissions={admissions?.data || []}
        onFilterChange={onFilterChange}
      />
      <DownloadUi />
      <AdmissionForm />
    </div>
  )
}

export default AdmissionSideBar
