'use client'
import React, { useEffect, useState } from 'react'
import ResultSection from './ResultSection'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { resultTab } from '../_constants/data'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import { TabAnimation } from '@/common/components/Molecules/TabAnimation'
import { IResult, IResultApiResponse } from '../_interface/result'

const ResultUi = () => {
  const [activeTab, setActiveTab] = useState<string>(resultTab[0].key)
  const [resultData, setResultData] = useState<IResult[] | undefined>(undefined)

  const [program, setProgram] = useState<string>('all')

  const fetchResultData = async () => {
    try {
      const resultData: IResultApiResponse | undefined = await UseServerFetch(
        `/api/v1/result?type=${activeTab}${
          program !== 'all' ? `&program=${program}` : ''
        }`
      )
      if (resultData) {
        setResultData(resultData.data)
      }
    } catch (error) {
      console.error('error fetching result data', error)
    }
  }

  useEffect(() => {
    fetchResultData()
  }, [activeTab, program])

  const handleDynamicData = (key: string) => {
    setProgram('all')
    setActiveTab(key)
  }

  return (
    <div>
      <CoverImage
        title="Result"
        list={[{ link: '', title: 'Result' }]}
        key={'result'}
      />
      <HomeWrapper>
        <div className="flex flex-col justify-center items-center">
          <TabAnimation
            activeTab={activeTab}
            handleDynamicData={handleDynamicData}
            setActive={setActiveTab}
            tabs={resultTab}
          />
          <div className="w-full">
            {resultData && (
              <ResultSection
                program={program}
                results={resultData}
                active={activeTab}
                setProgram={setProgram}
              />
            )}
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}

export default ResultUi
