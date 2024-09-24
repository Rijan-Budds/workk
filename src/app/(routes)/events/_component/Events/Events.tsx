'use state'
import { cn } from '@/lib/utils'

import Image from 'next/image'
import React, {
  Dispatch,
  ForwardedRef,
  forwardRef,
  SetStateAction,
} from 'react'
import EventDialog from '../EventDialog/EventsDialog'

import EventsTab from '../ui/EventsTab'
import { Month, Year } from '../../types/NepaliDates'
import { useEventStore } from '../../store/EventStore'
import { NepaliDateTime } from '../../plugins/nepaliDateTime'
import { filteredPeriod } from '@/common/constant/eventFilterConstants'
import { formattedDate } from '../../utils/formattedDate'
import { getEventStyles } from '../../utils/classUtils'

type EventsProps = {
  nextMonth: number
  nextYear: number
  prevMonth: number
  prevYear: number
  activeTab: number
  disabledTabs: number[]
  highlightedEventIndex: number | null
  setActiveTab: Dispatch<SetStateAction<number>>
  ref: ForwardedRef<HTMLDivElement>
  selectedMonth: Month
  selectedYear: Year
}

export const Events = forwardRef<HTMLDivElement, EventsProps>(function Events(
  {
    activeTab,
    setActiveTab,
    disabledTabs = [],
    highlightedEventIndex,
    selectedMonth,
    selectedYear,
  },
  ref
) {
  const { nepaliEvents, isLoading } = useEventStore()

  function getTodayDate() {
    const currentDate = new NepaliDateTime()
    return `${currentDate.getYear()}-${currentDate.getMonth()}-${currentDate.getDate()}`
  }
  // function getDayEn() {
  //   const dayEn = new NepaliDateTime()
  //   return dayEn.
  // }
  const todayDate = getTodayDate()
  const [todayYear, todayMonth, todayDay] = todayDate.split('-').map(Number)
  const improvedTodayDate = `${todayYear}-${todayMonth + 1}-${todayDay}`
  const improvedTommorowDay = `${todayYear}-${todayMonth + 1}-${todayDay + 1}`

  function filteredEvents() {
    switch (activeTab) {
      case 1:
        return nepaliEvents.filter((event) => {
          const [year, month, day] = event.dateInBS.split('-').map(Number)
          return (
            year === todayYear &&
            month === todayMonth + 1 &&
            day === todayDay &&
            year == selectedYear.value &&
            month == selectedMonth.value + 1
          )
        })

      case 2:
        return nepaliEvents.filter((event) => {
          const [year, month, day] = event.dateInBS.split('-').map(Number)
          if (month == todayMonth + 1) {
            const currentDate = new NepaliDateTime()
            const getDay = currentDate.getDay()
            const startDayDiff = getDay - 1
            const endDayDiff = 6 - startDayDiff
            const weekStartDay = currentDate.getDay() - startDayDiff
            const weekEndDay = currentDate.getDay() + endDayDiff
            return (
              day >= weekStartDay &&
              day <= weekEndDay &&
              year == selectedYear.value &&
              month == selectedMonth.value + 1
            )
          }
        })

      case 3:
        return nepaliEvents.filter((event) => {
          const [year, month] = event.dateInBS.split('-').map(Number)
          return (
            year === selectedYear.value && month === selectedMonth.value + 1
          )
        })
    }
  }

  return (
    <>
      <div className="flex items-center justify-center md:items-end md:justify-end 2lg:items-end 2lg:justify-end">
        <EventsTab
          eventPeriods={filteredPeriod}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          disabledTabs={disabledTabs}
        />
      </div>

      <div
        ref={ref}
        className={cn(
          'flex flex-col items-start  px-6 py-6  w-full  bg-background h-[calc(100vh-20rem)] md:h-[calc(100vh-10rem)]  2lg:h-[calc(100vh-5rem)] overflow-y-auto cursor-pointer pdf-scrollbar'
        )}
      >
        {isLoading ? (
          <>
            {[...Array(6)].map((_, idx) => (
              <ul
                key={idx}
                className={cn(
                  'flex justify-between rounded-md h-10 w-full px-4 py-14 mb-4 border-l-8 bg-gray-100 border-gray-300 animate-pulse '
                )}
              >
                <div className="w-full space-y-4">
                  <li className="w-1/2 h-2  rounded-md bg-gray-300  animate-pulse "></li>
                  <li className="w-1/4 h-2  rounded-md bg-gray-300  animate-pulse "></li>
                </div>
                <li className="w-4 h-4  rounded-full bg-gray-300  animate-pulse "></li>
              </ul>
            ))}
          </>
        ) : filteredEvents()?.length === 0 ? (
          <div className="flex flex-col items-center mx-auto space-y-4 mt-24">
            <Image
              src="/calendar/noEvents/union.png"
              alt="no event"
              width={54}
              height={54}
            />
            <div className="flex flex-col items-center text-xs gap-1">
              <p className="font-medium">No Event</p>
              <p>No Event this month</p>
            </div>
          </div>
        ) : (
          filteredEvents()?.map((event, index) => {
            let renderedDay = false

            return (
              <>
                <EventDialog
                  key={index}
                  event={event}
                  index={index}
                  dialogTriggerContent={event.eventDetail.map(
                    (eventItem, idx) => {
                      return (
                        <>
                          {formattedDate(event.dateInBS) ===
                            improvedTodayDate &&
                            !renderedDay && (
                              <>
                                <div className="flex items-start text-lg font-medium text-heading mb-2">
                                  <p>Today</p>
                                </div>
                                {(renderedDay = true)}{' '}
                              </>
                            )}
                          {formattedDate(event.dateInBS) ==
                            improvedTodayDate && (
                            <ul
                              key={idx}
                              className={cn(
                                'flex justify-between  rounded-md border-l-8 py-4 px-6 mb-4',
                                getEventStyles(eventItem.eventType),
                                highlightedEventIndex === index &&
                                  'border-2 border-primary'
                              )}
                            >
                              <div className="flex flex-col gap-2 items-start">
                                <React.Fragment key={idx}>
                                  <li
                                    className={cn(
                                      'text-lg font-medium mt-2',
                                      !event.isSchoolEvent && 'text-error'
                                    )}
                                  >
                                    {eventItem.title}
                                  </li>
                                  <li className="text-xs text-gray-500">
                                    {eventItem.fromTime}
                                  </li>
                                </React.Fragment>
                              </div>
                              <div>
                                <li className="text-gray-700">
                                  {event.dateInBS.split('-')[2]}
                                </li>
                              </div>
                            </ul>
                          )}

                          {formattedDate(event.dateInBS) ===
                            improvedTommorowDay &&
                            !renderedDay && (
                              <>
                                <div className="flex items-start text-lg font-medium text-heading mb-2">
                                  <p>Tomorrow</p>
                                </div>
                                {(renderedDay = true)}{' '}
                              </>
                            )}

                          {formattedDate(event.dateInBS) ==
                            improvedTommorowDay && (
                            <ul
                              key={idx}
                              className={cn(
                                'flex justify-between rounded-md border-l-8 py-4 px-6 mb-4',
                                getEventStyles(eventItem.eventType),
                                highlightedEventIndex === index &&
                                  'border-2 border-primary'
                              )}
                            >
                              <div className="flex flex-col gap-2 items-start">
                                <React.Fragment key={idx}>
                                  <li
                                    className={cn(
                                      'text-lg font-medium mt-2',
                                      !event.isSchoolEvent && 'text-error'
                                    )}
                                  >
                                    {eventItem.title}
                                  </li>
                                  <li className="text-xs text-gray-500">
                                    {eventItem.fromTime}
                                  </li>
                                  <li className="text-xs text-gray-500">
                                    {eventItem.toTime}
                                  </li>
                                </React.Fragment>
                              </div>
                              <div>
                                <li className="text-gray-700">
                                  {event.dateInBS.split('-')[2]}
                                </li>
                              </div>
                            </ul>
                          )}

                          {formattedDate(event.dateInBS) !==
                            improvedTodayDate &&
                            formattedDate(event.dateInBS) !==
                              improvedTommorowDay &&
                            !renderedDay && (
                              <>
                                <div className="flex items-start text-lg font-medium text-heading mb-2">
                                  {event.dateInBS.split('-')[2]}th{' '}
                                  {selectedMonth.label}
                                </div>
                                {(renderedDay = true)}{' '}
                              </>
                            )}

                          {formattedDate(event.dateInBS) !==
                            improvedTodayDate &&
                            formattedDate(event.dateInBS) !==
                              improvedTommorowDay && (
                              <ul
                                key={idx}
                                className={cn(
                                  'flex justify-between rounded-md border-l-8 py-4 px-6 mb-4',
                                  getEventStyles(eventItem.eventType),
                                  highlightedEventIndex === index &&
                                    'border-2 border-primary'
                                )}
                              >
                                <div className="flex flex-col gap-2 items-start">
                                  <React.Fragment key={idx}>
                                    <li
                                      className={cn(
                                        'text-lg font-medium mt-2',
                                        !event.isSchoolEvent && 'text-red-500'
                                      )}
                                    >
                                      {eventItem.title}
                                    </li>

                                    {eventItem.allDay == 'true' ? (
                                      <li>All Day</li>
                                    ) : (
                                      <li className="text-sm text-gray-500">
                                        {eventItem.fromTime} -{' '}
                                        {eventItem.toTime}
                                      </li>
                                    )}
                                  </React.Fragment>
                                </div>
                                <div>
                                  <li className="text-gray-700">
                                    {event.dateInBS.split('-')[2]}
                                  </li>
                                </div>
                              </ul>
                            )}
                        </>
                      )
                    }
                  )}
                />
              </>
            )
          })
        )}
      </div>
    </>
  )
})
