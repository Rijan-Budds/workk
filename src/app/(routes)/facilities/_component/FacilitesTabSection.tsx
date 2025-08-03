'use client'

import { useState } from 'react'
import { ActiveImage } from './ActiveImage'
import { FacilitesDesc } from './FacilitesDesc'
import { SwipeableCards } from './SwipeableCards'

// Static data for all facilities
const STATIC_FACILITIES = {
  'science-lab': {
    facilityTitle: "Science Facilities",
    articleTitle: "Modern Science Laboratory",
    description: `
      <p>Our state-of-the-art science laboratory is equipped with the latest equipment for physics, chemistry, and biology experiments.</p>
      <p>Students get hands-on experience with modern scientific instruments under expert supervision.</p>
    `,
    images: {
      key: [
        '/home/lab1.jpg',
        '/home/lab2.jpg',
        '/home/lab3.jpg'
      ]
    }
  },
  'library': {
    facilityTitle: "Library Services",
    articleTitle: "School Learning Resource Center",
    description: `
      <p>Our spacious library contains over 15,000 books including textbooks, reference materials, and fiction.</p>
      <p>Students have access to reading areas, computer stations, and quiet study zones.</p>
    `,
    images: {
      key: [
        '/home/lib1.jpg',
        '/home/lib2.jpg',
        '/home/lib3.jpg'
      ]
    }
  },
  'transportation': {
    facilityTitle: "Transport Services",
    articleTitle: "School Transportation System",
    description: `
      <p>We operate a fleet of modern buses with GPS tracking that cover all major routes in the city.</p>
      <p>All vehicles are maintained to highest safety standards with trained drivers and attendants.</p>
    `,
    images: {
      key: [
        '/home/tran1.jpg',
        '/home/tran2.jpg',
        '/home/tran3.jpg'
      ]
    }
  },
  'school-canteen': {
    facilityTitle: "Food Services",
    articleTitle: "School Canteen & Cafeteria",
    description: `
      <p>Our canteen serves nutritious meals prepared in a clean, modern kitchen facility.</p>
      <p>We offer balanced meals that meet dietary requirements of growing students.</p>
    `,
    images: {
      key: [
        '/home/can1.jpg',
        '/home/can2.jpg',
        '/home/can3.jpg'
      ]
    }
  }
}

type FacilitySlug = keyof typeof STATIC_FACILITIES

export const FacilitesTabSection = ({ slug }: { slug: FacilitySlug }) => {
  // Get the static data for the requested facility
  const facility = STATIC_FACILITIES[slug]
  
  // Set first image as active by default
  const [activeSrc, setActiveSrc] = useState<string | null>(
    facility?.images?.key[0] || null
  )

  return (
    <div className="flex justify-around 2xl:justify-between flex-col gap-y-6 gap-x-6 md:flex-row lg:gap-x-10 2lg:gap-x-12 xl:gap-x-10 2xl_md:gap-x-6 2xl:gap-x-3 2xl_lg:gap-x-3 3xl:gap-x-1 items-start">
      {/* Main featured image */}
      {activeSrc && <ActiveImage src={activeSrc} />}
      
      <div className="flex flex-col md:flex-col-reverse gap-y-3 2lg:max-w-[503px]">
        {/* Image thumbnails carousel */}
        {facility?.images && (
          <SwipeableCards 
            setActiveSrc={setActiveSrc} 
            data={facility.images} 
          />
        )}
        
        {/* Facility description */}
        {facility && (
          <FacilitesDesc detail={{
            facilityTitle: facility.facilityTitle,
            articleTitle: facility.articleTitle,
            description: facility.description,
            // Add any other required properties from IFacilityData
          }} />
        )}
      </div>
    </div>
  )
}