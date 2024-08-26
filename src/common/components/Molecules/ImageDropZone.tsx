'use client'

import { IFileMetadata } from '@/common/interface/type'
import {
  byteToMb,
  checkFileType,
  cn,
  convertFileToSrc,
} from '@/common/utils/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import { PiTrashSimpleFill } from 'react-icons/pi'

export const ImageDropZone = () => {
  const [isDragging, setDragging] = useState<boolean>(false)
  const [uploadedFile, setUploadedFile] = useState<IFileMetadata[] | null>(null)

  const handleMetaData = (files: File[]) => {
    if (files) {
      const filterMetaData = files.map((file) => {
        return {
          name: file.name,
          size: byteToMb(file.size),
          type: checkFileType(file.type),
          src: convertFileToSrc(file),
        }
      })
      setUploadedFile(filterMetaData)
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setDragging(false)

    //Handle drop files
    const files = Array.from(e.dataTransfer.files)
    handleMetaData(files)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files) {
      setDragging(false)
      const files = Array.from(e.target.files)
      handleMetaData(files)
    }
  }

  const handleDelete = (index: number) => {
    if (uploadedFile) {
      setUploadedFile(uploadedFile.filter((_, i) => i !== index))
    }
  }

  return (
    <>
      <label
        onDragEnter={() => setDragging(true)}
        onDragOver={() => setDragging(true)}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={cn(
          'rounded-[12px] p-6 image-dropzone-border border-[2px] flex justify-center  items-center relative',
          {
            'bg-secondary/30 animate-pulse': isDragging,
          }
        )}
      >
        <div className="flex flex-col gap-y-2 items-center">
          <p className="text-body text-[14px] font-medium font-workSans leading-4 text-center">
            Drop your file(s) here or {''}
            <input
              multiple
              type="file"
              title=""
              onChange={handleInputChange}
              className="w-full bdr h-full absolute top-0 left-0 opacity-0"
            />
            <span className="text-secondary font-workSans">browse</span>
          </p>
          <p className="text-body font-workSans text-[14px] leading-4">
            Max File 2OMB
          </p>
        </div>
      </label>
      <div className="flex w-full flex-wrap gap-4 ">
        {uploadedFile &&
          uploadedFile.map((file, index) => (
            <UploadedFileUi
              key={index}
              name={file.name}
              size={file.size}
              type={file.type}
              src={file.src}
              index={index}
              onDelete={() => handleDelete(index)}
            />
          ))}
      </div>
    </>
  )
}

const UploadedFileUi = ({
  name,
  size,
  type,
  src,
  onDelete,
}: IFileMetadata & { index: number; onDelete: () => void }) => {
  return (
    <div className="border-border border rounded-[12px] py-2 px-4 flex justify-between items-center gap-x-12 w-[340px] 2xl:w-[350px] ">
      <div className="flex gap-x-4 items-center">
        {type === 'pdf' ? (
          <Image
            src={'/admission/pdf.png'}
            width={32}
            height={32}
            alt="pdf icon"
          />
        ) : (
          <Image
            src={src}
            width={40}
            height={40}
            alt="pdf icon"
            className="size-10 object-cover"
          />
        )}
        <div className="flex flex-col gap-y-1">
          <span className="font-workSans font-medium text-[14px] leading-4 text-heading line-clamp-1 break-all   max-w-[140px] 2lg:max-w-[245px] ">
            {name}
          </span>
          <span className="text-body font-workSans text-[14px] leading-4 font-normal">
            {size} MB
          </span>
        </div>
      </div>

      <PiTrashSimpleFill
        onClick={onDelete}
        className="text-body size-[16px] hover:text-error cursor-pointer"
      />
    </div>
  )
}
