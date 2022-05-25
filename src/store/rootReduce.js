import { combineReducers } from 'redux'

import {userReduce} from "./user/userReduce";
import {appReduce} from './app/appReduce'
import {productReducer} from "./product/productReduce";

export const rootReduce = combineReducers({
    user: userReduce,
    app: appReduce,
    product: productReducer
})