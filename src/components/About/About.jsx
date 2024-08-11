import React from 'react'

export default function About() {
  return (
    <> 
      <div className="container mx-auto flex flex-col justify-center align-middle bg-emerald-600 w-full h-screen ">
        <h1 className='text-5xl text-white font-bold text-center'>ABOUT COMPONENT</h1>
        <div className="star flex mx-auto  mt-5">
          <div className=" w-20 h-1 my-2 mx-5 bg-white "></div>
          <i className="fa-solid fa-star text-xl text-white"></i>
          <div className=" w-20 h-1 my-2 mx-5 bg-white "></div>
        </div>
        <div className="row my-12 text-white">
          <div className="w-1/2 mx-auto max-w-xl">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="w-1/2 mx-auto max-w-xl">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </>
  )
}
