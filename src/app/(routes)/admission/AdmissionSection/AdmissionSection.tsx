'use client'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import React from 'react'
import AdmissionDetail from './AdmissionDetail'
import AdmissionSideBar from './AdmissionSideBar'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
// import { ITeamsData, ITeamsResponse } from '../../teams/_interface/Teams'
// import AdmissionFilter from '../_components/AdmissionFilter'
// import { UseServerFetch } from '@/common/hook/useServerFetch'

// type ITitle =
//   | 'Our Board Members'
//   | 'Our Expert Instructors'
//   | 'Administration Members'

const AdmissionSection = () => {
  // const [title, setTitle] = useState<ITitle>('Our Board Members')
  // const [filteredTeams, setFilteredTeams] = useState<ITeamsData[]>([])
  // const [response, setResponse] = useState<ITeamsResponse | null>(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response: ITeamsResponse | undefined = await UseServerFetch(
  //         '/api/v1/team'
  //       )

  //       if (response) {
  //         setResponse(response)
  //       }
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  // useEffect(() => {
  //   if (response) {
  //     const filteredData = response.data.filter((team: ITeamsData) => {
  //       if (title === 'Our Board Members') {
  //         return team.managementLevel === 'BOARD_MEMBER'
  //       } else if (title === 'Our Expert Instructors') {
  //         return team.managementLevel === 'EXPERT_INSTRUCTOR'
  //       } else if (title === 'Administration Members') {
  //         return team.managementLevel === 'ADMINISTRATION_MEMBER'
  //       }
  //       return false
  //     })

  //     setFilteredTeams(filteredData)
  //   }
  // }, [title, response])

  // const handleDynamicData = (type: ITitle) => {
  //   setTitle(type)
  // }
  return (
    <div>
      <CoverImage
        title="Admission"
        list={[{ link: '', title: 'Admission' }]}
        // key={title}
      />

      <HomeWrapper>
        <div className="flex flex-col 2lg:flex-row gap-[80px] 2lg:gap-[56px]">
          {/* <AdmissionFilter handleDynamicData={handleDynamicData} /> */}
          <AdmissionDetail />
          <AdmissionSideBar />
        </div>
      </HomeWrapper>
    </div>
  )
}

export default AdmissionSection
