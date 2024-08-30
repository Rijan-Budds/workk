'use client'
import React, { useState } from 'react'
import ResultCard from './ResultCard'
import { IResultData } from '../_interface/Reslut'
import { cn } from '@/lib/utils'

type ICategory = 'All' | 'Management' | 'Humanities'
type ITitle = 'Plus Two' | 'School Level'

const ResultSection = ({
  teams,
  title,
  handleCategoryChange,
}: {
  teams: IResultData[]
  title: ITitle
  handleCategoryChange: (category: ICategory) => void
}) => {
  const categories: ICategory[] = ['Management', 'Humanities']
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<ICategory>('Management')

  const handleCategoryClick = (category: ICategory) => {
    setActiveCategory(category)
    handleCategoryChange(category)
    setIsDropdownOpen(false)
  }
  return (
    <div className="md:bg-background p-4 mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-heading font-poppins font-medium text-xl leading-6 hidden md:block">
          Result of {title}
        </h1>
        <div className="relative w-full md:w-auto">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="font-workSans font-normal text-[18px] leading-6 px-4 py-2 bg-white text-black rounded-[8px] h-[48px] w-full md:w-[382px] text-left flex justify-between items-center shadow border-[#E7EEF8]"
          >
            {activeCategory}
            <svg
              className={cn('w-6 h-6 transition-transform', {
                'transform rotate-180': isDropdownOpen,
              })}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-md rounded-[10px] mt-2 w-full z-10 border-b-[#E7EEF8]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={cn(
                    'font-workSans font-normal text-[18px] leading-6 px-4 py-2 w-full text-left bg-transparent text-black hover:bg-primary hover:text-white rounded-[10px] transition-all duration-300',
                    {
                      'bg-primary text-white': activeCategory === category,
                    }
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
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
