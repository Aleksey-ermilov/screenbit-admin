import {
    SET_AUTH
} from './types'

const initialState = {
    isAuth: false
}

export const userReduce = (state = initialState, action) => {
    switch (action.type){
        case SET_AUTH: return {
            ...state, isAuth: action.payload
        }
        default: return state
    }
}

