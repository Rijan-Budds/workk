'use client'

import { cn } from '@/common/utils/utils'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Document, Page } from 'react-pdf'

import { pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url
).toString()

export const PdfViewerModal = () => {
  const [numPages, setNumPages] = useState<number>()
  const [pageNumber, setPageNumber] = useState<number>(1)
  const [onMouseOver, SetMouseOver] = useState<boolean>(false)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages)
  }

  return (
    <div className="w-[90vw] 2lg:max-w-[45vw] overflow-x-clip  p-6 bg-white">
      <div className="bg-background px-3 py-[17px] shadow z-10 relative flex items-center gap-x-3">
        <span className="text-heading text-[14px] leading-6 font-medium">
          assessment
        </span>
        <div className="bg-primary px-[15px] py-[5px] text-[14px] leading-6 font-workSans font-medium w-fit rounded text-white ">
          {pageNumber}
        </div>
        /
        <div className=" py-[5px] text-[14px] leading-6 font-workSans font-medium w-fit rounded text-black ">
          {numPages}
        </div>
      </div>

      <div
        onMouseEnter={() => SetMouseOver(true)}
        onMouseLeave={() => SetMouseOver(false)}
        onMouseOver={() => SetMouseOver(true)}
        className=" p-6  w-full max-h-[80vh] overflow-y-scroll flex flex-col items-center relative rounded pt-6 bg-grayBackground z-0"
      >
        <Document
          file={'/news/sample.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
          className={'w-fit '}
          renderMode="none"
        >
          <Page pageNumber={pageNumber} scale={1} className={'text-center'} />
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
  totalPage: number
  setPageNumber: Dispatch<SetStateAction<number>>
  isMouseOver: boolean
}) => {
  const handlePreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber((prev) => prev - 1)
    }
  }

  const handleNextPage = () => {
    if (pageNumber < totalPage) {
      setPageNumber((prev) => prev + 1)
    }
  }
  return (
    <div
      className={cn(
        'flex items-center gap-x-4 opacity-100 2lg:opacity-0 w-fit  -bottom-2 bg-white/80 backdrop-blur-xl shadow-xl rounded p-2 sticky transition-all duration-300 2lg:-bottom-12',
        {
          '2lg:opacity-100 2lg:bottom-0': isMouseOver,
        }
      )}
    >
      <IoIosArrowBack onClick={handlePreviousPage} className="size-3" />
      <p className="font-workSans">
        {pageNumber} of {totalPage}
      </p>
      <IoIosArrowForward onClick={handleNextPage} className="size-3" />
    </div>
  )
}
