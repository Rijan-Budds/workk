import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Sidebar } from './Sidebar'
import { navLinks } from '@/common/constant/data'
import { Button } from '../../Atom/Button'
import { NavHeaderLink } from './NavHeaderLink'
import { NavHeaderSocialMedia } from './NavHeader'
import { INavLink, INavSubLink } from '@/common/interface/type'
import Link from 'next/link'

export const SidebarContainer = ({
  setOpenMainSidebar,
}: {
  setOpenMainSidebar: Dispatch<SetStateAction<boolean>>
}) => {
  const [openDropDown, setOpenDropdown] = useState<boolean>(false)
  const [navDropdown, setNavDropDown] = useState<INavSubLink[] | []>([])

  useEffect(() => {
    if (!openDropDown) {
      setNavDropDown([])
    }
  }, [openDropDown])

  const handleLinkClick = (
    link: INavLink,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (link.isDropDown) {
      event.preventDefault()
      setNavDropDown(link.sublink || [])
      setOpenDropdown(true)
    } else {
      setOpenMainSidebar(false)
    }
  }

  return (
    <div className="mt-8  w-full">
      <div className="flex flex-col gap-y-6  p-4">
        {navLinks.map((link) => (
          <button
            key={link.id}
            className="flex flex-row items-center gap-x-1"
            onClick={() => {
              if (link.sublink) {
                setNavDropDown(link.sublink)
                setOpenDropdown(true)
              }
            }}
          >
            <Link
              href={link.link || '/'} // Provide a default fallback
              onClick={(event) => handleLinkClick(link, event)}
            >
              <span className="font-workSans font-medium text-[16px] leading-4 text-heading">
                {link.title}
              </span>
            </Link>

            {link.isDropDown && (
              <FiChevronDown className="w-[14px]   group-hover:text-primary transition-all duration-500 -rotate-90" />
            )}
          </button>
        ))}

        <Button className="w-fit mt-2">Contact Us</Button>
        <NavHeaderLink setOpenSidebar={setOpenMainSidebar} />
        <NavHeaderSocialMedia />
      </div>

      {openDropDown && (
        <Sidebar isOpen={openDropDown} setOpen={setOpenDropdown} isChild={true}>
          <div className="p-4 flex flex-col gap-y-6">
            {navDropdown.length &&
              navDropdown?.map((dropdown) => (
                <NavDropDown
                  link={dropdown}
                  key={dropdown.id}
                  setClose={setOpenMainSidebar}
                />
              ))}
          </div>
        </Sidebar>
      )}
    </div>
  )
}

const NavDropDown = ({
  link,
  setClose,
}: {
  link: INavSubLink
  setClose: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <Link href={link.link || '/'} onClick={() => setClose(false)}>
      <span className="font-workSans font-medium text-[14px] leading-4">
        {link.title}
      </span>
    </Link>
  )
}
