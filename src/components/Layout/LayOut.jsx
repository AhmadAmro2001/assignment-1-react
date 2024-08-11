import React from 'react'
import NavBar from '../navbar/NavBar'
import SubFooter from '../SubFooter/SubFooter'
import Footer from '../footer/Footer'

import { Outlet } from 'react-router-dom'

export default function LayOut() {
    return (
    <>
        <NavBar />
        <Outlet></Outlet>
        <SubFooter/>
        <Footer/>
    </>
    )
}
