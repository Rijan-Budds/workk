import { cn } from '@/common/utils/utils'
import React, { LegacyRef } from 'react'

interface ICustomVideoProps {
  src: string
  width: string
  height: string
  className?: string
  videoRef?: LegacyRef<HTMLVideoElement> | undefined
}

export const CustomVideo = ({
  src,
  width,
  height,
  className,
  videoRef,
}: ICustomVideoProps) => {
  return (
    <video
      ref={videoRef}
      width={width}
      height={height}
      className={cn(className)}
      preload="auto"
      playsInline
      muted
      autoPlay
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
