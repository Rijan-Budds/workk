'use client'
import React, { useEffect, useState } from 'react'
import { DownloadUi } from '../../news/_component/DownloadUi'
import AdmissionFilterTwo from '../_components/AdmissionFilterTwo'
import AdmissionForm from '../_components/AdmissionForm'
import { IAdmissionResponse } from '../_interface/admission'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import {
  IBrochureApiResponse,
  IBrochureItem,
} from '../../brochure/interface/brochureType'

interface AdmissionSideBarProps {
  admissions: IAdmissionResponse | null
  onFilterChange: (slug: string) => void
}

const AdmissionSideBar: React.FC<AdmissionSideBarProps> = ({
  admissions,
  onFilterChange,
}) => {
  const [brochureData, setBrochureData] = useState<IBrochureItem[] | undefined>(
    undefined
  )

  useEffect(() => {
    const fetchBrochureResponse = async () => {
      try {
        const brochureDataResponse: IBrochureApiResponse | undefined =
          await UseServerFetch(`/api/v1/brochure`)
        if (brochureDataResponse) {
          setBrochureData(brochureDataResponse?.data)
        }
      } catch (error) {
        console.error('Error fetching brochure data:', error)
      }
    }

    fetchBrochureResponse()
  }, [])
  return (
    <div className="md:flex flex-col gap-6 w-full hidden">
      <AdmissionFilterTwo
        admissions={admissions?.data || []}
        onFilterChange={onFilterChange}
      />
      {brochureData && <DownloadUi data={brochureData} />}
      <AdmissionForm />
    </div>
  )
}

export default AdmissionSideBar
