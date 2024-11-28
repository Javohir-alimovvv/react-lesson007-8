import React from 'react'
import "./Admin.scss"
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { TbHomeHand } from "react-icons/tb";
const Admin = () => {

    const navigate = useNavigate()
    const handleLogOut = () => {
        const storage = JSON.parse(localStorage.getItem("storage"))
        delete storage.token
        localStorage.setItem("storage", JSON.stringify(storage))
        navigate("/")
    }


    return (
        <>

            <div className='admin'>

                <div className='admin__saidbar'>
                    <ul className='admin__saidbar__content'>
                        <li className='admin__saidbar__content__item'>
                            <NavLink to={"/"}><span><TbHomeHand /> Home</span></NavLink>
                        </li>
                        <li className='admin__saidbar__content__item'>
                            <NavLink to={"/admin/create"}><span>Create Products</span></NavLink>
                        </li>
                        <li className='admin__saidbar__content__item'>
                            <NavLink to={"/admin/manage"}><span>Manage Products</span></NavLink>
                        </li>
                        <button className='log__out__btn' onClick={handleLogOut}>Log Out</button>
                    </ul>
                </div>
                <div>
                    <Outlet />
                </div>


            </div>


        </>
    )
}

export default Admin