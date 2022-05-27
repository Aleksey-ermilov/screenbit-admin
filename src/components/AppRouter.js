import React from 'react';
import {Routes,Route} from 'react-router-dom'
import {useSelector} from 'react-redux'

import Layout from "./Layout";

import {authRouter, publicRouter} from "../routes";
import Auth from "../pages/Auth";

const AppRouter = () => {
    const isAuth = useSelector((state) => state.user.isAuth)
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout /> }>
                    {
                        isAuth && authRouter.map(({path, Component}) =>
                            <Route path={path} element={<Component />} exact key={path} />
                        )
                    }
                    {
                        publicRouter.map(({path, Component}) =>
                            <Route
                                path={path}
                                element={<Component />}
                                key={path} />
                        )
                    }
                    <Route
                        path="*"
                        element={<Auth />}
                    />
                </Route>

            </Routes>
        </div>
    );
};

export default AppRouter;