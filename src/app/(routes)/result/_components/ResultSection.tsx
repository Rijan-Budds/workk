'use client'
import React, { Dispatch, SetStateAction } from 'react'
import ResultCard from './ResultCard'
import { IResult } from '../_interface/result'
import { CustomDropdown } from '@/common/components/Molecules/CustomDropdown'
import {
  ICategory,
  PlusTwoDropdownList,
  SchoolLevelDropdownList,
} from '../_constants/data'
import { NoDataFound } from '@/common/components/NoDataFound'

const ResultSection = ({
  results,
  active,
  setProgram,
  program,
}: {
  results: IResult[]
  active: string
  setProgram: Dispatch<SetStateAction<string>>
  program: string
}) => {
  const handleCategoryClick = (category: ICategory) => {
    setProgram(category)
  }

  const returnDropDownList = () => {
    if (active === 'PLUS_TWO') {
      return PlusTwoDropdownList
    } else {
      return SchoolLevelDropdownList
    }
  }

  return (
    <div className="md:bg-background p-4 mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-heading font-poppins font-medium text-xl leading-6 hidden md:block">
          Result of {active === 'PLUS_TWO' ? 'Plus Two' : 'School'}
        </h1>
        <div className="relative w-full md:max-w-[380px]">
          <CustomDropdown
            list={returnDropDownList()}
            placeHolder="Select Category"
            label=""
            field="category"
            error=""
            isError={false}
            isRequired={false}
            isBoolean={false}
            value={program}
            setFieldValue={(field, value) =>
              handleCategoryClick(value as ICategory)
            }
          />
        </div>
      </div>
      <div className=" mt-10">
        {results && results.length ? (
          <div className="grid 2lg:grid-cols-3 gap-6">
            {results.map((result) => (
              <ResultCard data={result} key={result.id} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center w-full ">
            <NoDataFound title="No Data found" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ResultSection
