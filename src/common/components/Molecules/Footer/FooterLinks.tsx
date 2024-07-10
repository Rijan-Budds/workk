import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'

const FooterLinks = () => {
  return (
    <HomeWrapper className="py-14">
      <div className="flex justify-between">
        <div>
          <h1 className="font-poppins text-xl font-medium leading-[26px] text-white">
            Contact Information
          </h1>
          <div className="mt-6 space-y-4 text-base leading-4 text-white font-workSans font-light">
            <p>
              <span className="font-medium">Mobile </span> : +977-9843589375 /
              +977-9843201703
            </p>

            <p>
              <span className="font-medium">Telephone </span> : 01-5007259 /
              01-5007275
            </p>
            <p>
              <span className="font-medium">Email </span> :
              pawanprakriti2048@gmail.com
            </p>
            <p>
              <span className="font-medium">Time </span> : Sun - Fri 6:00 AM -
              5:00 PM. Sat Closed
            </p>
          </div>
        </div>
        <div>
          <h1 className="font-poppins text-xl font-medium leading-[26px] text-white">
            Quick Links
          </h1>
          <ul className="mt-6 space-y-4 text-base leading-4 text-white font-workSans font-light">
            <li>Introduction</li>
            <li>Our Success</li>
            <li>Our Team</li>
            <li>Gallery</li>
            <li>Admission</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h1 className="font-poppins text-xl font-medium leading-[26px] text-white">
            Plus Two
          </h1>
          <ul className="mt-6 space-y-4 text-base leading-4 text-white font-workSans font-light">
            <li>Management</li>
            <li>Humanities</li>
            <li>Education</li>
            <li>Law</li>
          </ul>
        </div>
        <div>
          <h1 className="font-poppins text-xl font-medium leading-[26px] text-white">
            Important Link
          </h1>
          <ul className="mt-6 space-y-4 text-base leading-4 text-white font-workSans font-light">
            <li>Tribhuvan University</li>
            <li>National Examinations Board</li>
            <li>Ministry of Education</li>
            <li>Office of the Controller of Examinations</li>
            <li>District Education Office, Kathmandu</li>
          </ul>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default FooterLinks
