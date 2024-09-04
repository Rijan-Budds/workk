'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React, { useState, useEffect } from 'react'
import TeamCards from './TeamCards'
import TeamTab from './TeamTab'
import { ITeamsData } from '../_interface/Teams'
import { TeamsData } from '../constants/data'

type ITitle =
  | 'Our Board Members'
  | 'Our Expert Instructors'
  | 'Administration Members'

const TeamSection = () => {
  const [title, setTitle] = useState<ITitle>('Our Board Members')
  const [filteredTeams, setFilteredTeams] = useState<ITeamsData[]>([])

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
    <>
      <CoverImage
        title="Our Team"
        list={[{ link: '', title: 'Our Team' }]}
        key={title}
      />
      <HomeWrapper>
        <div className="flex flex-col md:items-center gap-y-10 2lg:gap-y-14">
          <div>
            <TeamTab handleDynamicData={handleDynamicData} />
          </div>
          <div>
            <TeamCards teams={filteredTeams} />
          </div>
        </div>
      </HomeWrapper>
    </>
  )
}

export default TeamSection
