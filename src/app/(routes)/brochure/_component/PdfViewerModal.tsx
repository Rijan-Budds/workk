'use client'

import { cn } from '@/common/utils/utils'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Document, Page } from 'react-pdf'

import { pdfjs } from 'react-pdf'
import { PdfLoader } from './PdfLoader'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

type IScaleProps = 'plus' | 'minus'

export const PdfViewerModal = () => {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [onMouseOver, SetMouseOver] = useState<boolean>(false)
  const [scale, setScale] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  const handleZoom = (direction: IScaleProps) => {
    if (direction === 'plus') {
      setScale((prevScale) => Math.min(prevScale + 0.1, 3)) // Max zoom level of 3
    } else if (direction === 'minus') {
      setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)) // Min zoom level of 0.5
    }
  }

  return (
    <div className="w-[90vw] 2lg:max-w-[45vw] overflow-x-clip  p-6 bg-white">
      <div className="bg-background px-3 py-[17px] shadow z-10 relative flex items-center justify-between gap-x-3">
        <span className="text-heading text-[14px] leading-6 font-medium">
          assessment
        </span>
        <div className="flex gap-x-4 items-center">
          <div className="flex gap-x-2 items-center">
            <div className="bg-primary px-[15px] py-[5px] text-[14px] leading-6 font-workSans font-medium w-fit rounded text-white ">
              {pageNumber}
            </div>
            /
            <div className=" py-[5px] text-[14px] leading-6 font-workSans font-medium w-fit rounded text-black ">
              {numPages}
            </div>
          </div>
          {/* zoom ui */}
          <div className="flex items-center gap-x-4 font-workSans selection:bg-none ">
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
          <Image
            src={'/downloads/rotate-icon.svg'}
            width={20}
            height={20}
            alt="rotate icon"
            className="ml-6"
          />
        </div>

        {/* right container */}
        <div className="flex gap-x-4">
          <Image
            src={'/downloads/download.svg'}
            width={20}
            height={20}
            alt="rotate icon"
          />
        </div>
      </div>

      <div
        onMouseEnter={() => SetMouseOver(true)}
        onMouseLeave={() => SetMouseOver(false)}
        onMouseOver={() => SetMouseOver(true)}
        className=" p-6  w-full max-h-[80vh] overflow-y-scroll flex flex-col items-center relative rounded pt-6 bg-grayBackground z-0"
      >
        <Document
          file={'/downloads/sample-1.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
          className={''}
          renderMode="canvas"
          loading={<PdfLoader />}
        >
          <Page
            pageNumber={pageNumber}
            scale={scale}
            className={'text-center'}
          />
        </Document>
        <NavigatePdfUi
          pageNumber={pageNumber}
          totalPage={numPages}
          isMouseOver={onMouseOver}
          setPageNumber={setPageNumber}
        />
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
        className="size-3 cursor-pointer"
      />
      <p className="font-workSans">
        {pageNumber} of {totalPage}
      </p>
      <IoIosArrowForward
        onClick={handleNextPage}
        className="size-3 cursor-pointer"
      />
    </div>
  )
}
