'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { VideoHeader, VideoHeaderMobile } from './VideoHeader'
import { CustomVideo } from '@/common/components/Atom/CustomVideo'
import { GalleryModal } from '@/app/(routes)/gallery/_component/GalleryModal'
import { CustomModal } from '@/common/components/Molecules/Modal'

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isOpen, setModalOpen] = useState<boolean>(false)

  const handlePlayPause = (): void => {
    if (videoRef && videoRef?.current!.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current!.pause()
      setIsPlaying(false)
    }
  }

  return (
    <>
      <div className="relative mt-[97px]">
        <CustomVideo
          height="423"
          width="819"
          className="rounded-[12px] z-[5] w-full 2lg:w-[819px]"
          videoRef={videoRef}
          src="/home/video/school-promo.mov"
          fallbackThumb="/home/video-thumb.png"
        />
        <button
          onClick={handlePlayPause}
          className="absolute bottom-[2.5rem] right-[1.5rem] bg-white  rounded-full  size-[32px] flex justify-center items-center"
        >
          {!isPlaying ? (
            <Image
              width={10}
              height={11}
              alt="pause icon"
              src={'/home/pause.svg'}
            />
          ) : (
            <Image
              width={10}
              height={11}
              alt="play icon"
              src={'/home/play.svg'}
            />
          )}
        </button>

        <button
          onClick={() => setModalOpen(true)}
          className="absolute bottom-[2.5rem] right-[4.5rem] bg-white text-white p-2 rounded-full  size-[32px] flex justify-center items-center"
        >
          <Image
            width={15}
            height={12}
            alt="fullscreen icon"
            src={'/home/fullscreen.svg'}
          />
        </button>
        <div className="absolute -top-[3.5rem]  2lg:-top-[5.25rem] right-[1.75rem]">
          <VideoHeader />
          <VideoHeaderMobile />
        </div>
      </div>

      {isOpen && (
        <CustomModal isOpen={isOpen}>
          <GalleryModal
            length={1}
            setModalOpen={setModalOpen}
            showSwipe={false}
            src="/home/video/school-promo.mov"
            type="video"
          />
        </CustomModal>
      )}
    </>
  )
}
