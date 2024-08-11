import React from 'react'
import {NavLink , Link} from 'react-router-dom'
export default function NavBar() {
    return (
        <>
            <nav className="bg-slate-700 fixed top-0 left-0 right-0 border-gray-200  py-5 z-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={''}  className="flex items-center space-x-3 rtl:space-x-reverse">
                        <span className="self-center text-3xl font-bold whitespace-nowrap text-white">START FRAMEWORK</span>
                    </Link>
                    
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col  mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                            
                            <li>
                                <NavLink to={'about'}  className="block py-2 px-3 text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0     ">About</NavLink>
                            </li>
                            <li>
                                <NavLink to={'porto'}  className="block py-2 px-3 text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0     ">Portofolio</NavLink>
                            </li>
                            <li>
                                <NavLink to={'contact'}  className="block py-2 px-3 text-xl text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0     ">Contact Us</NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
