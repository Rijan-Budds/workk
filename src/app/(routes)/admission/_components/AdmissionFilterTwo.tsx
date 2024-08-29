import React from 'react'
import { FiFileText } from 'react-icons/fi'

export const Filter = [
  {
    id: 1,
    title: 'Management',
  },
  {
    id: 2,
    title: 'Humanities',
  },
  {
    id: 3,
    title: 'Education',
  },
  {
    id: 4,
    title: 'Pre-School (Kindergarden)',
  },
  {
    id: 5,
    title: 'Primary School (One - Five)',
  },
  {
    id: 6,
    title: 'Basic Level (Six - Eight)',
  },
  {
    id: 7,
    title: 'Senior Level (Nine - Ten)',
  },
]

const AdmissionFilterTwo = () => {
  return (
    <div className="flex flex-col bg-background rounded-xl">
      {Filter.map((filter, index) => (
        <div
          key={index}
          className="flex justify-between p-6 font-workSans text-base leading-4 font-medium hover:bg-secondary rounded-xl text-heading hover:text-white"
        >
          <h2>{filter.title}</h2>
          <FiFileText />
        </div>
      ))}
    </div>
  )
}

export default AdmissionFilterTwo
