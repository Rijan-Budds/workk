import Image from 'next/image'
import React from 'react'

export const ActiveImage = ({ src }: { src: string }) => {
  return (
    <div className=" min-w-[343px]  min-h-[343px] md:size-[324px] rounded-xl bg-slate-300 2lg:w-[656px] 2lg:h-[656px] ">
      <Image
        src={src}
        alt="students studying on class"
        width={656}
        height={656}
        className="w-full h-full"
      />
    </div>
  )
}
