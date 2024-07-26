import { CloseButton } from '@/common/components/Atom/CloseButton'
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
}: {
  src: string
  setModalOpen: Dispatch<SetStateAction<boolean>>
  setSrc: Dispatch<SetStateAction<string>>
  setActiveImage: Dispatch<SetStateAction<number | null>>
  length: number
  type: IType
}) => {
  const handleSwipe = (direction: IDirection) => {
    if (direction === 'next') {
      setActiveImage((prev) => (prev! + 1) % length)
    } else {
      setActiveImage((prev) => (prev! - 1 + length) % length)
    }
  }

  return (
    <div className="2lg:w-[80vw] 2lg:h-[90vh] flex justify-center items-center 2lg:items-start  relative  ">
      {type === 'photo' ? (
        <Image
          src={src}
          alt="zoom gallery image"
          width={1280}
          height={854}
          className="object-contain pointer-events-none selection:bg-transparent transition-all duration-1000  w-[343px] h-[229px] border-white border-2 md:border-transparent rounded-[12px] md:w-[700px] md:h-[467px] 2lg:w-[1280px] 2lg:h-[90vh] z-10"
        />
      ) : (
        <></>
      )}

      <CloseButton
        className="absolute -top-3 -right-4 2lg:right-16  2xl_lg:right-32 z-10"
        handleClick={() => {
          setModalOpen(false)
          setSrc('')
          setActiveImage(null)
        }}
      />

      <SwipeArrow
        onClick={() => handleSwipe('next')}
        className="bg-white rounded-full size-[40px] p-2 -right-4 2xl_lg:right-4  cursor-pointer  "
      />
      <SwipeArrow
        onClick={() => handleSwipe('prev')}
        className="bg-white rounded-full size-[40px] p-2 -left-4 2xl_lg:left-4  rotate-180 cursor-pointer "
      />
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
