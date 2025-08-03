'use client'

import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { TabAnimation } from '@/common/components/Molecules/TabAnimation'
import { NoDataFound } from '@/common/components/NoDataFound'
import { useState } from 'react'
import { GalleryCard } from './GalleryCard'
import { GalleryModal } from './GalleryModal'

type IType = 'photo' | 'video'

// Static image data - only photos now
const staticPhotos = [
  {
    id: 1,
    title: 'School Building',
    photo: { key: '/home/building.jpg' }
  },
  {
    id: 2,
    title: 'Classroom',
    photo: { key: '/home/classroom.jpg' }
  },
  {
    id: 3,
    title: 'Transportation',
    photo: { key: '/home/tran1.jpg' }
  },
  {
    id: 4,
    title: 'Library',
    photo: { key: '/home/lib1.jpg' }
  },
  {
    id: 5,
    title: 'Science Lab',
    photo: { key: '/home/lab1.jpg' }
  },
  {
    id: 6,
    title: 'Canteen',
    photo: { key: '/home/can1.jpg' }
  }
]

export const GallerySection = () => {
  const galleryTabs = [
    { title: 'Photos', key: 'photo' },
    { title: 'Videos', key: 'video' }
  ]

  const [galleryTab, setGalleryTab] = useState<string>(galleryTabs[0].key)
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [type, setType] = useState<IType>('photo')

  const handleTabClick = (title: string) => {
    const newType = title === 'photo' ? 'photo' : 'video'
    setType(newType)
    setGalleryTab(title)
  }

  const renderGalleryCardsUi = () => {
    if (type === 'video') {
      // Always show "No videos found" for video tab
      return <NoDataFound title="No gallery video found" />
    } else {
      return staticPhotos.length > 0 ? (
        staticPhotos.map((gallery, index) => (
          <GalleryCard
            key={gallery.id}
            gallery={gallery}
            setModalOpen={setModalOpen}
            setActiveImage={setActiveImage}
            index={index}
            type={'photo'}
          />
        ))
      ) : (
        <NoDataFound title="No gallery photo found" />
      )
    }
  }

  return (
    <>
      <CoverImage title="Gallery" list={[{ link: null, title: 'Gallery' }]} />
      <HomeWrapper>
        <div className="flex flex-col items-center gap-y-10 2lg:gap-y-14">
          <TabAnimation
            activeTab={galleryTab}
            handleDynamicData={handleTabClick}
            setActive={setGalleryTab}
            tabs={galleryTabs}
          />
          <div className="flex flex-row flex-wrap justify-center gap-6 md:gap-x-5 md:gap-y-6 2lg:gap-6">
            {renderGalleryCardsUi()}
          </div>
        </div>
      </HomeWrapper>
      {isModalOpen && type === 'photo' && (
        <CustomModal isOpen={isModalOpen}>
          <GalleryModal
            src={
              activeImage !== null
                ? staticPhotos[activeImage].photo.key
                : staticPhotos[0].photo.key
            }
            title={
              activeImage !== null
                ? staticPhotos[activeImage].title
                : staticPhotos[0].title
            }
            setModalOpen={setModalOpen}
            setActiveImage={setActiveImage}
            length={staticPhotos.length}
            showSwipe={staticPhotos.length > 1}
          />
        </CustomModal>
      )}
    </>
  )
}