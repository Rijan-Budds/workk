'use client'
import React, { useEffect, useState } from 'react'
import ResultTab from './ResultTab'
import ResultSection from './ResultSection'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { IResultData } from '../_interface/Reslut'
import { ResultData } from '../_constants/data'

type ITitle = 'Plus Two' | 'School Level'

const ResultUi = () => {
  const [title, setTitle] = useState<ITitle>('Plus Two')
  const [filteredTeams, setFilteredTeams] = useState<IResultData[]>([]) // eslint-disable-line

  useEffect(() => {
    let filteredData: IResultData[] = []
    if (title === 'Plus Two') {
      filteredData = ResultData.filter((result) => result.type === 'Plus Two')
    } else if (title === 'School Level') {
      filteredData = ResultData.filter(
        (result) => result.type === 'School Level'
      )
    }
    setFilteredTeams(filteredData)
  }, [title])

  const handleDynamicData = (type: ITitle) => {
    setTitle(type)
  }

  return (
    <div>
      <CoverImage title="Result" />
      <HomeWrapper>
        <ResultTab handleDynamicData={handleDynamicData} />
        <ResultSection />
      </HomeWrapper>
    </div>
  )
}

export default ResultUi
