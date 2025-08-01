'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React, { useState, useEffect } from 'react'
import TeamCards from './TeamCards'
import TeamTab from './TeamTab'
import { ITeamsData } from '../_interface/Teams'
import { NoDataFound } from '@/common/components/NoDataFound'
import { TabAnimation } from '@/common/components/Molecules/TabAnimation'

const tabs = [
  { key: 'Our Board Members', title: 'Our Board Members' },
  { key: 'Our Expert Instructors', title: 'Our Expert Instructors' },
  { key: 'Administration Members', title: 'Administration Members' },
]

// Static teams data (replace with your actual data)
const staticTeamsData: ITeamsData[] = [
    {
    id: '1',
    name: 'Jane Smith',
    position: 'Senior Instructor',
    managementLevel: 'BOARD_MEMBER',
    facebook: null,
    instagram: 'https://instagram.com/janesmith',
    twitter: null,
    image: {
      key: '/home/user2.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
  
  {
    id: '1',
    name: 'Jane Smith',
    position: 'Senior Instructor',
    managementLevel: 'EXPERT_INSTRUCTOR',
    facebook: null,
    instagram: 'https://instagram.com/janesmith',
    twitter: null,
    image: {
      key: '/home/user2.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: '2',
    name: 'Jane Smith',
    position: 'Senior Instructor',
    managementLevel: 'EXPERT_INSTRUCTOR',
    facebook: null,
    instagram: 'https://instagram.com/janesmith',
    twitter: null,
    image: {
      key: '/home/user2.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  },
  {
    id: '3',
    name: 'Jane Smith',
    position: 'Senior Instructor',
    managementLevel: 'EXPERT_INSTRUCTOR',
    facebook: null,
    instagram: 'https://instagram.com/janesmith',
    twitter: null,
    image: {
      key: '/home/user2.jpg',
      bucket: '',
      mimeType: 'image/jpeg',
    },
  }
]

const TeamSection = () => {
  const [active, setActiveTab] = useState<string>(tabs[0]?.key)
  const [filteredTeams, setFilteredTeams] = useState<ITeamsData[]>([])

  // Filter once on active tab change
  useEffect(() => {
    const filteredData = staticTeamsData.filter((team) => {
      if (active === 'Our Board Members') {
        return team.managementLevel === 'BOARD_MEMBER'
      } else if (active === 'Our Expert Instructors') {
        return team.managementLevel === 'EXPERT_INSTRUCTOR'
      } else if (active === 'Administration Members') {
        return team.managementLevel === 'ADMINISTRATION_MEMBER'
      }
      return false
    })
    setFilteredTeams(filteredData)
  }, [active])

  const handleDynamicData = (key: string) => {
    setActiveTab(key)
  }

  const renderTeamsUi = () => {
    if (filteredTeams.length > 0) {
      return <TeamCards teams={filteredTeams} />
    } else {
      return <NoDataFound title="No data found" />
    }
  }

  return (
    <>
      <CoverImage
        title="Our Team"
        list={[{ link: '', title: 'Our Team' }]}
        key={'Our Team'}
      />
      <HomeWrapper>
        <div className="flex flex-col md:items-center gap-y-10 2lg:gap-y-14">
          <div>
            <TabAnimation
              activeTab={active}
              setActive={setActiveTab}
              tabs={tabs}
              handleDynamicData={handleDynamicData}
              className="hidden md:flex"
            />
            <TeamTab handleDynamicData={handleDynamicData} />
          </div>
          <div>{renderTeamsUi()}</div>
        </div>
      </HomeWrapper>
    </>
  )
}

export default TeamSection
