import React from 'react'
import img1 from '../../assets/poert1.png'
import img2 from '../../assets/port2.png'
import img3 from '../../assets/port3.png'
export default function Porto() {
  return (
    <>
      <div className="container flex flex-col justify-center align-middle  w-full mt-32 mb-16 ">
        <h1 className='text-5xl text-slate-700 font-bold text-center'>PORTOFOLIO COMPONENT</h1>
        <div className="star flex mx-auto  mt-5">
          <div className=" w-20 h-1 my-2 mx-5 bg-slate-700 "></div>
          <i className="fa-solid fa-star text-xl text-slate-700"></i>
          <div className=" w-20 h-1 my-2 mx-5 bg-slate-700 "></div>
        </div>
      </div>
    <div className="container mb-10">
      <div className="row gap-5">
        <div className="group relative w-full md:w-1/2 lg:w-1/4 mx-auto rounded-xl overflow-hidden  ">
          <img src={img1} className='rounded-lg' alt="" />
          <div className="  transition duration-500 bg-transparent  group-hover:bg-emerald-500 flex flex-col justify-center text-center m-auto absolute  top-0 right-0 left-0 bottom-0  ">
          <i className="fa-solid fa-plus text-6xl text-transparent group-hover:text-white transition duration-500"></i>
          </div>
        </div>
        <div className="group relative w-full md:w-1/2 lg:w-1/4 mx-auto rounded-xl overflow-hidden  ">
          <img src={img2} className='rounded-lg' alt="" />
          <div className="  transition duration-500 bg-transparent  group-hover:bg-emerald-500 flex flex-col justify-center text-center m-auto absolute  top-0 right-0 left-0 bottom-0  ">
          <i className="fa-solid fa-plus text-6xl text-transparent group-hover:text-white transition duration-500"></i>
          </div>
        </div>
        <div className="group relative w-full md:w-1/2 lg:w-1/4 mx-auto rounded-xl overflow-hidden  ">
          <img src={img3} className='rounded-lg' alt="" />
          <div className="  transition duration-500 bg-transparent  group-hover:bg-emerald-500 flex flex-col justify-center text-center m-auto absolute  top-0 right-0 left-0 bottom-0  ">
          <i className="fa-solid fa-plus text-6xl text-transparent group-hover:text-white transition duration-500"></i>
          </div>
        </div>
        <div className="group relative w-full md:w-1/2 lg:w-1/4 mx-auto rounded-xl overflow-hidden  ">
          <img src={img1} className='rounded-lg' alt="" />
          <div className="  transition duration-500 bg-transparent  group-hover:bg-emerald-500 flex flex-col justify-center text-center m-auto absolute  top-0 right-0 left-0 bottom-0  ">
          <i className="fa-solid fa-plus text-6xl text-transparent group-hover:text-white transition duration-500"></i>
          </div>
        </div>
        <div className="group relative w-full md:w-1/2 lg:w-1/4 mx-auto rounded-xl overflow-hidden  ">
          <img src={img2} className='rounded-lg' alt="" />
          <div className="  transition duration-500 bg-transparent  group-hover:bg-emerald-500 flex flex-col justify-center text-center m-auto absolute  top-0 right-0 left-0 bottom-0  ">
          <i className="fa-solid fa-plus text-6xl text-transparent group-hover:text-white transition duration-500"></i>
          </div>
        </div>
        <div className="group relative w-full md:w-1/2 lg:w-1/4 mx-auto rounded-xl overflow-hidden  ">
          <img src={img3} className='rounded-lg' alt="" />
          <div className="  transition duration-500 bg-transparent  group-hover:bg-emerald-500 flex flex-col justify-center text-center m-auto absolute  top-0 right-0 left-0 bottom-0  ">
          <i className="fa-solid fa-plus text-6xl text-transparent group-hover:text-white transition duration-500"></i>
          </div>
        </div>
        
        
      </div>
    </div>
    </>
  )
}
