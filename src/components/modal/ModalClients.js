import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";

const ModalClients = ({show,onHide,addClient}) => {
    const [value, setValue] = useState({
        name: '', email: '', phone: '', address: ''
    })
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            addClient(value)
            onHide()
            setValue({
                name: '', email: '', phone: '', address: ''
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
                    Добавить клиента
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="formName" className='mb-2'>
                        <Form.Label className='font-s-18' >Имя, компания</Form.Label>
                        <Form.Control
                            required
                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                            name={'name'}
                            value={value.name}
                            onChange={ e => handlerFormControl(e)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Имя, компания" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formEmail" className='mb-2'>
                        <Form.Label className='font-s-18' >Email</Form.Label>
                        <Form.Control
                            required={!value.phone.trim()}
                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                            name={'email'}
                            type='email'
                            value={value.email}
                            onChange={ e => handlerFormControl(e)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Email" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formPhone" className='mb-2'>
                        <Form.Label className='font-s-18' >Телефон</Form.Label>
                        <Form.Control
                            required={!value.email.trim()}
                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                            name={'phone'}
                            type='tel'
                            value={value.phone}
                            onChange={ e => handlerFormControl(e)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Телефон" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formAddress" className='mb-2'>
                        <Form.Label className='font-s-18' >Адрес</Form.Label>
                        <Form.Control
                            required
                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                            name={'address'}
                            value={value.address}
                            onChange={ e => handlerFormControl(e)}
                        />
                        <Form.Control.Feedback type="invalid">Поле "Адрес" не может быть пустым</Form.Control.Feedback>
                    </Form.Group>

                    <div className='d-flex justify-content-end'>
                        <button
                            className='btn-all btn-regular font-s-16 shadow-mine-hover shadow-inner-my-focus'
                        >Добавить</button>
                    </div>
                </Form>

            </Modal.Body>
        </Modal>
    );
};

export default ModalClients;