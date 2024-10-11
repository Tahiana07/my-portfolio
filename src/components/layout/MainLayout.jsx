import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from "../header/Header"

const MainLayout = () => {
    return (
        <>
            <div>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout