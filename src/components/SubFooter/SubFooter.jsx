import React from 'react'

export default function SubFooter() {
    return (
    <>
    <div className="container mx-auto bg-slate-700">
            <div className="row flex-col sm:flex-row">
                <div className="itemBox w-full sm:w-1/3 text-center p-20 text-white" >
                    <h1 className='text-3xl font-semibold'>LOCATION</h1>
                    <p className='my-3'>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>

                </div>
                <div className="itemBox w-full sm:w-1/3 text-center p-20 text-white" >
                    <h1 className='text-3xl font-semibold'>AROUND THE WEB</h1>
                    <div className="iconBox mt-2"> 
                    <i className="fa-brands fa-facebook mx-1 rounded-full border-2 p-2"></i>
                    <i className="fa-brands fa-twitter mx-1 rounded-full border-2 p-2"></i>
                    <i className="fa-brands fa-linkedin mx-1 rounded-full border-2 p-2"></i>
                    <i className="fa-solid fa-globe mx-1 rounded-full border-2 p-2"></i>
                    </div>

                </div>
                <div className="itemBox w-full sm:w-1/3 text-center p-20 text-white" >
                    <h1 className='text-3xl font-semibold'>ABOUT FREELANCER</h1>
                    <p className='my-1'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    

                </div>
                
            </div>
    </div>
    </>
    )
}
