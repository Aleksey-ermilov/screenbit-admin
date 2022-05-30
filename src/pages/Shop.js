import React from 'react';
import Header from "../components/Header";
import {useDispatch, useSelector} from "react-redux";
import PlusSvg from "../img/svg/PlusSvg";
import {Table} from "react-bootstrap";

const Shop = () => {
    const {sales} = useSelector(state => state.product)
    const dispatch = useDispatch()

    return (
        <div>
            <Header title={'Продажи'} />
            <div className='d-flex'>
                <div
                    onClick={() => {}}
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
                                <td>{item.status}</td>
                                <td>{item.name}</td>
                                <td>{item.category}</td>
                                <td>{+item.price * item.count}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Shop;