'use client'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { FilterPeriod } from '../../types/events'

type EventsTabProps = {
  eventPeriods: FilterPeriod
  activeTab: number
  setActiveTab: React.Dispatch<React.SetStateAction<number>>
  disabledTabs: number[]
}

const EventsTab: React.FC<EventsTabProps> = ({
  eventPeriods,
  activeTab,
  setActiveTab,
  disabledTabs,
}) => {
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const activeTabElement = containerRef.current.children[
      activeTab
    ] as HTMLDivElement
    if (activeTabElement) {
      const tabRect = activeTabElement.getBoundingClientRect()
      const containerRect = containerRef.current.getBoundingClientRect()

      setSliderStyle({
        width: tabRect.width,
        left: tabRect.left - containerRect.left,
      })
    }
  }, [activeTab, eventPeriods])

  function handleTabClick(id: number) {
    if (disabledTabs.includes(id)) return
    setActiveTab(id)
  }
  return (
    <div
      className={cn(
        'relative flex items-center gap-8 md:gap-8 h-10 list-none  md:w-1/2 2lg:w-2/3 bg-background rounded-full p-4'
      )}
      ref={containerRef}
    >
      {/* smoothly slide gareko */}
      <div
        className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-300 will-change-transform ease-linear"
        style={{ width: sliderStyle.width, left: sliderStyle.left }}
      ></div>
      {eventPeriods.map((period) => (
        <div
          className={cn(
            'flex-1 cursor-pointer text-black text-center py-2 px-4 md:p-2 rounded-full transition-trasform duration-500 ease-in-out transform',
            activeTab === period.id
              ? `text-white md:font-medium `
              : '  hover:opacity-100 hover:scale-100',
            disabledTabs.includes(period.id) && 'opacity-30 cursor-not-allowed'
          )}
          key={period.id}
          onClick={() => handleTabClick(period.id)}
        >
          {period.name}
        </div>
      ))}
    </div>
  )
}

export default EventsTab
