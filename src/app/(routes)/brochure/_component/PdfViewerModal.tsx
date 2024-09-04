'use client'

import { cn } from '@/common/utils/utils'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Document, Page, pdfjs } from 'react-pdf'
import { PdfLoader } from './PdfLoader'
import { CloseButton } from '@/common/components/Atom/CloseButton'

type IScaleProps = 'plus' | 'minus'

export const PdfViewerModal = ({
  setOpen,
  src,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>
  src: string | null
}) => {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [onMouseOver, SetMouseOver] = useState<boolean>(false)
  const [scale, setScale] = useState<number>(1)
  // const [rotate, setRotate] = useState<number>(0)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  const handleZoom = (direction: IScaleProps) => {
    if (direction === 'plus') {
      setScale((prevScale) => Math.min(prevScale + 0.1, 2))
    } else if (direction === 'minus') {
      setScale((prevScale) => Math.max(prevScale - 0.1, 0.5))
    }
  }

  // const handleRotation = () => {
  //   setRotate((prev) => Math.min(prev + 90))
  // }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/downloads/threejs.pdf'
    link.download = 'threejs.pdf'
    link.click()
  }

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth

      if (width < 441) {
        setScale(0.4)
      } else if (width < 510) {
        setScale(0.5)
      } else if (width < 600) {
        setScale(0.6)
      } else if (width < 710) {
        setScale(0.7) // Default scale
      } else if (width < 800) {
        setScale(0.8)
      } else {
        setScale(1)
      }
    }

    // Set the initial scale
    handleResize()

    // Attach the event listener
    window.addEventListener('resize', handleResize)

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="w-[90vw]  2lg:max-w-[45vw] overflow-x-clip  p-6 bg-white 2lg:min-h-[80vh]">
      <CloseButton handleClick={() => setOpen(false)} />
      <div className="bg-background px-3 py-[17px] shadow z-10 relative flex items-center justify-between gap-x-3">
        <span className="text-heading text-[14px] leading-6 font-medium">
          Assessment
        </span>
        <div className="flex gap-x-4 items-center">
          <div className="flex gap-x-2 items-center">
            {numPages && (
              <>
                <div className="bg-primary px-[15px] py-[5px] text-[14px] leading-6 font-workSans font-medium w-fit rounded text-white ">
                  {pageNumber}
                </div>
                /
                <div className=" py-[5px] text-[14px] leading-6 font-workSans font-medium w-fit rounded text-black ">
                  {numPages}
                </div>
              </>
            )}
          </div>
          {/* zoom ui */}
          <div className="items-center gap-x-4 font-workSans selection:bg-none hidden 2lg:flex ">
            <span
              onClick={() => handleZoom('minus')}
              className="font-workSans font-medium text-[16px] leading-[20px] text-heading size-8 cursor-pointer  flex justify-center items-center"
            >
              -
            </span>
            <div className="bg-primary rounded-[4px] font-medium leading-6 text-[14px] text-white px-[15px] py-[5px]">
              {Math.round(scale * 100)}%
            </div>
            <span
              onClick={() => handleZoom('plus')}
              className="font-workSans font-medium text-[16px] leading-[20px] text-heading cursor-pointer  size-8 flex justify-center items-center"
            >
              +
            </span>
          </div>
          {/* <Image
            onClick={handleRotation}
            src={'/downloads/rotate-icon.svg'}
            width={20}
            height={20}
            alt="rotate icon"
            className="ml-6"
          /> */}
        </div>

        {/* right container */}
        <div className="flex gap-x-4">
          {/* download pdf icon */}
          <Image
            onClick={handleDownload}
            src={'/downloads/download.svg'}
            width={20}
            height={20}
            alt="pdf icon"
            className="cursor-pointer"
          />
        </div>
      </div>

      <div
        onMouseEnter={() => SetMouseOver(true)}
        onMouseLeave={() => SetMouseOver(false)}
        onMouseOver={() => SetMouseOver(true)}
        className="p-1 lg:p-6  w-full h-[68vh] lg:h-[80vh] overflow-y-scroll flex  pdf-scrollbar flex-col items-center relative rounded pt-6 bg-grayBackground"
      >
        {src && (
          <>
            <Document
              file={src}
              onLoadSuccess={onDocumentLoadSuccess}
              className={'w-fit h-fit '}
              renderMode="canvas"
              loading={<PdfLoader />}
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                className={'text-center'}
                loading={<PdfLoader />}
              />
            </Document>
            <NavigatePdfUi
              pageNumber={pageNumber}
              totalPage={numPages ? numPages : 1}
              isMouseOver={onMouseOver}
              setPageNumber={setPageNumber}
            />
          </>
        )}
      </div>
    </div>
  )
}

const NavigatePdfUi = ({
  pageNumber,
  totalPage,
  setPageNumber,
  isMouseOver,
}: {
  pageNumber: number
  totalPage: number | undefined
  setPageNumber: Dispatch<SetStateAction<number>>
  isMouseOver: boolean
}) => {
  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1)
    }
  }

  const handleNextPage = () => {
    if (pageNumber < totalPage!) {
      setPageNumber((prev) => prev + 1)
    }
  }
  return (
    <div
      className={cn(
        'flex items-center gap-x-4 opacity-100 2lg:opacity-0 w-fit  -bottom-2 bg-white/80 backdrop-blur-xl shadow-xl rounded p-2 sticky transition-all duration-300 2lg:-bottom-12 selection:bg-transparent',
        {
          '2lg:opacity-100 2lg:bottom-0': isMouseOver,
        }
      )}
    >
      <IoIosArrowBack
        onClick={handlePreviousPage}
        className=" size-4 lg:size-3 cursor-pointer"
      />
      <p className="font-workSans">
        {pageNumber} of {totalPage}
      </p>
      <IoIosArrowForward
        onClick={handleNextPage}
        className=" size-4 lg:size-3 cursor-pointer"
      />
    </div>
  )
}
