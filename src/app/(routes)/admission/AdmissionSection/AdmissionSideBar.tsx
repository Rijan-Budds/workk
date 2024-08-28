'use client'
import React from 'react'
import { DownloadUi } from '../../news/_component/DownloadUi'
import AdmissionForm from '../_component/AdmissionForm'
import AdmissionFilterTwo from '../_component/AdmissionFilterTwo'

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
