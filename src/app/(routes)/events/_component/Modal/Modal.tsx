'use client'
import { cn } from '@/lib/utils'
import { gsap } from 'gsap'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

type ModalContainerProps = {
  isActive: boolean
  onClose: () => void
  children: React.ReactNode
  className: string
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  onClose,
  children,
  className,
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const modalElement = modalRef.current
    const overlayElement = overlayRef.current

    if (modalElement && overlayElement) {
      gsap.fromTo(
        overlayElement,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: 'power2.out' }
      )

      gsap.fromTo(
        modalElement,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration: 0.5,
          ease: 'power4.out',
          delay: 0.2,
        }
      )
    }
  }, [])

  return (
    <div>
      <div
        ref={overlayRef}
        className="fixed top-0 left-0 w-full h-full bg-black/40 z-[999]"
        onClick={onClose}
      ></div>

      <div
        ref={modalRef}
        id="modal-container"
        className={cn(
          'fixed top-[50%] left-[50%]  transform -translate-x-1/2 -translate-y-1/2 rounded-lg z-[1000] bg-white',
          className
        )}
      >
        <Image
          className="absolute top-5 right-5"
          src="/calendar/close.svg"
          alt="close"
          width={24}
          height={24}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}

export default ModalContainer
