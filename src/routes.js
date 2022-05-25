import {
    AUTH_ROUTER,
    CLIENTS_ROUTER,
    LEADS_ROUTER,
    ORDERS_ROUTER,
    PAYMENTS_ROUTER,
    SHOP_ROUTER,
    TASKMAN_ROUTER, WAREHOUSE_ROUTER
} from "./consts";

import Auth from "./pages/Auth";
import Clients from "./pages/Clients";
import Leads from "./pages/Leads";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import Shop from "./pages/Shop";
import Taskman from "./pages/Taskman";
import Warehouse from "./pages/Warehouse";


export const authRouter = [
    {
        path: CLIENTS_ROUTER,
        Component: Clients
    },
    {
        path: LEADS_ROUTER,
        Component: Leads
    },
    {
        path: ORDERS_ROUTER,
        Component: Orders
    },
    {
        path: PAYMENTS_ROUTER,
        Component: Payments
    },
    {
        path: SHOP_ROUTER,
        Component: Shop
    },
    {
        path: TASKMAN_ROUTER,
        Component: Taskman
    },
    {
        path: WAREHOUSE_ROUTER,
        Component: Warehouse
    },
]

export const publicRouter = [
    {
        path: AUTH_ROUTER,
        Component: Auth
    },
]