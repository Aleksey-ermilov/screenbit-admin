import React, {useEffect, useState} from 'react';
import {Form, Modal} from "react-bootstrap";

const ModalRepairOrder = ({show,onHide,updateRepair}) => {
    const [value, setValue] = useState({
        status: 'Принят в обработку',
        date_repair: '',
        breakage: '',
        repair: '',
        delivery_date: '',
        employees: '',
        warehouse: '',
        price: '',
    })

    const [validated, setValidated] = useState(false);

    useEffect(() => {
        setValue({
            status: show.item?.status,
            date_repair: show.item?.date_repair,
            breakage: show.item?.breakage,
            repair: show.item?.repair,
            delivery_date: show.item?.delivery_date ? show.item.delivery_date : '',
            price: show.item?.price,
        })
    },[show])

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            if(value.status === 'Заказ выполнен'){
                updateRepair({...show.item,...value,dateReady: Date.now()})
            }else {
                updateRepair({...show.item,...value})
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
                            <option>Заказ принят</option>
                            <option>Проводится ремонт</option>
                            <option>В пути</option>
                            <option>Заказ выполнен</option>
                        </Form.Select>
                    </Form.Group>

                    {(value.status === 'Заказ выполнен' || value.status === 'В пути'|| value.status === 'Проводится ремонт') &&
                        <>
                            <Form.Group controlId="formDate_repair" className='mb-2'>
                                <Form.Label className='font-s-18' >Дата окончания ремонта</Form.Label>
                                <Form.Control
                                    required
                                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                    name={'date_repair'}
                                    type='datetime-local'
                                    value={value.date_repair}
                                    onChange={ e => handlerFormControl(e)}
                                />
                                <Form.Control.Feedback type="invalid">Поле "Дата окончания ремонта" не может быть пустым</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBreakage" className='mb-2'>
                                <Form.Label className='font-s-18' >Поломка</Form.Label>
                                <Form.Control
                                    required
                                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                    name={'breakage'}
                                    value={value.breakage}
                                    onChange={ e => handlerFormControl(e)}
                                />
                                <Form.Control.Feedback type="invalid">Поле "Поломка" не может быть пустым</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formRepair" className='mb-2'>
                                <Form.Label className='font-s-18' >Ремонт</Form.Label>
                                <Form.Control
                                    required
                                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                    name={'repair'}
                                    value={value.repair}
                                    onChange={ e => handlerFormControl(e)}
                                />
                                <Form.Control.Feedback type="invalid">Поле "Ремонт" не может быть пустым</Form.Control.Feedback>
                            </Form.Group>
                        </>
                    }


                    {(value.status === 'Заказ выполнен' || value.status === 'В пути') &&
                        <>
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
                            <Form.Group controlId="formPrice" className='mb-2'>
                                <Form.Label className='font-s-18' >Цена</Form.Label>
                                <Form.Control
                                    required
                                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                    name={'price'}
                                    value={value.price}
                                    onChange={ e => handlerFormControl(e)}
                                />
                                <Form.Control.Feedback type="invalid">Поле "Цена" не может быть пустым</Form.Control.Feedback>
                            </Form.Group>
                        </>
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

export default ModalRepairOrder;