import React from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Image from 'next/image'
import { Button } from '../../Atom/Button'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import { navLinks } from '@/common/constant/data'

export const Navbar = () => {
  return (
    <div className="py-4   sticky top-0 bg-white z-[999] border-b-[1px] border-border hidden 2lg:block">
      <HomeWrapper className="py-0">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-6">
            <Image
              width={56}
              height={56}
              src={'/home/logo.svg'}
              alt="School logo"
            />
            <div className="">
              <h2 className="font-poppins font-semibold text-[20px] leading-6 text-heading">
                Pawan Prakritischool.
              </h2>
              <p className="text-[14px] leading-4 font-workSans font-normal  mt-1">
                Mahalaxmi Municipality-5, Tikathali, Lalitpur
              </p>
            </div>
          </div>
          <div className="flex gap-x-6  items-center">
            {' '}
            <div className="flex gap-x-6">
              {navLinks.map((links) => (
                <NavLinksUi
                  links={links.title}
                  key={links.id}
                  isDropdown={links.isDropDown}
                />
              ))}
            </div>
            <Button variant={'default'} className="h-fit">
              Contact Us
            </Button>
          </div>
        </div>
      </HomeWrapper>
    </div>
  )
}

const NavLinksUi = ({
  links,
  isDropdown,
}: {
  links: string
  isDropdown: boolean
}) => {
  return (
    <div className="flex items-center gap-x-2 group ">
      <div className="flex flex-col gap-y-1 ">
        <Link
          href={'#'}
          className="text-[14px] leading-4 font-workSans font-medium group-hover:text-primary transition-all duration-500 "
        >
          {links}
        </Link>
        <span className="w-1/3 h-[1px] bg-primary opacity-0 rounded  group-hover:opacity-100 transition-all duration-500" />
      </div>

      {isDropdown && (
        <FiChevronDown className="w-[14px] mb-[3px]  group-hover:text-primary transition-all duration-500" />
      )}
    </div>
  )
}
