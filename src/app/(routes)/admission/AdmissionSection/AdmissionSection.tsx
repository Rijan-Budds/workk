'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import React, { useEffect, useState } from 'react'
import AdmissionDetail from './AdmissionDetail'
import AdmissionSideBar from './AdmissionSideBar'
import { CoverImage } from '@/common/components/Molecules/CoverImage'

import AdmissionFilter from '../_components/AdmissionFilter'
import {
  IAdmissionDetailResponse,
  IAdmissionResponse,
} from '../_interface/admission'
import { UseServerFetch } from '@/common/hook/useServerFetch'

const AdmissionSection = () => {
  const [admissions, setAdmissions] = useState<IAdmissionResponse | null>(null)
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const [selectedAdmission, setSelectedAdmission] =
    useState<IAdmissionDetailResponse | null>(null)

  // admission api
  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const response: IAdmissionResponse | undefined = await UseServerFetch(
          '/api/v1/admission'
        )
        if (response) {
          setAdmissions(response)
          // Set 'management' as the default only if there's no active slug
          if (!activeSlug) {
            const managementAdmission = response.data.find(
              (admission) => admission.academics.slug === 'management'
            )
            if (managementAdmission) {
              setActiveSlug('management')
            } else if (response.data.length > 0) {
              setActiveSlug(response.data[0].academics.slug)
            }
          }
        }
      } catch (error) {
        console.error('Error fetching admissions:', error)
      }
    }
    fetchAdmissions()
  }, [activeSlug])

  useEffect(() => {
    if (activeSlug) {
      const admissionDetail = activeSlug.toLowerCase()
      const fetchAdmissionDetail = async () => {
        try {
          const response: IAdmissionDetailResponse | undefined =
            await UseServerFetch(`/api/v1/admission/${admissionDetail}`)
          if (response) {
            setSelectedAdmission(response)
          }
        } catch (error) {
          console.error('Error fetching admission details:', error)
        }
      }
      fetchAdmissionDetail()
    }
  }, [activeSlug])

  const handleFilterChange = (slug: string) => {
    setActiveSlug(slug)
  }

  console.log('Admissions in AdmissionSection:', admissions?.data)

  return (
    <div>
      <CoverImage title="Admission" list={[{ link: '', title: 'Admission' }]} />

      <HomeWrapper>
        <div className="flex flex-col 2lg:flex-row gap-[80px] 2lg:gap-[56px]">
          <AdmissionFilter
            admissions={admissions?.data || []}
            onFilterChange={handleFilterChange}
          />
          <AdmissionDetail selectedAdmission={selectedAdmission?.data} />
          <AdmissionSideBar
            admissions={admissions}
            onFilterChange={handleFilterChange}
          />
        </div>
      </HomeWrapper>
    </div>
  )
}

export default AdmissionSection
