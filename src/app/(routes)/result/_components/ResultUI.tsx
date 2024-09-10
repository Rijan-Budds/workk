'use client'
import React, { useEffect, useState } from 'react'
import ResultTab from './ResultTab'
import ResultSection from './ResultSection'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { IResultData } from '../_interface/Reslut'
import {
  categoriesByTitle,
  ICategory,
  ITitle,
  ResultData,
} from '../_constants/data'

const getCategoriesByTitle = (title: ITitle): ICategory[] => {
  const result = categoriesByTitle.find((item) => item.title === title)
  return result ? (result.categories as ICategory[]) : []
}

const ResultUi = () => {
  const [title, setTitle] = useState<ITitle>('Plus Two')
  const [category, setCategory] = useState<ICategory>('All')
  const [filteredTeams, setFilteredTeams] = useState<IResultData[]>([]) // eslint-disable-line

  useEffect(() => {
    // Filter data by title
    let filteredData = ResultData.filter((result) => result.type === title)

    // Further filter data by category if not 'All'
    if (category !== 'All') {
      filteredData = filteredData.filter(
        (result) => result.category === category
      )
    }

    setFilteredTeams(filteredData)
  }, [title, category])

  const handleDynamicData = (type: ITitle) => {
    setTitle(type)
    setCategory('All') // Reset category to 'All' when switching tabs
  }

  const handleCategoryChange = (selectedCategory: ICategory) => {
    setCategory(selectedCategory)
  }
  return (
    <div>
      <CoverImage
        title="Result"
        list={[{ link: '', title: 'Result' }]}
        key={title}
      />
      <HomeWrapper>
        <div className="">
          <ResultTab handleDynamicData={handleDynamicData} />
          <ResultSection
            teams={filteredTeams}
            title={title}
            categories={getCategoriesByTitle(title)}
            handleCategoryChange={handleCategoryChange}
          />
        </div>
      </HomeWrapper>
    </div>
  )
}

export default ResultUi
