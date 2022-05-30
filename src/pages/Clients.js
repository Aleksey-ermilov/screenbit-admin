import React, {useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {Table} from 'react-bootstrap'

import ModalClients from "../components/modal/ModalClients";

import Header from "../components/Header";

import PlusSvg from "../img/svg/PlusSvg";
import {setClients} from "../store/product/actionProduct";
import {httpCreateClients, httpGetClients} from "../http/productApi";

const Clients = () => {
    const {clients} = useSelector(state => state.product)
    const dispatch = useDispatch()

    const [isShowModalClients,setIsShowModalClients] = useState(false)

    useEffect(() => {
        httpGetClients().then(date => {
            dispatch(setClients(date.clients))
        })
    },[])

    const handlerAddClients = value => {
        httpCreateClients(value).then(date => {
            dispatch(setClients([date.newClient,...clients]))
        })
    }

    return (
        <div>
            <Header title={'Клиенты'} />
            <div className='d-flex'>
                <div
                    onClick={() => setIsShowModalClients(true)}
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
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
            <ModalClients addClient={handlerAddClients} show={isShowModalClients} onHide={() => setIsShowModalClients(false)} />
        </div>
    );
};

export default Clients;