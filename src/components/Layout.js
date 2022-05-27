import React from 'react';
import {Outlet, useLocation} from 'react-router-dom'
import {useSelector} from "react-redux";

import NavBar from "./NavBar";

const Layout = () => {
    const location = useLocation()
    const {isAuth} = useSelector( state => state.user)
    // location.pathname
    return (
        <>
            {
                isAuth ?
                    <div className='vh-100 wrapper'>
                        <div className='one navbar secondary-text vh-100 d-block'>
                            <NavBar />
                        </div>
                        <div className='two position-relative overflow-auto' >
                            <Outlet />
                        </div>
                    </div>
                :
                <div className='vh-100 auth-box d-flex justify-content-center align-items-center'>
                    <Outlet />
                </div>
            }
        </>
    );
};

export default Layout;