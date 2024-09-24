'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import React, { useState, useEffect } from 'react'
import TeamCards from './TeamCards'
import TeamTab from './TeamTab'
import { ITeamsData, ITeamsResponse } from '../_interface/Teams'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { NoDataFound } from '@/common/components/NoDataFound'

type ITitle =
  | 'Our Board Members'
  | 'Our Expert Instructors'
  | 'Administration Members'

const TeamSection = () => {
  const [response, setResponse] = useState<ITeamsResponse | null>(null)
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

  const [title, setTitle] = useState<ITitle>('Our Board Members')
  const [filteredTeams, setFilteredTeams] = useState<ITeamsData[]>([])

  useEffect(() => {
    if (response) {
      // Filter based on title and management level
      const filteredData = response.data.filter((team: ITeamsData) => {
        if (title === 'Our Board Members') {
          return team.managementLevel === 'BOARD_MEMBER'
        } else if (title === 'Our Expert Instructors') {
          return team.managementLevel === 'EXPERT_INSTRUCTOR'
        } else if (title === 'Administration Members') {
          return team.managementLevel === 'ADMINISTRATION_MEMBER'
        }
        return false
      })

      setFilteredTeams(filteredData)
    }
  }, [title, response])

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
            {/* Conditional rendering for "No Data Found" */}
            {filteredTeams.length > 0 ? (
              <TeamCards teams={filteredTeams} />
            ) : (
              <p className="text-center text-lg text-gray-500">
                <NoDataFound title="No Teams Found" />
              </p>
            )}
          </div>
        </div>
      </HomeWrapper>
    </>
  )
}

export default TeamSection
