import React, { useEffect, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { Sidebar } from './Sidebar'
import { navLinks } from '@/common/constant/data'
import { Button } from '../../Atom/Button'
import { NavHeaderLink } from './NavHeaderLink'
import { NavHeaderSocialMedia } from './NavHeader'
import { INavSubLink } from '@/common/interface/type'

export const SidebarContainer = () => {
  const [openDropDown, setOpenDropdown] = useState<boolean>(false)
  const [navDropdown, setNavDropDown] = useState<INavSubLink[] | []>([])

  useEffect(() => {
    if (!openDropDown) {
      setNavDropDown([])
    }
  }, [openDropDown])

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
            <span className="font-workSans font-medium text-[14px] leading-4 text-heading">
              {link.title}
            </span>
            {link.isDropDown && (
              <FiChevronDown className="w-[14px]   group-hover:text-primary transition-all duration-500 -rotate-90" />
            )}
          </button>
        ))}

        <Button className="w-fit mt-2">Contact Us</Button>
        <NavHeaderLink />
        <NavHeaderSocialMedia />
      </div>

      {openDropDown && (
        <Sidebar isOpen={openDropDown} setOpen={setOpenDropdown} isChild={true}>
          <div className="p-4 flex flex-col gap-y-6">
            {navDropdown.length &&
              navDropdown?.map((dropdown) => (
                <NavDropDown link={dropdown} key={dropdown.id} />
              ))}
          </div>
        </Sidebar>
      )}
    </div>
  )
}

const NavDropDown = ({ link }: { link: INavSubLink }) => {
  return (
    <span className="font-workSans font-medium text-[14px] leading-4 ">
      {link.title}
    </span>
  )
}
