'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { IoMenu } from 'react-icons/io5'
import { Sidebar } from './Sidebar'
import { SidebarContainer } from './SidebarContainer'

export const MobileNavHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <>
      <div className="p-4 bg-background flex justify-between items-center  py-4">
        <Image
          width={48}
          height={48}
          src={'/home/logo.svg'}
          alt="pawan prakriti logo"
        />
        <button onClick={() => setIsMenuOpen((prev) => !prev)}>
          <IoMenu className="size-6" />
        </button>
      </div>
      {isMenuOpen && (
        <Sidebar isOpen={isMenuOpen} setOpen={setIsMenuOpen}>
          <SidebarContainer />
        </Sidebar>
      )}
    </>
  )
}
