'use client'

import React, { useEffect, useState } from 'react'
import { GalleryTab } from './GalleryTab'
import { HomeWrapper } from '@/common/components/Atom/HomeWrapper'
import { GalleryCard } from './GalleryCard'
import { CustomModal } from '@/common/components/Molecules/Modal'
import { GalleryModal } from './GalleryModal'
import { CoverImage } from '@/common/components/Molecules/CoverImage'
import { usePathname } from 'next/navigation'
import { useBreadCrumbPath } from '@/common/hook/useBreadCrumbPath'
import { VideoModal } from './VideoModal'
import { UseServerFetch } from '@/common/hook/useServerFetch'
import {
  IGalleryPhotoItem,
  IGalleryPhotoResponse,
  IGalleryVideoItem,
  IGalleryVideoResponse,
} from '../interface/galleryType'
import { Pagination } from '@/common/components/Pagination'
import { NoDataFound } from '@/common/components/NoDataFound'

type IType = 'photo' | 'video'

export const GallerySection = () => {
  const pathname = usePathname()
  const getPaths = useBreadCrumbPath(pathname)

  const [galleryPhoto, setGalleryPhoto] = useState<
    IGalleryPhotoItem[] | undefined
  >(undefined)
  const [galleryVideo, setGalleryVideo] = useState<
    IGalleryVideoItem[] | undefined
  >(undefined)

  const [currentGalleryPhotoPage, setCurrentGalleryPhotoPage] =
    useState<number>(1)

  const [currentGalleryVideoPage, setCurrentGalleryVideoPage] =
    useState<number>(1)

  const [totalCountPhoto, setTotalCountPhoto] = useState<number | undefined>(
    undefined
  )
  const [totalCountVideo, setTotalCountVideo] = useState<number | undefined>(
    undefined
  )
  const pageSize = 6
  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  const [activeImage, setActiveImage] = useState<number | null>(null)
  const [type, setType] = useState<IType>('photo')

  const handleDynamicData = (type: IType) => {
    setType(type)
    setCurrentGalleryPhotoPage(1)
    setCurrentGalleryVideoPage(1)
  }

  const showPaginationPhoto = () => {
    if (
      totalCountPhoto &&
      galleryPhoto &&
      galleryPhoto.length < totalCountPhoto
    ) {
      return true
    } else {
      return false
    }
  }

  const showPaginationVideo = () => {
    if (
      totalCountVideo &&
      galleryVideo &&
      galleryVideo.length < totalCountVideo
    ) {
      return true
    } else {
      return false
    }
  }

  const isPaginationVideo = showPaginationVideo()

  const isPaginationPhoto = showPaginationPhoto()

  const renderGalleryCardsUi = () => {
    if (type === 'video') {
      if (galleryVideo && galleryVideo?.length > 0) {
        return (
          galleryVideo &&
          galleryVideo.map((gallery, index) => {
            return (
              <GalleryCard
                key={gallery.id}
                gallery={gallery}
                setModalOpen={setModalOpen}
                setActiveImage={setActiveImage}
                index={index}
                type={'video'}
              />
            )
          })
        )
      } else {
        return <NoDataFound title="No gallery video found" />
      }
    } else {
      if (galleryPhoto && galleryPhoto?.length > 0) {
        return (
          galleryPhoto &&
          galleryPhoto.map((gallery, index) => {
            return (
              <GalleryCard
                key={gallery.id}
                gallery={gallery}
                setModalOpen={setModalOpen}
                setActiveImage={setActiveImage}
                index={index}
                type={'photo'}
              />
            )
          })
        )
      } else {
        return <NoDataFound title="No gallery photo found" />
      }
    }
  }

  const fetchGalleryData = async () => {
    try {
      const galleryData: IGalleryPhotoResponse | undefined =
        await UseServerFetch(
          `/api/v1/gallery/photos?page=${currentGalleryPhotoPage}&pageSize=${pageSize}`
        )
      setGalleryPhoto(galleryData?.data)
      setTotalCountPhoto(galleryData?.totalCount)
    } catch (error) {
      console.error('error fetching gallery photo', error)
    }
  }

  const fetchGalleryVideoData = async () => {
    try {
      const galleryData: IGalleryVideoResponse | undefined =
        await UseServerFetch(
          `/api/v1/gallery/videos?page=${currentGalleryVideoPage}&pageSize=${pageSize}`
        )
      setGalleryVideo(galleryData?.data)
      setTotalCountVideo(galleryData?.totalCount)
    } catch (error) {
      console.error('error fetching gallery video', error)
    }
  }

  useEffect(() => {
    if (type === 'video') {
      fetchGalleryVideoData()
    } else {
      fetchGalleryData()
    }
  }, [type, currentGalleryPhotoPage, currentGalleryVideoPage])

  return (
    <>
      <CoverImage title="Gallery" list={getPaths} />
      <HomeWrapper>
        <div className="flex flex-col items-center gap-y-10 2lg:gap-y-14">
          <GalleryTab handleDynamicData={handleDynamicData} />
          <div className="flex flex-row flex-wrap justify-center  gap-6 md:gap-x-5 md:gap-y-6 2lg:gap-6 ">
            {renderGalleryCardsUi()}
          </div>
          {type === 'video' && !isPaginationVideo ? (
            <Pagination
              currentPage={currentGalleryVideoPage}
              pageSize={pageSize}
              totalCount={totalCountVideo!}
              siblingCount={0}
              onPageChange={(page: string | number) =>
                setCurrentGalleryVideoPage(page as number)
              }
            />
          ) : (
            isPaginationPhoto && (
              <Pagination
                currentPage={currentGalleryPhotoPage}
                pageSize={pageSize}
                totalCount={totalCountPhoto!}
                siblingCount={0}
                onPageChange={(page: string | number) =>
                  setCurrentGalleryPhotoPage(page as number)
                }
              />
            )
          )}
        </div>
      </HomeWrapper>
      {isModalOpen && (
        <CustomModal isOpen={isModalOpen}>
          {type === 'photo' ? (
            <GalleryModal
              src={
                galleryPhoto && galleryPhoto.length > 0 && activeImage !== null
                  ? galleryPhoto[activeImage].photo.key
                  : galleryPhoto && galleryPhoto.length > 0
                  ? galleryPhoto[0].photo.key
                  : undefined
              }
              setModalOpen={setModalOpen}
              setActiveImage={setActiveImage}
              length={galleryPhoto && galleryPhoto.length}
              showSwipe={galleryPhoto && galleryPhoto.length > 1 ? true : false}
            />
          ) : (
            <VideoModal
              src={
                galleryVideo && galleryVideo.length > 0 && activeImage !== null
                  ? galleryVideo[activeImage].video.key
                  : galleryVideo && galleryVideo.length > 0
                  ? galleryVideo[0].video.key
                  : undefined
              }
              setModalOpen={setModalOpen}
              setActiveImage={setActiveImage}
              length={galleryVideo && galleryVideo.length}
              type={type}
              showSwipe={galleryVideo && galleryVideo.length > 1 ? true : false}
            />
          )}
        </CustomModal>
      )}
    </>
  )
}
