import React from 'react'
import "./Auth.scss"
import { Navigate, Outlet } from 'react-router-dom'
import { useStateValue } from "../../context/index"



const Auth = () => {
    const [state, dispatch] = useStateValue()


    const user = state.token

    return user ? <Outlet /> : <Navigate replace to={"/login"} />
}

export default Auth