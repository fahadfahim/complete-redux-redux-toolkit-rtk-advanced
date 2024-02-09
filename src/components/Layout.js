import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
    return (
        <>
            <Header />
            <main className='App'>

                {/* Outlet represents all of the children when we put the layout component into our application  component into the our application  */}
                <Outlet />
            </main>
        </>
    )
}

export default Layout