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

export const httpDeleteProduct = async (id) => {
    const {data} = await $host.delete(`/api/product/${id}`,)
    return data
}

export const httpUpdateProduct = async (product) => {
    const {data} = await $host.post(`/api/product/update`, {product} )
    return data
}

export const httpFullUpdateProduct = async (product) => {
    const {data} = await $host.post(`/api/product/fullUpdate`, product )
    return data
}