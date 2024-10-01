'use client'

import { useGSAP } from '@gsap/react'
import React, { Dispatch, SetStateAction, useRef } from 'react'
import gsap from 'gsap'
import { Flip } from 'gsap/Flip'
import { cn } from '@/common/utils/utils'

gsap.registerPlugin(Flip)
type Tab = {
  title: string
  key: string
}

interface TabSwitchProps {
  tabs: Tab[]
  handleDynamicData: (key: string) => void
  className?: string
  setActive: Dispatch<SetStateAction<string>>
  isFieldChange?: boolean
  activeTab: string
}

export const TabAnimation = ({
  tabs,
  handleDynamicData,
  className = '',
  activeTab,
}: TabSwitchProps) => {
  const activeBarRef = useRef<HTMLDivElement | null>(null)
  const tabRefs = useRef<(HTMLDivElement | null)[]>([])

  const getActiveIndex = (tabs: Tab[], activeTab: string) => {
    return tabs.findIndex((tab) => tab.key === activeTab)
  }

  const activeIndex = getActiveIndex(tabs, activeTab)

  useGSAP(
    () => {
      const handleTabClick = (index: number) => {
        if (!activeBarRef.current || !tabRefs.current[index]) return

        const state = Flip.getState(activeBarRef.current)

        tabRefs.current[index]?.appendChild(activeBarRef.current)

        Flip.from(state, {
          absolute: true,
          scale: true,
          duration: 0.6,
          ease: 'back.inOut',
        })
      }
      handleTabClick(activeIndex)
    },
    { dependencies: [activeTab] }
  )

  return (
    <div
      className={cn(
        'tabs bg-primaryLighter flex  items-center p-2 rounded-[100px] shadow ',
        className
      )}
    >
      {tabs &&
        tabs.map((tab, index) => (
          <div
            onClick={() => handleDynamicData(tab.key)}
            key={tab.key}
            ref={(el) => {
              tabRefs.current[index] = el
            }}
            className={`tab-item py-4 flex justify-center items-center relative  px-6 cursor-pointer ${
              activeTab === tab.key ? 'active' : ''
            }`}
          >
            <span
              className={cn(
                'text-black transition-colors duration-1000 z-10 font-workSans font-medium text-[18px] leading-6',
                {
                  'text-white transition-colors duration-1000 ':
                    activeTab === tab.key,
                }
              )}
            >
              {tab.title}
            </span>
            {index === 0 && (
              <div
                ref={activeBarRef}
                className="tab-active-bar  h-[56px] left-0 right-0 top-1/2 -translate-y-1/2 bg-primary absolute rounded-[100px] z-0"
              />
            )}
          </div>
        ))}
    </div>
  )
}
