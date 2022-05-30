import React from 'react';
import {NavLink,useLocation,useNavigate} from 'react-router-dom'
import {useDispatch} from "react-redux";

import Logo from "../img/svg/Logo";
import LeadsSvg from "../img/svg/LeadsSvg";
import OrdersSvg from "../img/svg/OrdersSvg";

import {
    AUTH_ROUTER,
    CLIENTS_ROUTER,
    LEADS_ROUTER,
    ORDERS_ROUTER,
    PAYMENTS_ROUTER,
    SHOP_ROUTER,
    TASKMAN_ROUTER,
    WAREHOUSE_ROUTER
} from "../consts";
import ShopSvg from "../img/svg/ShopSvg";
import PaymentsSvg from "../img/svg/PaymentsSvg";
import WarehouseSvg from "../img/svg/WarehouseSvg";
import ClientsSvg from "../img/svg/ClientsSvg";
import ExitSvg2 from "../img/svg/ExitSvg2";
import {setAuth} from "../store/user/actionUser";

const navbar = [
    // {
    //     title: 'Обращения',
    //     Svg: LeadsSvg,
    //     link: LEADS_ROUTER,
    // },
    {
        title: 'Заказы',
        Svg: OrdersSvg,
        link: ORDERS_ROUTER,
    },
    {
        title: 'Продажи',
        Svg: ShopSvg,
        link: SHOP_ROUTER,
    },
    {
        title: 'Финансы',
        Svg: PaymentsSvg,
        link: PAYMENTS_ROUTER,
    },
    {
        title: 'Склад',
        Svg: WarehouseSvg,
        link: WAREHOUSE_ROUTER,
        // split: <hr />
    },
    {
        title: 'Клиенты',
        Svg: ClientsSvg,
        link: CLIENTS_ROUTER,
    },
]


const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handlerLogout = () => {
        navigate(AUTH_ROUTER)
        dispatch(setAuth(false))
    }

    return (
        <div className='font-s-16 pt-4'>
            <div className='mb-4 d-flex justify-content-center align-items-start'>
                <Logo width='5rem' height="5rem" />
            </div>

            <div>
                {/*<NavLink to={TASKMAN_ROUTER} >*/}
                {/*    <div*/}
                {/*        className={ location.pathname === TASKMAN_ROUTER ? 'p-3 navbar-link active cursor-pointer' : 'p-3 navbar-link cursor-pointer'}*/}
                {/*    >*/}
                {/*        <span className={location.pathname === TASKMAN_ROUTER ? 'navbar-task-icon active' : 'navbar-task-icon'}>5</span>*/}
                {/*        <span className='ms-2'>Задачи</span>*/}
                {/*    </div>*/}
                {/*</NavLink>*/}

                {
                    navbar.map( (item,i) =>
                        <div key={i}>
                            <NavLink to={item.link}>
                                <div
                                    className={ location.pathname === item.link ? 'p-3 navbar-link active cursor-pointer' : 'p-3 navbar-link cursor-pointer'}
                                >
                                    <item.Svg fill='#fff' />
                                    <span className='ms-2'>{item.title}</span>
                                </div>
                            </NavLink>
                            { item.split && <div className='px-3'>
                                {item.split}
                            </div>}
                        </div>
                    )
                }
            </div>
                <div
                    onClick={handlerLogout}
                    className='p-3 cursor-pointer navbar-link navbar-link-exit'
                >
                    <ExitSvg2 fill={'#FFF'} />
                    <span className='ms-2'>Выход</span>
                </div>
        </div>
    );
};

export default NavBar;