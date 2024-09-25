'use client'

import React, { useEffect } from 'react'
import CalendarEvent from './_component/Calendar/Calendar'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { useEventStore } from './store/EventStore'

const EventPage = () => {
  const { fetchEvents } = useEventStore()

  useEffect(() => {
    fetchEvents()
  }, [])

  return (
    <HomeWrapper>
      <CalendarEvent />
    </HomeWrapper>
  )
}

export default EventPage
