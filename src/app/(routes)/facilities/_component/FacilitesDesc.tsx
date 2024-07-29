import { Button } from '@/common/components/Atom/Button'
import { MiniHeading } from '@/common/components/Atom/MiniHeading'
import { SectionHeading } from '@/common/components/Atom/SectionHeading'
import React from 'react'

export const FacilitesDesc = () => {
  return (
    <div className="flex flex-col items-start gap-y-2">
      <MiniHeading>Science Lab</MiniHeading>
      <SectionHeading>
        Exploring Science: Hands-On Learning in the Lab
      </SectionHeading>

      <p className="text-body font-workSans font-normal text-[16px] leading-[27.2px] mt-4">
        The school has three separate well–equipped laboratories for Physics,
        Chemistry and Biology subjects. These labs are designed to enhance
        students’ theoretical as well as practical knowledge of these science
        subjects through experiments.
        <br />
        <br />
        Students are guided by qualified and experienced staff while they
        conduct experiments in the labs.
      </p>

      <Button className="mt-8 w-full md:w-fit md:my-8">Apply Admission</Button>
    </div>
  )
}
