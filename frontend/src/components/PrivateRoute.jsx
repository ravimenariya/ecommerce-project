import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Navbar from "./Home/Navbar";
function PrivateRoute({ allowrole, path = "all" }) {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')

    if (!token) {
        return <Navigate to='/login' />
    }

    if (!allowrole.includes(role)) {
        return <Navigate to="/login" />
    }
    return (
        <>
            {path != "Dashboard" && <Navbar />}
            <Outlet />
        </>
    )
}

export default PrivateRoute;
