import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";

const ModalShop = ({show,onHide,addShop}) => {
    const [value, setValue] = useState({
        shop_id: '', date: '', employees: '', warehouse: '', summa: ''
    })
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            addShop(value)
            onHide()
            setValue({
                shop_id: '', date: '', employees: '', warehouse: '', summa: ''
            })
            setValidated(false);
        }
    };

    const handlerFormControl = e => {
        setValue(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            contentClassName='modal-all'
        >
            <Modal.Header closeButton className='border-bottom-0 pb-0'>
                <Modal.Title
                    className='font-s-20 fw-normal'
                >
                    Добавить продажи
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formShopId" className='mb-2'>
                        <Form.Label className='font-s-18' >Номер продажи</Form.Label>
                        <Form.Control
                            required
                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                            name={'shop_id'}
                            value={value.shop_id}
                            onChange={ e => handlerFormControl(e)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Номер продаж" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formDate" className='mb-2'>
                        <Form.Label className='font-s-18' >Дата и время</Form.Label>
                        <Form.Control
                            required
                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                            name={'date'}
                            type='datetime-local'
                            value={value.date}
                            onChange={ e => handlerFormControl(e)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Дата и время" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>
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
                    <Form.Group controlId="formSumma" className='mb-2'>
                        <Form.Label className='font-s-18' >Сумма</Form.Label>
                        <Form.Control
                            required
                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                            name={'summa'}
                            type='number'
                            value={value.summa}
                            onChange={ e => handlerFormControl(e)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Сумма" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>

                    <div className='d-flex justify-content-end'>
                        <button
                            className='btn-all btn-regular font-s-16 shadow-mine-hover shadow-inner-my-focus'
                            type="submit"
                        >Добавить</button>
                    </div>
                </Form>

            </Modal.Body>
        </Modal>
    );
};

export default ModalShop;