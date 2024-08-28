'use client'
import React from 'react'
import { DownloadUi } from '../../news/_component/DownloadUi'
import AdmissionFilterTwo from '../_components/AdmissionFilterTwo'
import AdmissionForm from '../_components/AdmissionForm'

const AdmissionSideBar = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <AdmissionFilterTwo />
      <DownloadUi />
      <AdmissionForm />
    </div>
  )
}

export default AdmissionSideBar
