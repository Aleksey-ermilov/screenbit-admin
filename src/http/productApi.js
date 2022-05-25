import {$host} from "./index";

export const httpGetProducts = async () => {
    const {data} = await $host.get('/api/product')
    return data
}

export const httpGetProduct = async (id) => {
    const {data} = await $host.get(`/api/product/${id}`)
    return data
}

export const httpCreateProduct = async (product) => {
    const {data} = await $host.post('/api/product',product)
    return data
}