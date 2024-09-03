'use client'

import React, { useEffect } from 'react'
import { Admission } from './_component/Admission'

const ApplyPage = () => {
  useEffect(() => {
    const handleBeforeReload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      return ''
    }

    window.addEventListener('beforeunload', handleBeforeReload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeReload)
    }
  }, [])
  return (
    <div>
      <Admission />
    </div>
  )
}

export default ApplyPage
