import { CloseButton } from '@/common/components/Atom/CloseButton'
import { CustomVideo } from '@/common/components/Atom/CustomVideo'
import { cn } from '@/common/utils/utils'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { IconBaseProps } from 'react-icons'
import { BsArrowRight } from 'react-icons/bs'

type IDirection = 'next' | 'prev'
type IType = 'photo' | 'video'

export const GalleryModal = ({
  src,
  setModalOpen,
  setSrc,
  setActiveImage,
  length,
  type,
  showSwipe,
}: {
  src: string
  setModalOpen: Dispatch<SetStateAction<boolean>>
  setSrc: Dispatch<SetStateAction<string>>
  setActiveImage: Dispatch<SetStateAction<number | null>>
  length: number
  type: IType
  showSwipe: boolean
}) => {
  const handleSwipe = (direction: IDirection) => {
    if (direction === 'next') {
      setActiveImage((prev) => (prev! + 1) % length)
    } else {
      setActiveImage((prev) => (prev! - 1 + length) % length)
    }
  }

  return (
    <div className=" flex flex-col justify-center items-center 2lg:items-start   relative  bg-white rounded-xl overflow-hidden  2lg:w-[1085px]">
      <div className="flex justify-between w-full p-6 bg-background rounded-xl">
        <h2 className="font-poppins font-semibold text-[28px] leading-[36.4px]">
          A Student’s Life
        </h2>
        <CloseButton
          className="relative mb-2"
          handleClick={() => {
            setModalOpen(false)
            setSrc('')
            setActiveImage(null)
          }}
        />
      </div>
      <div className="w-full h-full bg-white p-6 rounded-xl  ">
        {type === 'photo' ? (
          <Image
            src={src}
            alt="zoom gallery image"
            width={1280}
            height={854}
            className="object-contain pointer-events-none selection:bg-transparent transition-all duration-1000  w-[90vw] max-h-[60vh] min-h-[20vh]   md:w-[80vw]   md:min-h-[60vh] md:max-h-[65vh]  2lg:min-h-[70vh] 2lg:max-h-[74vh] mx-auto"
          />
        ) : (
          <>
            <CustomVideo
              width="1280"
              height="853"
              src={src}
              className="w-full h-full object-cover rounded-[12px] 2lg:max-h-[70vh]"
              autoPlay={true}
              controls={true}
              fallbackThumb="/home/gallery-5.png"
            />
          </>
        )}
      </div>

      {showSwipe && (
        <>
          <SwipeArrow
            onClick={() => handleSwipe('next')}
            className="bg-white rounded-full size-[40px] p-2 right-12  cursor-pointer  absolute top-[60%] -translate-y-1/2 "
          />
          <SwipeArrow
            onClick={() => handleSwipe('prev')}
            className="bg-white rounded-full size-[40px] p-2 left-12  rotate-180 absolute top-[60%] -translate-y-1/2 cursor-pointer "
          />
        </>
      )}
    </div>
  )
}

export const SwipeArrow = ({
  className,
  ...props
}: { className?: string } & IconBaseProps) => {
  return (
    <BsArrowRight
      className={cn(
        'text-xl bg-red-500 absolute top-1/2 -translate-y-1/2 text-heading z-10',
        className
      )}
      {...props}
    />
  )
}
