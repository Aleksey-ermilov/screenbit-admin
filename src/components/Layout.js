import React from 'react';
import {Outlet} from 'react-router-dom'

import NavBar from "./NavBar";

const Layout = () => {
    return (
        <div className='vh-100 wrapper'>
            <div className='one navbar secondary-text vh-100 d-block'>
                <NavBar />
            </div>
            <div className='two position-relative overflow-auto' >
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;