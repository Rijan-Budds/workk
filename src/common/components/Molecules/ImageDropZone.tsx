'use client'

import { IFileMetadata } from '@/common/interface/type'
import {
  byteToMb,
  checkFileType,
  cn,
  convertFileToSrc,
} from '@/common/utils/utils'
import React, { useState } from 'react'
import { ErrorComponent } from '../Atom/Input'
import { FormikErrors } from 'formik'
import { IStepFields } from '@/app/(routes)/admission/interface/type'
import { UploadedFileUi } from './UploadFileUi'

interface IDropZoneProps {
  isError: boolean
  error: string | string[] | FormikErrors<File>[] | undefined
  setValue: (field: string, value: IFileMetadata[]) => void
  setError: (field: string, message: string | undefined) => void
  values: IStepFields | undefined
}

export const ImageDropZone = ({
  isError,
  error = [],
  setValue,
  setError,
  values,
}: IDropZoneProps) => {
  console.log('values', values)
  const [isDragging, setDragging] = useState<boolean>(false)

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
      if (files.length < 6) {
        setValue('document', filterMetaData)
      } else {
        setError('document', 'You can upload a maximum of 5 files')
      }
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
    if (values && values.document) {
      setValue(
        'document',
        values.document.filter((_, i) => i !== index)
      )
      setError(`document[${index}]`, undefined)
    }
  }

  const getErrorMessage = (index: number): string | undefined => {
    const errorMessage = error[index]
    if (typeof errorMessage === 'string') {
      return errorMessage
    }
    return undefined
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
              name="document"
              multiple
              type="file"
              title="document"
              onChange={handleInputChange}
              className="w-full bdr h-full absolute top-0 left-0 opacity-0"
            />
            <span className="text-secondary font-workSans">browse</span>
          </p>
          <p className="text-body font-workSans text-[14px] leading-4">
            Max File 1OMB
          </p>
        </div>
      </label>
      {isError && !Array.isArray(error) && <ErrorComponent error={error} />}
      <div className="flex w-full flex-wrap gap-4 ">
        {values &&
          values.document &&
          values?.document?.map((file, index) => {
            const errorMessage = getErrorMessage(index)
            return (
              <UploadedFileUi
                key={index}
                name={file.name}
                size={file.size}
                type={file.type}
                src={file.src}
                index={index}
                onDelete={() => handleDelete(index)}
                isError={!!error[index]}
                message={errorMessage}
              />
            )
          })}
      </div>
    </>
  )
}
