import {
    FETCH_PRODUCT
} from './types'

import imgDefaultUser from '../../img/png/img-default-user-2.png'
import imgProduct1 from '../../img/png/0b25316f-e8e2-4a15-8323-325ee1ae7203.jpg'
import imgProduct2 from '../../img/png/0bd6a1c8-200b-4867-9dc5-7f75b780d41e.png'

const pr = [
    {
        id: '1',
        name: 'a50',
        brand: 'Samsung',
        product_id: 'prod_1',
        price: '2546',
        type: 'phone',
        category: 'Phone',
        desc: 'Super puper device Super puper device Super puper device Super puper device ',
        active: true,
        new: true,
        archive: false,
        img: [imgProduct2,imgProduct1],
        characteristics: [["Внешний вид",[
            ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
        ],
        ],
            ["Внешний вид", [
                ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
            ],
            ],
        ],
        reviews: [
            {
                user: {
                    img: imgDefaultUser,
                    user_id:'auth_1',
                    fullName: 'Василий Пупкин'
                },
                message: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
            },
        ],
        accessories: ['зарядка','наушники'],

        warehouse_count: '150'
    },
    {
        id: '2',
        name: '11 pro',
        brand: 'Apple',
        product_id: 'prod_2',
        price: '10003',
        type: 'phone',
        category: 'Phone',
        desc: 'Super puper device Super puper device Super puper device Super puper device ',
        active: false,
        new: true,
        archive: false,
        img: [imgProduct1,imgProduct2],
        characteristics: [["Внешний вид",[
            ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
        ],
        ],
            ["Внешний вид", [
                ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
            ],
            ],
        ],
        reviews: [
            {
                user: {
                    img: imgDefaultUser,
                    user_id:'auth_1',
                    fullName: 'Василий Пупкин'
                },
                message: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
            },
        ],
        accessories: ['зарядка','наушники'],
        warehouse_count: '50',
    },
    {
        id: '3',
        name: '12 pro',
        brand: 'Apple',
        product_id: 'prod_3',
        price: '18000',
        type: 'phone',
        category: 'Phone',
        desc: 'Super puper device Super puper device Super puper device Super puper device ',
        active: false,
        new: true,
        archive: false,
        img: [imgProduct2,imgProduct1],
        characteristics: [["Внешний вид",[
            ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
        ],
        ],
            ["Внешний вид", [
                ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
            ],
            ],
        ],
        reviews: [
            {
                user: {
                    img: imgDefaultUser,
                    user_id:'auth_1',
                    fullName: 'Василий Пупкин'
                },
                message: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
            },
        ],
        accessories: ['зарядка','наушники'],
        warehouse_count: '50',
    },
    {
        id: '4',
        name: '9 mini',
        brand: 'Apple',
        product_id: 'prod_4',
        price: '8999',
        type: 'phone',
        category: 'Phone',
        desc: 'Super puper device Super puper device Super puper device Super puper device ',
        active: true,
        new: false,
        archive: false,
        img: [imgProduct1,imgProduct2],
        characteristics: [["Внешний вид",[
            ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
        ],
        ],
            ["Внешний вид", [
                ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
            ],
            ],
        ],
        reviews: [
            {
                user: {
                    img: imgDefaultUser,
                    user_id:'auth_1',
                    fullName: 'Василий Пупкин'
                },
                message: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
            },
        ],
        accessories: ['зарядка','наушники'],
        warehouse_count: '15',
    },
    {
        id: '5',
        name: 'a 21',
        brand: 'Samsung',
        product_id: 'prod_5',
        price: '10003',
        type: 'phone',
        category: 'Phone',
        desc: 'Super puper device Super puper device Super puper device Super puper device ',
        active: true,
        new: true,
        archive: false,
        img: [imgProduct2,imgProduct1,],
        characteristics: [["Внешний вид",[
            ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
        ],
        ],
            ["Внешний вид", [
                ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
            ],
            ],
        ],
        reviews: [
            {
                user: {
                    img: imgDefaultUser,
                    user_id:'auth_1',
                    fullName: 'Василий Пупкин'
                },
                message: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
            },
        ],
        accessories: ['зарядка','наушники'],
        warehouse_count: '50',
    },
    {
        id: '6',
        name: '13 pro',
        brand: 'Apple',
        product_id: 'prod_6',
        price: '4521',
        type: 'phone',
        category: 'Phone',
        desc: 'Super puper device Super puper device Super puper device Super puper device ',
        active: false,
        new: true,
        archive: false,
        img: [imgProduct1,imgProduct2],
        characteristics: [["Внешний вид",[
            ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
        ],
        ],
            ["Внешний вид", [
                ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
            ],
            ],
        ],
        reviews: [
            {
                user: {
                    img: imgDefaultUser,
                    user_id:'auth_1',
                    fullName: 'Василий Пупкин'
                },
                message: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
            },
        ],
        accessories: ['зарядка','наушники'],
        warehouse_count: '80',
    },
    {
        id: '7',
        name: '21 pro',
        brand: 'Apple',
        product_id: 'prod_7',
        price: '10003',
        type: 'phone',
        category: 'Phone',
        desc: 'Super puper device Super puper device Super puper device Super puper device ',
        active: true,
        new: false,
        archive: false,
        img: [imgProduct2,imgProduct1],
        characteristics: [["Внешний вид",[
            ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
        ],
        ],
            ["Внешний вид", [
                ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
            ],
            ],
        ],
        reviews: [
            {
                user: {
                    img: imgDefaultUser,
                    user_id:'auth_1',
                    fullName: 'Василий Пупкин'
                },
                message: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
            },
        ],
        accessories: ['зарядка','наушники'],
        warehouse_count: '774',
    },
    {
        id: '8',
        name: '25 ultra',
        brand: 'Apple',
        product_id: 'prod_8',
        price: '222255',
        type: 'phone',
        category: 'Phone',
        desc: 'Super puper device Super puper device Super puper device Super puper device ',
        active: true,
        new: true,
        archive: false,
        img: [imgProduct2,imgProduct1],
        characteristics: [["Внешний вид",[
            ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
        ],
        ],
            ["Внешний вид", [
                ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
            ],
            ],
        ],
        reviews: [
            {
                user: {
                    img: imgDefaultUser,
                    user_id:'auth_1',
                    fullName: 'Василий Пупкин'
                },
                message: 'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.' +
                    'Перевод достоинство, за которое все его и смотрят - его шелезо, конкурентно за эту цену практически нет.',
            },
        ],
        accessories: ['зарядка','наушники'],
        warehouse_count: '1000',
    },
]

const initialState = {
    products: pr
}

export const productReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_PRODUCT: return {
            ...state, products: action.payload
        }
        // case SELECTED_CATEGORIES: return {
        //     ...state, categories: state.categories.map( item =>{
        //         if (item.id === action.payload){
        //             return {...item, checked: !item.checked}
        //         }
        //         return item
        //     })
        // }
        // case SET_SORT: return {
        //     ...state, sort: action.payload
        // }
        default: return state
    }
}