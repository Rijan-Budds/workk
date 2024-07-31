'use client'
import React, { useEffect, useState } from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Image from 'next/image'
import { Button } from '../../Atom/Button'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import { navLinks } from '@/common/constant/data'
import { usePathname } from 'next/navigation'

export const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setActiveDropdown(null)
  }, [pathname])

  const handleMouseEnter = (label: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setActiveDropdown(label)
  }

  const handleMouseLeave = (label: string) => {
    const id = setTimeout(() => {
      if (activeDropdown === label) {
        setActiveDropdown(null)
      }
    }, 200)
    setTimeoutId(id)
  }

  return (
    <div className="py-4 sticky top-0 bg-white z-[999] border-b-[1px] border-border hidden 2lg:block">
      <HomeWrapper className="!py-0">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-6">
            <Link href={'/'}>
              <Image
                width={56}
                height={56}
                src={'/home/logo.svg'}
                alt="School logo"
              />
            </Link>

            <div className="">
              <h2 className="font-poppins font-semibold text-[20px] leading-6 text-heading">
                Pawan Prakritischool.
              </h2>
              <p className="text-[14px] leading-4 font-workSans font-normal mt-1">
                Mahalaxmi Municipality-5, Tikathali, Lalitpur
              </p>
            </div>
          </div>
          <div className="flex gap-x-6 items-center">
            <div className="flex gap-x-6">
              {navLinks.map((links) => (
                <NavLinksUi
                  key={links.id}
                  links={links.title}
                  isDropdown={links.isDropDown}
                  link={links.link}
                  sublinks={links.sublink || undefined}
                  activeDropdown={activeDropdown}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
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
  link,
  sublinks,
  activeDropdown,
  handleMouseEnter,
  handleMouseLeave,
}: {
  links: string
  isDropdown: boolean
  link?: string
  sublinks?: { id: number; title: string; link: string }[]
  activeDropdown: string | null
  handleMouseEnter: (label: string) => void
  handleMouseLeave: (label: string) => void
}) => {
  return (
    <div
      className="flex items-center gap-x-2 group relative"
      onMouseEnter={() => isDropdown && handleMouseEnter(links)}
      onMouseLeave={() => isDropdown && handleMouseLeave(links)}
    >
      <div className="flex flex-col gap-y-1 ">
        <Link
          href={link || '/'}
          className="text-[14px] leading-4 font-workSans font-medium group-hover:text-primary transition-all duration-500 "
        >
          {links}
        </Link>
        <span className="w-1/3 h-[1px] bg-primary opacity-0 rounded group-hover:opacity-100 transition-all duration-500" />
      </div>
      {isDropdown && (
        <>
          <FiChevronDown className="w-[14px] mb-[3px] group-hover:text-primary transition-all duration-500" />
          {activeDropdown === links && (
            <div className="absolute top-full left-0 mt-1 bg-white shadow-md rounded-md p-2 z-50 w-[240px]">
              <div className="flex flex-col py-4 px-6 space-y-5">
                {sublinks?.map((sublink) => (
                  <Link
                    key={sublink.id}
                    href={sublink.link}
                    className="text-[14px] leading-4 font-workSans font-medium hover:text-primary transition-all duration-500 "
                  >
                    {sublink.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
