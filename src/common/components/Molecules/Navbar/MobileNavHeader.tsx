'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { Sidebar } from './Sidebar'
import { SidebarContainer } from './SidebarContainer'
import Link from 'next/link'

export const MobileNavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      <div className="p-4 bg-background flex justify-between items-center py-4">
        <div className="flex items-center gap-x-3">
          <Link href={'/'}>
            <Image
              width={56}
              height={56}
              src={'/home/logo.svg'}
              alt="School logo"
            />
          </Link>

          <h2 className="font-poppins font-medium text-[18px] leading-6 text-heading">
            Pawan Prakriti <br /> School.
          </h2>
        </div>

        <button onClick={() => setIsMenuOpen((prev) => !prev)}>
          <IoMenu className="size-6" />
        </button>
      </div>
      {isMenuOpen && (
        <Sidebar isOpen={isMenuOpen} setOpen={setIsMenuOpen}>
          <SidebarContainer setOpenMainSidebar={setIsMenuOpen} />
        </Sidebar>
      )}
    </>
  )
}
