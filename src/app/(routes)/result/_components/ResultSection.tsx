'use client'
import React, { useEffect, useState } from 'react'
import ResultCard from './ResultCard'
import { IResultData } from '../_interface/Reslut'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'
import { ICategory, ITitle } from '../_constants/data'

const ResultSection = ({
  teams,
  title,
  categories,
  handleCategoryChange,
}: {
  teams: IResultData[]
  title: ITitle
  categories: ICategory[]
  handleCategoryChange: (category: ICategory) => void
}) => {
  const [activeCategory, setActiveCategory] = useState<ICategory>('All')

  useEffect(() => {
    setActiveCategory('All')
  }, [title])

  const handleCategoryClick = (category: ICategory) => {
    setActiveCategory(category)
    handleCategoryChange(category)
  }

  return (
    <div className="md:bg-background p-4 mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-heading font-poppins font-medium text-xl leading-6 hidden md:block">
          Result of {title}
        </h1>
        <div className="relative w-full md:max-w-[380px]">
          <CustomDropdown
            list={categories.map((category) => ({
              value: category,
              title: category,
            }))}
            placeHolder="Select Category"
            label=""
            field="category"
            error=""
            isError={false}
            isRequired={false}
            value={activeCategory}
            setFieldValue={(field, value) =>
              handleCategoryClick(value as ICategory)
            }
          />
        </div>
      </div>
      <div className="grid 2lg:grid-cols-3 gap-6 mt-10">
        {teams.map((result) => (
          <ResultCard data={result} key={result.id} />
        ))}
      </div>
    </div>
  )
}

export default ResultSection
