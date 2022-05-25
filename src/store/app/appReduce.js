import {

} from './types'

const initialState = {
    loading: false,
    error: null
}

export const appReduce = (state = initialState, action) => {
    switch (action.type){

        // case SET_LOADING: return {
        //     ...state, loading: action.payload
        // }
        default: return state
    }
}