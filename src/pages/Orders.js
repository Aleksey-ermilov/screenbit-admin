import React, {useEffect,useState} from 'react';
import {Table} from 'react-bootstrap'
import {useSelector,useDispatch} from "react-redux";

import ModalOrderProduct from "../components/modal/ModalOrderProduct";

import Header from "../components/Header";

import WrenchSvg from "../img/svg/WrenchSvg";
import FireSvg from "../img/svg/FireSvg";
import OclockSvg from "../img/svg/OclockSvg";
import ShopSvg from "../img/svg/ShopSvg";
import {httpGetOrdering, httpGetRepairStatus, httpUpdateOrdering} from "../http/productApi";
import {setListOrdering, setListRepairOrder} from "../store/product/actionProduct";

const Orders = () => {
    const {listOrdering,listRepairOrder} = useSelector(state => state.product)
    const dispatch = useDispatch()

    const [isShowModalOrderProduct,setIsShowModalOrderProduct] = useState({show:false, item: null})

    const option = { year: 'numeric', month: 'numeric', day: 'numeric',hour:'numeric',minute:'numeric' }

    const [isOrdering, setIsOrdering] = useState(true)

    useEffect( () => {
        httpGetOrdering().then(date => {
            dispatch(setListOrdering(date.list))
        })
        httpGetRepairStatus().then(date => {
            dispatch(setListRepairOrder(date.list))
        })
    },[])

    const handlerUpdateOrdering = value => {
        httpUpdateOrdering(value).then(date => {
            let arr = []
            if(value.status === 'Заказ выполнин'){
                arr = listOrdering.filter(item => item.order_id !== value.order_id)
                dispatch(setListOrdering([...arr]))
            }else {
                arr = listOrdering.map(item => item.order_id === value.order_id ? value : item)
                dispatch(setListOrdering([...arr]))
            }

        })
    }

    return (
        <div>
            <Header title={'Заказы'} />

            <div className='d-flex justify-content-end flex-wrap px-5 mb-3' >
                <div
                    onClick={() => setIsOrdering(true)}
                    className='orders-filter-btn orders-filter-btn-green '
                    style={{opacity: !isOrdering && 0.4} }
                >
                    <div className='ms-2'>
                        <div>Заказы товаров</div>
                        <div>{listOrdering.length}</div>
                    </div>
                </div>

                <div
                    onClick={() => setIsOrdering(false)}
                    className='orders-filter-btn orders-filter-btn-yellow'
                    style={{opacity: isOrdering && 0.4} }
                >
                    <div className='ms-2'>
                        <div>Заказы ремонтов</div>
                        <div>{listRepairOrder.length}</div>
                    </div>
                </div>

            </div>

            <div className='px-3'>

                {
                    isOrdering ?
                        <Table striped bordered hover responsive >
                            <thead>
                            <tr>
                                <th>Статус</th>
                                <th>Наименование товара</th>
                                <th>Категория</th>
                                <th>Цена</th>
                                <th>Количество</th>
                                <th>Адрес</th>
                                <th>Время заказа</th>
                                <th>Телефон</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody className='cursor-pointer'>
                            {
                                !!listOrdering.length &&
                                listOrdering.map((item,i) =>
                                    <tr key={i} onClick={() => setIsShowModalOrderProduct({show: true, item})}>
                                        <td>{item.status}</td>
                                        <td>{item.name}</td>
                                        <td>{item.category}</td>
                                        <td>{Number(item.price.replace(/[^\d]/g, '')) * item.count}</td>
                                        <td>{item.count}</td>
                                        <td>{item.address.address}</td>
                                        <td>{new Date(item.date).toLocaleDateString('ru-RU',option)}</td>
                                        <td>{item.phone ? item.phone : 'не указн'}</td>
                                        <td>{item.email ? item.email : 'не указн'}</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>
                        :
                        <Table striped bordered hover responsive >
                            <thead>
                            <tr>
                                <th>Статус</th>
                                <th>Устройство</th>
                                <th>Бренд</th>
                                <th>Поломка</th>
                                <th>Проблема</th>
                                <th>Сложный ремонт</th>
                                <th>Простой ремонт</th>
                                <th>Цена</th>
                                <th>Телефон</th>
                                <th>Email</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                !!listRepairOrder.length &&
                                listRepairOrder.map((item,i) =>
                                    <tr key={i}>
                                        <td>{item.status}</td>
                                        <td>{item.device}</td>
                                        <td>{item.brand}</td>
                                        <td>{item.breakage}</td>
                                        <td>{item.problem}</td>
                                        <td>{item.complexRepair.map(thing=> thing.name).join(', ')}</td>
                                        <td>{item.simpleRepair.map(thing=> thing.name).join(', ')}</td>
                                        <td>{item.price}</td>
                                        <td>{item.phone ? item.phone : 'не указн'}</td>
                                        <td>{item.email ? item.email : 'не указн'}</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </Table>
                }


            </div>

            <ModalOrderProduct updateOrder={handlerUpdateOrdering} show={isShowModalOrderProduct} onHide={() => setIsShowModalOrderProduct({show: false,item: null})} />
            {/*<div className='d-flex justify-content-end flex-wrap px-5 mb-3'>
                <div className='orders-filter-btn orders-filter-btn-green '>
                    <WrenchSvg fill='#fff' width="1.5em" height="1.5em" />
                    <div className='ms-2'>
                        <div>6 заказов</div>
                        <div>Мои заказы</div>
                    </div>
                </div>
                <div className='orders-filter-btn orders-filter-btn-red'>
                    <FireSvg fill='#fff' width="1.5em" height="1.5em" />
                    <div className='ms-2'>
                        <div>1 заказ</div>
                        <div>Срочно</div>
                    </div>
                </div>
                <div className='orders-filter-btn orders-filter-btn-yellow'>
                    <OclockSvg fill='#fff' width="1.5em" height="1.5em" />
                    <div className='ms-2'>
                        <div>34 заказа</div>
                        <div>Просроченные</div>
                    </div>
                </div>
                <div className='orders-filter-btn orders-filter-btn-black'>
                    <ShopSvg fill='#fff' width="1.5em" height="1.5em" />
                    <div className='ms-2'>
                        <div>119 550 руб</div>
                        <div>Ждут оплаты</div>
                    </div>
                </div>
            </div>

            */}

        </div>
    );
};

export default Orders;