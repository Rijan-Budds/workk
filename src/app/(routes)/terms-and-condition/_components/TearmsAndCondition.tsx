import { UseServerFetch } from '@/common/hook/useServerFetch'
import React from 'react'
import { ITermsResponse } from '../_interface/Terms'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { NoDataFound } from '@/common/components/NoDataFound'
import { format } from 'date-fns'
import './terms.css'

const TearmsAndCondition = async () => {
  const response: ITermsResponse | undefined = await UseServerFetch(
    '/api/v1/terms-and-conditions'
  )
  console.log(response?.data[0]?.createdAt)

  const renderTermsUi = () => {
    if (response?.data && response.data.length > 0) {
      const terms = response.data[0]
      return (
        <div>
          <div className="font-workSans font-normal text-[14px] leading-4 text-body">
            Last Update:{' '}
            {terms.updatedAt
              ? format(new Date(terms.updatedAt), 'MMMM dd, yyyy')
              : 'N/A'}
          </div>
          <div
            className="terms-content"
            dangerouslySetInnerHTML={{ __html: terms.description }}
          ></div>
        </div>
      )
    } else {
      return (
        <div>
          <NoDataFound title="No Terms and Condition Data Found" />
        </div>
      )
    }
  }

  return (
    <div>
      <CoverImage
        title="Terms and Conditions"
        list={[{ link: 'about', title: 'Terms and Condition' }]}
      />
      <HomeWrapper className="!px-[551px]">{renderTermsUi()}</HomeWrapper>
    </div>
  )
}

export default TearmsAndCondition
