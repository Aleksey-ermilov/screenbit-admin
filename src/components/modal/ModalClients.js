import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";

const ModalClients = ({show,onHide,addClient}) => {
    const [value, setValue] = useState({
        name: '', email: '', phone: '', address: ''
    })

    const handlerBtnAdd = () => {
        addClient(value)
        onHide()
        setValue({
            name: '', email: '', phone: '', address: ''
        })
    }

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
                    Добавить клиента
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="formName" className='mb-2'>
                    <Form.Label className='font-s-18' >Имя, компания</Form.Label>
                    <Form.Control
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        name={'name'}
                        value={value.name}
                        onChange={ e => handlerFormControl(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formEmail" className='mb-2'>
                    <Form.Label className='font-s-18' >Email</Form.Label>
                    <Form.Control
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        name={'email'}
                        type='email'
                        value={value.email}
                        onChange={ e => handlerFormControl(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formPhone" className='mb-2'>
                    <Form.Label className='font-s-18' >Телефон</Form.Label>
                    <Form.Control
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        name={'phone'}
                        type='tel'
                        value={value.phone}
                        onChange={ e => handlerFormControl(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formAddress" className='mb-2'>
                    <Form.Label className='font-s-18' >Адрес</Form.Label>
                    <Form.Control
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        name={'address'}
                        value={value.address}
                        onChange={ e => handlerFormControl(e)}
                    />
                </Form.Group>

                <div className='d-flex justify-content-end'>
                    <button
                        className='btn-all btn-regular font-s-16 shadow-mine-hover shadow-inner-my-focus'
                        onClick={handlerBtnAdd}
                    >Добавить</button>
                </div>

            </Modal.Body>
        </Modal>
    );
};

export default ModalClients;