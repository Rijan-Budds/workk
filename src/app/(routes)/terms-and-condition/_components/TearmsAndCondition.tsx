import { UseServerFetch } from '@/common/hook/useServerFetch'
import React from 'react'
import { ITermsResponse } from '../_interface/Terms'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { NoDataFound } from '@/common/components/NoDataFound'
import { format } from 'date-fns'

const TearmsAndCondition = async () => {
  const response: ITermsResponse | undefined = await UseServerFetch(
    '/api/v1/introduction'
  )

  const renderTermsUi = () => {
    if (response?.data) {
      return (
        <div>
          <div>
            Last Update:{' '}
            {response.data.updatedAt
              ? format(new Date(response.data.updatedAt), 'MMMM dd, yyyy') // Full month, day, and year
              : 'N/A'}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: response?.data.description }}
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
