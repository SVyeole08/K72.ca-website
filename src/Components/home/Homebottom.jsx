import React from 'react'
import { Link } from 'react-router-dom'

const Homebottom = () => {
  return (
    <div className='flex items-center justify-center gap-4'>
      <Link className='text-[5vw] leading-[6vw] border-3 px-6 font-[900] border-white rounded-full uppercase  ' to="/projects">Projects</Link>
      <Link className='text-[5vw] leading-[6vw] border-3 px-6 font-[900] border-white rounded-full uppercase  ' to="/about">Agence</Link>
    </div>
  )
}

export default Homebottom 