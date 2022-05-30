import React, {useState} from 'react';
import {ListGroup, Tab, Card, Table,Row,Col} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

import ModalMutualization from "../components/modal/ModalMutualization";

import Header from "../components/Header";

import PlusSvg from "../img/svg/PlusSvg";
import {setMutualSettlements} from "../store/product/actionProduct";

const Payments = () => {
    const {cashDesk,mutualSettlements} = useSelector(state => state.product)
    const dispatch = useDispatch()

    const [isShowModalMutualization,setIsShowModalMutualization] = useState(false)

    const handlerAddMutualization = value => {
        console.log(11,value)
        dispatch(setMutualSettlements([value, ...mutualSettlements]))
    }

    return (
        <div>
            <Header title={'Финансы'} />
            <div className='px-3'>
                <Tab.Container defaultActiveKey="#repair">
                    <div className='d-flex'>
                        <ListGroup horizontal>
                            <ListGroup.Item
                                action
                                href="#repair"
                                className='z-index-0 font-s-14 pb-2 list-group-payments'
                            >
                                Платежи
                            </ListGroup.Item>

                            <ListGroup.Item
                                action
                                href="#orders"
                                className='z-index-0 font-s-14 pb-2 list-group-payments'
                            >
                                Взаиморасчёты
                            </ListGroup.Item>
                        </ListGroup>
                    </div>

                    <div className='p-3' >
                        <Tab.Content className='mt-3' >
                            <Tab.Pane eventKey="#repair">
                                <Row>
                                    <Col sm={{span:2}}>
                                        <Card className='p-3 font-s-14'>
                                            <div className='text-center font-s-16'>Касса</div>
                                            <div className='text-center mb-3 font-s-24'>0</div>
                                            <div className='d-flex mb-2 justify-content-center flex-wrap'>
                                                <div
                                                    className='mb-1 payments-cash-desk-btn orders-filter-btn-green cursor-pointer shadow-mine-hover'
                                                >
                                                    + Приход
                                                </div>
                                                <div
                                                    className='ms-2 payments-cash-desk-btn orders-filter-btn-red cursor-pointer shadow-mine-hover'
                                                >
                                                    - Расход
                                                </div>
                                            </div>
                                            <div className='d-flex justify-content-center'>
                                                <div
                                                    className='payments-cash-desk-btn-moving cursor-pointer shadow-mine-hover'
                                                >
                                                    Перемещение
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                    <Col className='ms-3'>
                                        <Table striped bordered hover responsive

                                        >
                                            <thead>
                                            <tr>
                                                <th>Создана</th>
                                                <th>Комментарий</th>
                                                <th>Приход, руб</th>
                                                <th>Расход, руб</th>
                                                <th>Баланс, руб</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                !!cashDesk.length &&
                                                cashDesk.map((item,i) =>
                                                    <tr key={i}>
                                                        <td>
                                                            <div>{item.name}</div>
                                                            <div>{item.date}</div>
                                                        </td>
                                                        <td>{item.comment}</td>
                                                        <td>{item.arrivedCash}</td>
                                                        <td>{item.consumption}</td>
                                                        <td>{item.balance}</td>
                                                    </tr>
                                                )
                                            }
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="#orders">
                                <div className='ms-3'>
                                    <div className='d-flex'>
                                        <div
                                            onClick={() => setIsShowModalMutualization(true) }
                                            className='orders-filter-btn orders-filter-btn-green shadow-mine-hover mx-3 mb-3'>
                                            <PlusSvg fill='#fff' width="1em" height="1em" />
                                            <div className='ms-2'>Добавить</div>
                                        </div>
                                    </div>
                                    <Table striped bordered hover responsive

                                    >
                                        <thead>
                                        <tr>
                                            <th>Имя/компания</th>
                                            <th>Нам должны, руб</th>
                                            <th>Мы должны, руб</th>
                                            <th>Баланс, руб</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            !!mutualSettlements.length &&
                                            mutualSettlements.map((item,i) =>
                                                <tr key={i}>
                                                    <td>{item.name}</td>
                                                    <td>{item.weOwe}</td>
                                                    <td>{item.weShould}</td>
                                                    <td>{item.balance}</td>
                                                </tr>
                                            )
                                        }
                                        </tbody>
                                    </Table>
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>

                </Tab.Container>
            </div>
            <ModalMutualization addMutualization={handlerAddMutualization} show={isShowModalMutualization} onHide={() => setIsShowModalMutualization(false)} />
        </div>
    );
};

export default Payments;