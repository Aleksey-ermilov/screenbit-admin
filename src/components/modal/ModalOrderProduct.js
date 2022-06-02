import React, {useState,useEffect} from 'react';
import {Form, Modal} from "react-bootstrap";

const ModalOrderProduct = ({show,onHide,updateOrder}) => {
    const [value, setValue] = useState({
        status: 'Принят в обработку',
        delivery_date: '',
        employees: '',
        warehouse: '',
    })

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        setValue({status: show.item?.status, delivery_date: show.item?.delivery_date ? show.item.delivery_date : ''})
    },[show])

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            if(value.status === 'Заказ выполнен'){
                updateOrder({...show.item,...value,dateReady: Date.now()})
            }else {
                updateOrder({...show.item,...value})
            }

            onHide()
            setValidated(false);
        }
    };

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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
                    {(value.status === 'Заказ выполнен' || value.status === 'В пути') &&
                        <Form.Group controlId="formDeliveryDate" className='mb-2'>
                            <Form.Label className='font-s-18' >Дата доставки</Form.Label>
                            <Form.Control
                                required
                                className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                name={'delivery_date'}
                                type='datetime-local'
                                value={value.delivery_date}
                                onChange={ e => handlerFormControl(e)}
                            />
                            <Form.Control.Feedback type="invalid">Поле "Дата доставки" не может быть пустым</Form.Control.Feedback>
                        </Form.Group>
                    }

                    { value.status === 'Заказ выполнен' &&
                    <>
                        <Form.Group controlId="formEmployees" className='mb-2'>
                            <Form.Label className='font-s-18' >Сотрудник</Form.Label>
                            <Form.Control
                                required
                                className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                name={'employees'}
                                value={value.employees}
                                onChange={ e => handlerFormControl(e)}
                            />
                            <Form.Control.Feedback type="invalid">Поле "Сотрудник" не может быть пустым</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formWarehouse" className='mb-2'>
                            <Form.Label className='font-s-18' >Склад</Form.Label>
                            <Form.Control
                                required
                                className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                name={'warehouse'}
                                value={value.warehouse}
                                onChange={ e => handlerFormControl(e)}
                            />
                            <Form.Control.Feedback type="invalid">Поле "Склад" не может быть пустым</Form.Control.Feedback>
                        </Form.Group>
                    </>

                    }

                    <div className='d-flex justify-content-end'>
                        <button
                            className='btn-all btn-regular font-s-16 shadow-mine-hover shadow-inner-my-focus'
                        >Изменить</button>
                    </div>
                </Form>

            </Modal.Body>
        </Modal>
    );
};

export default ModalOrderProduct;