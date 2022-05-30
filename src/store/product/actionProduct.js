import {
    ADD_PRODUCT,
    DELETE_PRODUCT,
    FETCH_PRODUCT,
    SET_PRODUCT,
    UPDATE_PRODUCT,
    SET_LIST_ORDERING,
    SET_LIST_REPAIR_ORDER, SET_CLIENTS, SET_CASH_DESK, SET_SALES
} from './types'

export function fetchProducts (products) {return {type:FETCH_PRODUCT, payload:products}}
export function deleteProducts (product_id) {return {type:DELETE_PRODUCT, payload:product_id}}
export function updateProducts (product) {return {type:UPDATE_PRODUCT, payload:product}}
export function addProducts (product) {return {type:ADD_PRODUCT, payload:product}}

export function setProduct (product) {return {type:SET_PRODUCT, payload:product}}

export function setListOrdering (list) {return {type:SET_LIST_ORDERING, payload:list}}
export function setListRepairOrder (list) {return {type:SET_LIST_REPAIR_ORDER, payload:list}}

export function setClients (clients) {return {type:SET_CLIENTS, payload:clients}}
export function setCashDesk (cash) {return {type:SET_CASH_DESK, payload:cash}}
export function setMutualSettlements (mutualSettlements) {return {type:SET_CASH_DESK, payload:mutualSettlements}}
export function setSales (sales) {return {type:SET_SALES, payload:sales}}