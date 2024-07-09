'use client'

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { VideoHeader } from './VideoHeader'
import { CustomVideo } from '@/common/components/Atom/CustomVideo'

export const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const handlePlayPause = (): void => {
    if (videoRef && videoRef?.current!.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current!.pause()
      setIsPlaying(false)
    }
  }

  const handleFullscreen = () => {
    if (videoRef && videoRef.current) {
      videoRef.current!.requestFullscreen()
      // @ts-expect-error handle for cross browser
    } else if (videoRef.current!.mozRequestFullScreen) {
      // @ts-expect-error handle for cross browser
      videoRef.current!.mozRequestFullScreen()
      // @ts-expect-error handle for cross browser
    } else if (videoRef.current!.webkitRequestFullscreen) {
      // @ts-expect-error handle for cross browser
      videoRef.current!.webkitRequestFullscreen()
      // @ts-expect-error handle for cross browser
    } else if (videoRef.current.msRequestFullscreen) {
      // @ts-expect-error handle for cross browser
      videoRef.current!.msRequestFullscreen()
    }
  }
  return (
    <div className="relative mt-[97px]">
      <CustomVideo
        height="423"
        width="819"
        className="rounded-x z-[5]"
        videoRef={videoRef}
        src="/home/video/school-promo.mov"
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
        onClick={handleFullscreen}
        className="absolute bottom-[2.5rem] right-[4.5rem] bg-white text-white p-2 rounded-full  size-[32px] flex justify-center items-center"
      >
        <Image
          width={15}
          height={12}
          alt="fullscreen icon"
          src={'/home/fullscreen.svg'}
        />
      </button>
      <div className="absolute -top-[5.25rem] right-[1.75rem]">
        <VideoHeader />
      </div>
    </div>
  )
}
