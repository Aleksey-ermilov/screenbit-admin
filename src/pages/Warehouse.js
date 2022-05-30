import React, {useEffect,useState} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {Image,Card} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

import PlusSvg from "../img/svg/PlusSvg";

import Header from "../components/Header";
import Loading from "./Loading";

import ModalCreate from "../components/modal/ModalCreate";
import ModalDeleteProduct from "../components/modal/ModalDeleteProduct";

import {httpDeleteProduct, httpGetProducts, httpUpdateProduct} from '../http/productApi'

import {fetchProducts, deleteProducts, updateProducts} from '../store/product/actionProduct'
import EmptyListMes from "../components/EmptyListMes";
import {PRODUCT_CARD_ROUTER} from "../consts";

const Warehouse = () => {
    const {products} = useSelector( state => state.product)
    const dispatch = useDispatch()

    const navigate = useNavigate();

    const [ isShowModalCreate, setIsShowModalCreate ] = useState(false)
    const [ isShowModalDelete, setIsShowModalDelete ] = useState({show:false,name:'',id:''})

    const [loading,setLoading] = useState(false)

    useEffect(() => {
        httpGetProducts().then(data => {
            dispatch(fetchProducts(data.rows))
        }).finally(() => setLoading(false))
    },[])

    const handlerDeleteProduct = product_id => {
        httpDeleteProduct(product_id).then(data => {
            dispatch(deleteProducts(product_id))
        })
        dispatch(deleteProducts(product_id))
    }

    const handlerSwitch = (e,product) => {
        httpUpdateProduct({...product, active: e.target.checked}).then(data => {
            dispatch(updateProducts({...data.newProduct }))
        })
    }

    const handlerNavigate = (item) => {
        navigate(PRODUCT_CARD_ROUTER, {state: {product_id: item.product_id,product:item} })
    }

    if (loading){
        return <Loading />
    }

    return (
        <div >
            <Header title={'Склад'} />

            <div className='d-flex'>
                <div
                    onClick={() => setIsShowModalCreate(true)}
                    className='orders-filter-btn orders-filter-btn-green shadow-mine-hover mx-3 mb-3'>
                    <PlusSvg fill='#fff' width="1em" height="1em" />
                    <div className='ms-2'>Добавить товар</div>
                </div>
            </div>

            <div className='d-flex flex-wrap px-3'>
                {
                    products.length ?
                        products.map(item =>
                            <Card key={item.product_id} className='shadow-mine p-3 m-2'>
                                <div onClick={() => handlerNavigate(item)} >
                                    <Image src={`${process.env.REACT_APP_API_URL}${item.img[0]}`} width={150} height={150} />
                                    {/*<Image src={item.img[0]} width={150} height={150} />*/}
                                </div>
                                <div className='mt-2'>
                                    <div className='d-flex justify-content-between'>
                                        <div>{item.brand}</div>
                                        <div>{item.name}</div>
                                    </div>
                                    <div className='unactive-text font-s-14 mb-2'>
                                        {item.category}
                                    </div>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <div>Цена</div>
                                        <div>{item.price}р</div>
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div>Активный</div>
                                        <label className="switch">
                                            <input
                                                checked={item.active}
                                                type="checkbox"
                                                name={'geolacation'}
                                                onChange={(e) => handlerSwitch(e,item)}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                    <div className='d-flex justify-content-center align-items-center pt-4'>
                                        <button
                                            onClick={() => setIsShowModalDelete({show:true,name:item.name,id:item.product_id})}
                                            className='d-block btn-all btn-delete-product shadow-inner-my-focus shadow-mine-hover'
                                        >Удалить</button>
                                    </div>
                                </div>

                            </Card>
                        )
                        :
                        <EmptyListMes />
                }
            </div>

            <ModalCreate onHide={() => setIsShowModalCreate(false)} show={isShowModalCreate} />
            <ModalDeleteProduct remove={handlerDeleteProduct} onHide={() => setIsShowModalDelete({show:false,name:'',id:''})} show={isShowModalDelete} />

        </div>
    );
};

export default Warehouse;
/*
id: {type: DataTypes.INTEGER, },
name: {type: DataTypes.STRING, unique: true,,
brand: {type: DataTypes.STRING,
product_id: {type: DataTypes.STRING, unique: true,
price: {type: DataTypes.STRING,
type: {type: DataTypes.STRING,
category: {type: DataTypes.STRING,
desc: {type: DataTypes.TEXT},
active: { type: DataTypes.BOOLEAN, defaultValue: true},
new: { type: DataTypes.BOOLEAN, defaultValue: true},
archive: { type: DataTypes.BOOLEAN, defaultValue: false},
img: {type: DataTypes.TEXT (array),},
characteristics: {type: DataTypes.JSON,},
reviews: {type: DataTypes.JSON,},
accessories: {type: DataTypes.JSON,},

warehouse_count
*/
/*
const characteristics = [
    ["Внешний вид",[
            ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
        ],
    ],
    ["Внешний вид", [
            ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
        ],
    ],
]*/
/*
reviews = [
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
]*/
