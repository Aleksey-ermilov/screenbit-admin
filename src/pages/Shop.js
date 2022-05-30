import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Table} from "react-bootstrap";

import ModalShop from "../components/modal/ModalShop";

import Header from "../components/Header";

import PlusSvg from "../img/svg/PlusSvg";
import {setSales} from "../store/product/actionProduct";
import {httpCreateShop, httpGetShop} from "../http/productApi";

const Shop = () => {
    const {sales} = useSelector(state => state.product)
    const dispatch = useDispatch()

    const [isShowModalShop,setIsShowModalShop] = useState(false)

    const option = { year: 'numeric', month: 'numeric', day: 'numeric',hour:'numeric',minute:'numeric' }

    useEffect(() => {
        httpGetShop().then(date => {
            dispatch(setSales(date.shop))
        })
    },[])

    const handlerAddShop = value => {
        httpCreateShop(value).then(date => {
            dispatch(setSales([date.newShop, ...sales]))
        })
    }

    return (
        <div>
            <Header title={'Продажи'} />
            <div className='d-flex'>
                <div
                    onClick={() => setIsShowModalShop(true) }
                    className='orders-filter-btn orders-filter-btn-green shadow-mine-hover mx-3 mb-3'>
                    <PlusSvg fill='#fff' width="1em" height="1em" />
                    <div className='ms-2'>Продажа</div>
                </div>
            </div>
            <div className='px-3'>
                <Table striped bordered hover responsive >
                    <thead>
                    <tr>
                        <th>Продажа №</th>
                        <th>Дата и время</th>
                        <th>Сотрудник</th>
                        <th>Склад</th>
                        <th>Сумма, руб</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        !!sales.length &&
                        sales.map((item,i) =>
                            <tr key={i}>
                                <td>{item.shop_id}</td>
                                <td>{new Date(item.date).toLocaleDateString('ru-RU',option)}</td>
                                <td>{item.employees}</td>
                                <td>{item.warehouse}</td>
                                <td>{item.summa}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
            <ModalShop addShop={handlerAddShop} show={isShowModalShop} onHide={() => setIsShowModalShop(false)} />
        </div>
    );
};

export default Shop;