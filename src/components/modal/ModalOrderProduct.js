import React, {useState,useEffect} from 'react';
import {Form, Modal} from "react-bootstrap";

const ModalOrderProduct = ({show,onHide,updateOrder}) => {
    const [value, setValue] = useState({
        status: 'Принят в обработку',
        delivery_date: '',
        employees: '',
        warehouse: '',
    })

    useEffect(() => {
        setValue({status: show.item?.status, delivery_date: show.item?.delivery_date ? show.item.delivery_date : ''})
    },[show])

    const handlerBtnUpdate = () => {
        if(value.status === 'Заказ выполнен'){
            updateOrder({...show.item,...value,dateReady: Date.now()})
        }else {
            updateOrder({...show.item,...value})
        }

        onHide()
    }

    const handlerFormControl = e => {
        setValue(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    return (
        <Modal
            show={show.show}
            onHide={onHide}
            centered
            contentClassName='modal-all'
        >
            <Modal.Header closeButton className='border-bottom-0 pb-0'>
                <Modal.Title
                    className='font-s-20 fw-normal'
                >
                    Обработка заказа
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formStatus" className='mb-2'>
                    <Form.Label className='font-s-18' >Статус заказа</Form.Label>
                    <Form.Select
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        onChange={ e => handlerFormControl(e)}
                        name={'status'}
                        value={value.status}
                    >
                        <option>Принят в обработку</option>
                        <option>Заказ собирается на складе</option>
                        <option>В пути</option>
                        <option>Заказ выполнен</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group controlId="formDeliveryDate" className='mb-2'>
                    <Form.Label className='font-s-18' >Дата доставки</Form.Label>
                    <Form.Control
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        name={'delivery_date'}
                        type='datetime-local'
                        value={value.delivery_date}
                        onChange={ e => handlerFormControl(e)}
                    />
                </Form.Group>

                { value.status === 'Заказ выполнен' &&
                    <>
                        <Form.Group controlId="formEmployees" className='mb-2'>
                            <Form.Label className='font-s-18' >Сотрудник</Form.Label>
                            <Form.Control
                                className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                name={'employees'}
                                value={value.employees}
                                onChange={ e => handlerFormControl(e)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formWarehouse" className='mb-2'>
                            <Form.Label className='font-s-18' >Склад</Form.Label>
                            <Form.Control
                                className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                name={'warehouse'}
                                value={value.warehouse}
                                onChange={ e => handlerFormControl(e)}
                            />
                        </Form.Group>
                    </>

                }

                <div className='d-flex justify-content-end'>
                    <button
                        className='btn-all btn-regular font-s-16 shadow-mine-hover shadow-inner-my-focus'
                        onClick={handlerBtnUpdate}
                    >Изменить</button>
                </div>

            </Modal.Body>
        </Modal>
    );
};

export default ModalOrderProduct;