import React from 'react'
import "./Admin.scss"
import { Outlet, NavLink } from 'react-router-dom'
import { TbHomeHand } from "react-icons/tb";
const Admin = () => {
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