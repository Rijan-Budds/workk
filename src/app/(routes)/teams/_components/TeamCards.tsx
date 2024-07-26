import Image from 'next/image'
import React from 'react'
import './teams.css'

const teams = [
  {
    image: '/home/teams1.jpg',
    name: 'Man Kumar Rai',
    position: 'Founder',
  },
  {
    image: '/home/teams2.jpg',
    name: 'Amar Kumar Rai',
    position: 'Chairman',
  },
  {
    image: '/home/teams3.jpg',
    name: 'Bishan Rai',
    position: 'Founder',
  },
  {
    image: '/home/director 1.png',
    name: 'Uttar Kumar Rai',
    position: 'Principal',
  },
  {
    image: '/home/director 2.png',
    name: 'Bigyan Deu Rai',
    position: 'Managing Director',
  },
  {
    image: '/home/director3.jpg',
    name: 'Bhuwan Singh Rai',
    position: 'Founder',
  },
]

const TeamCards = () => {
  return (
    <>
      <div className="flex flex-col gap-2 md:hidden">
        {teams.map((team, index) => (
          <div
            key={index}
            className="flex bg-[#F8FAFD] gap-4 py-[22px] rounded-xl"
          >
            <div className="pl-[16px]">
              <Image
                src={team.image}
                width={236}
                height={236}
                alt="teams"
                className="rounded-full w-14 h-14 object-cover"
              />
            </div>
            <div>
              <h1 className="font-poppins text-[18px] font-medium leading-6">
                {team.name}
              </h1>
              <p>{team.position}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:grid grid-cols-2 gap-16 lg:gap-[52px] lg:flex lg:flex-wrap justify-center items-center">
        {teams.map((team, index) => (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            <div
              key={index}
              className="flex justify-center items-center border rounded-full w-[304px] lg:w-[236px] h-[304px] lg:h-[236px] border-primaryLight relative"
            >
              <Image
                src={team.image}
                width={236}
                height={236}
                alt="teams"
                className="rounded-full w-[236px] lg:w-[200px] h-[236px] lg:h-[200px] object-cover border-primaryLight"
              />
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="diagonal-border"></div>
              </div>
            </div>
            <div className="text-center mt-[25px] space-y-2">
              <h1 className="font-poppins font-medium text-xl leading-6">
                {team.name}
              </h1>
              <p className="font-inter font-normal text-base leading-4">
                {team.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default TeamCards
