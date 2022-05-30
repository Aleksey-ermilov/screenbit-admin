import React from 'react';
import {useSelector,useDispatch} from "react-redux";
import {Table} from 'react-bootstrap'

import Header from "../components/Header";
import PlusSvg from "../img/svg/PlusSvg";

const Clients = () => {
    const {clients} = useSelector(state => state.product)
    const dispatch = useDispatch()

    return (
        <div>
            <Header title={'Клиенты'} />
            <div className='d-flex'>
                <div
                    onClick={() => {}}
                    className='orders-filter-btn orders-filter-btn-green shadow-mine-hover mx-3 mb-3'>
                    <PlusSvg fill='#fff' width="1em" height="1em" />
                    <div className='ms-2'>Добавить клиента</div>
                </div>
            </div>
            <div className='px-3'>
                <Table striped bordered hover responsive >
                    <thead>
                    <tr>
                        <th>Имя, компания</th>
                        <th>Email</th>
                        <th>Телефон</th>
                        <th>Адрес</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        !!clients.length &&
                        clients.map((item,i) =>
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

export default Clients;