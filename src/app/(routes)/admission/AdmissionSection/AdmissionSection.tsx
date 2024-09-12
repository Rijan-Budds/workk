'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import React, { useEffect, useState } from 'react'
import AdmissionDetail from './AdmissionDetail'
import AdmissionSideBar from './AdmissionSideBar'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { ITeamsData } from '../../teams/_interface/Teams'
import { TeamsData } from '../../teams/constants/data'
import AdmissionFilter from '../_components/AdmissionFilter'

type ITitle =
  | 'Our Board Members'
  | 'Our Expert Instructors'
  | 'Administration Members'

const AdmissionSection = () => {
  const [title, setTitle] = useState<ITitle>('Our Board Members')
  const [filteredTeams, setFilteredTeams] = useState<ITeamsData[]>([]) // eslint-disable-line

  useEffect(() => {
    let filteredData: ITeamsData[] = []
    if (title === 'Our Board Members') {
      filteredData = TeamsData.filter((team) => team.type === 'board')
    } else if (title === 'Our Expert Instructors') {
      filteredData = TeamsData.filter((team) => team.type === 'instructor')
    } else if (title === 'Administration Members') {
      filteredData = TeamsData.filter((team) => team.type === 'administration')
    }
    setFilteredTeams(filteredData)
  }, [title])

  const handleDynamicData = (type: ITitle) => {
    setTitle(type)
  }
  return (
    <div>
      <CoverImage
        title="Admission"
        list={[{ link: '', title: 'Admission' }]}
        key={title}
      />

      <HomeWrapper>
        <div className="flex flex-col 2lg:flex-row gap-[80px] 2lg:gap-[56px]">
          <AdmissionFilter handleDynamicData={handleDynamicData} />
          <AdmissionDetail />
          <AdmissionSideBar />
        </div>
      </HomeWrapper>
    </div>
  )
}

export default AdmissionSection
