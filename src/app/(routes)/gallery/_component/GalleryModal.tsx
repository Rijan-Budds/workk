import { CustomVideo } from '@/common/components/Atom/CustomVideo'
import { Button } from '@/common/components/ui/button'
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
  setSrc?: Dispatch<SetStateAction<string>>
  setActiveImage?: Dispatch<SetStateAction<number | null>>
  length: number
  type: IType
  showSwipe: boolean
}) => {
  const handleSwipe = (direction: IDirection) => {
    if (direction === 'next' && setActiveImage) {
      setActiveImage((prev) => (prev! + 1) % length)
    } else if (setActiveImage) {
      setActiveImage((prev) => (prev! - 1 + length) % length)
    }
  }

  const handleClose = () => {
    if (setSrc && setActiveImage) {
      setSrc('')
      setActiveImage(null)
    }
    setModalOpen(false)
  }

  return (
    <div className=" flex flex-col justify-center items-center 2lg:items-start relative rounded-xl overflow-hidden 2lg:w-full lg:h-[100vh]">
      <div className="flex justify-end w-full p-6 pb-0 2lg:pb-6 rounded-xl">
        <div
          onClick={handleClose}
          className="absolute mb-2 lg:right-10 top-16 lg:top-10"
        >
          <Button variant="secondary">Close</Button>
        </div>
      </div>
      <div className="w-[100vw] p-6 rounded-xl relative">
        {type === 'photo' ? (
          <Image
            src={src}
            alt="zoom gallery image"
            width={1280}
            height={854}
            className="object-contain pointer-events-none selection:bg-transparent transition-all duration-1000 mx-auto w-[90vw] h-[100vh] lg:h-[610px] rounded-xl"
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
            className="bg-white rounded-full size-[40px] p-2 right-2 2lg:right-12 2xl_md:right-[169px] cursor-pointer  absolute top-[53%] 2lg:top-[50%] -translate-y-1/2 transition-all duration-1000 "
          />
          <SwipeArrow
            onClick={() => handleSwipe('prev')}
            className="bg-white rounded-full size-[40px] p-2 left-2 2lg:left-12 2xl_md:left-[169px]  rotate-180 absolute top-[53%] 2lg:top-[50%] -translate-y-1/2 cursor-pointer transition-all duration-1000"
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
