import {$host} from "./index";

export const httpLoginAdmin = async (login, password) => {
    const {data} = await $host.post('/api/admin',{login,password})
    return data
}