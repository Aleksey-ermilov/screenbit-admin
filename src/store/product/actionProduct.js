import {
    FETCH_PRODUCT
} from './types'

export function fetchProducts (products) {return {type:FETCH_PRODUCT, payload:products}}