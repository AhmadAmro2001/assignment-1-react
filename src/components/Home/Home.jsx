import React from 'react'
import img1 from '../../assets/avataaars.svg'

export default function Home() {
  return (
    <>
    <div className=' bg-emerald-600 w-full h-screen flex flex-col justify-center align-middle ' >
      <img className='w-72 h-72 mx-auto mb-8' src={img1} alt="" />
      <h1 className='text-white text-5xl font-bold mx-auto'>START FRAMEWORK</h1>
      <div className="star flex mx-auto  mt-5">
        <div className=" w-20 h-1 my-2 mx-5 bg-white "></div>
        <i className="fa-solid fa-star text-xl text-white"></i>
        <div className=" w-20 h-1 my-2 mx-5 bg-white "></div>
        
      </div>
      <p className='text-white mx-auto mt-3'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </>
  )
}
