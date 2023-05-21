import React from 'react'
import {Navigate, Outlet, useLocation} from 'react-router-dom'
import { useAuth } from '../../context/Auth/AuthContext'

const PrivateRoute = () => {
    const {token} = useAuth()
    return token ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoute