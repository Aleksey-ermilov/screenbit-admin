import {

} from './types'

const initialState = {
    isAuth: true
}

export const userReduce = (state = initialState, action) => {
    switch (action.type){
        // case SET_FAVORITES: return {
        //     ...state, favorites: action.payload
        // }
        default: return state
    }
}

