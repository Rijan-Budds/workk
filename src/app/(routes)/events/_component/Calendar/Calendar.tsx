'use client'
import { cn } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'
import { useEventStore } from '../../store/EventStore'
import useNepaliCalendar from '../../hooks/useNepaliCalendar'
import { filteredPeriod } from '@/common/constant/eventFilterConstants'
import { NepaliDateTime } from '../../plugins/nepaliDateTime'
import CalendarHeader from '../CalendarHeader/CalendarHeader'
import CalendarTable from '../CalendarTable/CalendarTable'
import { getTableTdClassName } from '../../utils/classUtils'
import { Events } from '../Events/Events'
import { Day, NepaliDate } from '../../types/NepaliDates'
import { Language } from '../../types/Language'
import { Button } from '@/common/components/Atom/Button'

export interface CalendarProps {
  className?: string
  selecteDate?: NepaliDate
  openYearSelector?: boolean
  lang?: Language
  onDateSelect?: (date: NepaliDate) => void
}

const CalendarEvent = ({
  className,
  openYearSelector = false,
  selecteDate,
  lang,
  ...rest
}: CalendarProps) => {
  const [showYearSelector, setShowYearSelector] = useState(false)
  const { nepaliEvents } = useEventStore()

  // reference to the event component
  const eventsRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setShowYearSelector(() => openYearSelector)
  }, [openYearSelector])

  // Custom Hooks
  const {
    currentLocalisedDate,
    days,
    years,
    months,
    selectedDate,
    selectedLocalisedDates,
    selectedMonth,
    selectedYear,
    setSelectedDate,
    setSelectedMonth,
    setSelectedYear,
  } = useNepaliCalendar({ lang })
  const [nextMonth, setNextMonth] = useState<number>(selectedMonth.value)
  const [nextYear, setNextYear] = useState<number>(selectedYear.value)
  const [prevMonth, setPrevMonth] = useState<number>(selectedMonth.value)
  const [prevYear, setPrevYear] = useState<number>(selectedMonth.value)
  const [activeTab, setActiveTab] = useState(filteredPeriod[0].id)
  const [disabledTab, setDisabledTab] = useState<number[]>([])
  const [highlightedEventIndex, setHighlightedEventsIndex] = useState<
    number | null
  >(null)

  const currentDate = new NepaliDateTime()

  const onSelectYear = (year: number) => {
    const selectedYear = years.find((y) => y.value === year)

    if (!selectedYear) {
      return
    }
    setSelectedYear(() => selectedYear)
    setShowYearSelector(() => false)
  }

  const handleOnPrevClick = () => {
    if (!selectedYear || !selectedMonth) {
      return
    }

    let prevMonth = selectedMonth.value - 1
    let prevYear = selectedYear.value

    if (prevMonth < 0) {
      prevMonth = months.length - 1
      prevYear -= 1

      const foundPrevYear = years.find((y) => y.value === prevYear)
      if (!foundPrevYear) return

      setSelectedYear(foundPrevYear)
    }

    if (prevMonth < 0) {
      return
    }

    const foundPrevYear = years.find((y) => y.value === prevYear)
    if (!foundPrevYear) {
      return
    }

    const foundPrevMonth = months.find((m) => m.value === prevMonth)
    if (!foundPrevMonth) {
      return
    }

    setSelectedMonth(() => foundPrevMonth)
    setSelectedYear(() => foundPrevYear)
    setPrevMonth(foundPrevMonth.value - 1)
    setPrevYear(foundPrevYear.value - 1)

    if (currentDate.getMonth() == foundPrevMonth.value) {
      setActiveTab(1)
      setDisabledTab([])
    } else {
      setActiveTab(3)
      setDisabledTab([1, 2])
    }
  }

  const handleOnNextClick = () => {
    if (!selectedYear || !selectedMonth) return

    let nextMonth = selectedMonth.value + 1
    let nextYear = selectedYear.value

    if (nextMonth > months.length - 1) {
      nextMonth = 0
      nextYear += 1
    }

    const foundNextMonth = months.find((m) => m.value === nextMonth)
    if (!foundNextMonth) return

    const foundNextYear = years.find((y) => y.value === nextYear)
    if (!foundNextYear) return

    setSelectedMonth(foundNextMonth)
    setSelectedYear(foundNextYear)
    setNextYear(foundNextYear.value + 1)
    setNextMonth(foundNextMonth.value + 1)

    if (currentDate.getMonth() == foundNextMonth.value) {
      setActiveTab(1)
      setDisabledTab([])
    } else {
      setActiveTab(3)
      setDisabledTab([1, 2])
    }
  }

  const handleDateClick = (date: Day) => {
    setSelectedDate(date)
    const filteredEvents = nepaliEvents.filter((event) => {
      const [eventYear, eventMonth] = event.dateInBS.split('-').map(Number)
      return (
        eventYear === Number(selectedYear?.label) &&
        eventMonth === selectedMonth?.value + 1
      )
    })

    // Find the index in the filtered list
    const eventIndex = filteredEvents.findIndex((event) => {
      const [eventYear, eventMonth, eventDay] = event.dateInBS
        .split('-')
        .map(Number)
      return (
        eventYear === Number(selectedYear?.label) &&
        eventMonth === selectedMonth?.value + 1 &&
        eventDay === Number(date.label)
      )
    })

    if (eventIndex !== -1 && eventsRef.current) {
      const eventElement = eventsRef.current.children[eventIndex]
      if (eventElement) {
        eventElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        setHighlightedEventsIndex(eventIndex)
      }
    }
  }

  useEffect(() => {
    if (!selecteDate) {
      return undefined
    }

    const foundYear = years.find((y) => y.value == selecteDate.year.value)

    if (!foundYear) {
      return undefined
    }

    const foundMonth = months.find(
      (m) => m.value == selecteDate.month.value - 1
    )

    if (!foundMonth) {
      return undefined
    }

    setSelectedYear(() => foundYear)
    setSelectedMonth(() => foundMonth)
    setSelectedDate(() => selecteDate.date)
  }, [
    months,
    years,
    selecteDate,
    setSelectedDate,
    setSelectedYear,
    setSelectedMonth,
  ])

  return (
    <div className={cn('2lg:flex justify-between ', className)}>
      <div
        className={cn('flex flex-col p-2 md:p-4 rounded-md w-full l mt-8')}
        {...rest}
      >
        <CalendarHeader
          handleOnNextClick={handleOnNextClick}
          handleOnPrevClick={handleOnPrevClick}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          setShowYearSelector={setShowYearSelector}
          showYearSelector={showYearSelector}
        />
        {!showYearSelector && (
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-7 py-4 px-6 mt-2 bg-background gap-8 rounded-full justify-items-start text-sm md:text-base font-medium">
              {days.map((day) => (
                <span className="font-poppins" key={day.value}>
                  {day.label}
                </span>
              ))}
            </div>
            <CalendarTable
              selectedLocalisedDates={selectedLocalisedDates}
              selectedDate={selectedDate}
              currentLocalisedDate={currentLocalisedDate}
              handleDateClick={handleDateClick}
              getTableTdClassName={getTableTdClassName}
            />
          </div>
        )}

        {showYearSelector && (
          <div className="max-h-96 overflow-y-auto pdf-scrollbar">
            <div className="grid grid-cols-4 gap-2 justify-items-center mt-4 max-h-xs">
              {years.map((year) => (
                <Button
                  variant={'pilled'}
                  key={year.value}
                  onClick={() => onSelectYear(year.value)}
                  className={cn('', {
                    'border border-primary': currentLocalisedDate?.id.includes(
                      year.value.toString()
                    ),
                    'bg-primary hover:bg-primary text-white':
                      selectedYear?.label.includes(year.value.toString()),
                  })}
                >
                  <span>{year.label}</span>
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* For Events */}
      <div className="flex flex-col gap-2 mt-8 w-full 2lg:w-[45%]">
        <Events
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          disabledTabs={disabledTab}
          highlightedEventIndex={highlightedEventIndex}
          nextYear={nextYear}
          nextMonth={nextMonth}
          prevMonth={prevMonth}
          prevYear={prevYear}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          ref={eventsRef}
        />
      </div>
    </div>
  )
}

export default CalendarEvent
