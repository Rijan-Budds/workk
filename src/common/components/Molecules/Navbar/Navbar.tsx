'use client'
import React, { useEffect, useState } from 'react'
import { HomeWrapper } from '../../Atom/HomeWrapper'
import Image from 'next/image'
import { Button } from '../../Atom/Button'
import Link from 'next/link'
import { FiChevronDown } from 'react-icons/fi'
import { navLinks } from '@/common/constant/data'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useNavLinks } from '@/common/hook/useNavLinks'

export const Navbar = () => {
  const pathname = usePathname()
  const { facilites } = useNavLinks()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [activeSublink, setActiveSublink] = useState<number | null>(null)
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setActiveDropdown(null)
    setActiveSublink(null)
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
        setActiveSublink(null)
      }
    }, 200)
    setTimeoutId(id)
  }

  const handleSublinkClick = (id: number) => {
    setActiveSublink(activeSublink === id ? null : id)
  }

  return (
    <div className="py-4 sticky top-0 bg-white/85 backdrop-blur-xl z-[999]  hidden 2lg:block shadow-sm ">
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
                  sublinks={
                    links.title === 'Our facilities'
                      ? facilites
                      : links.sublink || undefined
                  }
                  activeDropdown={activeDropdown}
                  activeSublink={activeSublink}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  handleSublinkClick={handleSublinkClick}
                  pathname={pathname}
                />
              ))}
            </div>
            <Link href="/contact">
              <Button variant={'default'} className="h-fit">
                Contact Us
              </Button>
            </Link>
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
  activeSublink,
  handleMouseEnter,
  handleMouseLeave,
  handleSublinkClick,
  pathname,
}: {
  links: string
  isDropdown: boolean
  link?: string
  sublinks?: {
    id: number
    title: string
    link: string
    subsublink?: { id: number; title: string; link: string }[]
  }[]
  activeDropdown: string | null
  activeSublink: number | null
  handleMouseEnter: (label: string) => void
  handleMouseLeave: (label: string) => void
  handleSublinkClick: (id: number) => void
  pathname: string
}) => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    dropdown: boolean
  ) => {
    if (dropdown) {
      e.preventDefault()
    }
  }
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
          onClick={(e) => handleLinkClick(e, isDropdown && !!sublinks)}
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
                  <div key={sublink.id} className="relative group">
                    <Link href={sublink.link}>
                      <div
                        className={cn(
                          'text-[14px] leading-4 font-workSans font-medium hover:text-primary transition-all duration-500 cursor-pointer',
                          pathname === sublink.link
                            ? 'text-primary'
                            : 'text-black'
                        )}
                        onClick={() => handleSublinkClick(sublink.id)}
                      >
                        {sublink.title}
                        {sublink.subsublink && (
                          <FiChevronDown className="ml-2 w-[14px] mb-[3px] inline-block group-hover:text-primary transition-all duration-500 -rotate-90" />
                        )}
                      </div>
                    </Link>
                    {sublink.subsublink && activeSublink === sublink.id && (
                      <div className="absolute top-[0px] left-[205px] mt-0 bg-white shadow-md rounded-md p-2 z-50 w-[240px]">
                        <div className="flex flex-col py-2 px-4 space-y-7">
                          {sublink.subsublink.map((subsublink) => (
                            <Link
                              key={subsublink.id}
                              href={subsublink.link}
                              className="text-[14px] leading-4 font-workSans font-medium hover:text-primary transition-all duration-500"
                            >
                              {subsublink.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}
