import Image from 'next/image'
import React from 'react'
import { SectionHeading } from '../Atom/SectionHeading'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb'
import Link from 'next/link'

interface IBreadCrumbList {
  title: string
  link: string | null
}

export const CoverImage = ({
  title,
  list,
}: {
  title: string
  list?: IBreadCrumbList[]
}) => {
  return (
    <div className="w-full h-[142px] md:h-[235px] relative flex items-center justify-center">
      <Image
        src="/home/coverimage.svg"
        alt="Banner"
        width={1920}
        height={235}
        className={`w-full h-full object-cover `}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-1">
        <SectionHeading className="text-center text-white">
          {title}
        </SectionHeading>
        {list && <CustomBreadCrumb list={list} />}
      </div>
    </div>
  )
}

const CustomBreadCrumb = ({ list }: { list: IBreadCrumbList[] }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild className="">
            <Link
              className="font-workSans text-white font-medium text-[14px] leading-4"
              href="/"
            >
              Home
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {list.map((link) => (
          <>
            <BreadcrumbSeparator className="text-white  [&>svg]:size-4" />
            <BreadcrumbItem>
              {link.link ? (
                <Link href={link.link}>
                  <span className="font-workSans text-white font-medium text-[14px] leading-4 capitalize">
                    {link.title}
                  </span>
                </Link>
              ) : (
                <span className="font-workSans text-white font-medium text-[14px] leading-4 capitalize">
                  {link.title}
                </span>
              )}
            </BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
