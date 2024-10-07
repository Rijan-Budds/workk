'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React, { useState, useEffect } from 'react'
import TeamCards from './TeamCards'
import TeamTab from './TeamTab'
import { ITeamsData, ITeamsResponse } from '../_interface/Teams'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { NoDataFound } from '@/common/components/NoDataFound'
import { TabAnimation } from '@/common/components/Molecules/TabAnimation'
import { UiLoader } from '@/common/components/Atom/UiLoader'

const tabs = [
  { key: 'Our Board Members', title: 'Our Board Members' },
  { key: 'Our Expert Instructors', title: 'Our Expert Instructors' },
  { key: 'Administration Members', title: 'Administration Members' },
]
const TeamSection = () => {
  const [response, setResponse] = useState<ITeamsResponse | null>(null)
  const [active, setActiveTab] = useState<string>(tabs[0]?.key)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: ITeamsResponse | undefined = await UseServerFetch(
          '/api/v1/team'
        )

        if (response) {
          setResponse(response)
        }
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  const [filteredTeams, setFilteredTeams] = useState<ITeamsData[] | null>(null)

  useEffect(() => {
    if (response) {
      // Filter based on title and management level
      const filteredData = response.data.filter((team: ITeamsData) => {
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
    }
  }, [active, response])

  const handleDynamicData = (key: string) => {
    setActiveTab(key)
  }

  const renderTeamsUi = () => {
    if (filteredTeams && filteredTeams.length > 0) {
      return <TeamCards teams={filteredTeams} />
    } else if (filteredTeams && filteredTeams.length === 0) {
      return <NoDataFound title="No data found" />
    } else {
      return (
        <div className="min-h-[200px] flex justify-center items-center">
          <UiLoader />
        </div>
      )
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
