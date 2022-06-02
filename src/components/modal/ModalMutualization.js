import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";

const ModalMutualization = ({show,onHide,addMutualization}) => {
    const [value, setValue] = useState({
        name: '', weOwe: '', weShould: '', balance: ''
    })

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            addMutualization(value)
            onHide()
            setValue({
                name: '', weOwe: '', weShould: '', balance: ''
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
                    Добавить взаиморасчёт
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
                    <Form.Group controlId="formWeOwe" className='mb-2'>
                        <Form.Label className='font-s-18' >Нам должны</Form.Label>
                        <Form.Control
                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                            name={'weOwe'}
                            type='number'
                            value={value.weOwe}
                            onChange={ e => handlerFormControl(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formЦeShould" className='mb-2'>
                        <Form.Label className='font-s-18' >Мы должны</Form.Label>
                        <Form.Control
                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                            name={'weShould'}
                            type='number'
                            value={value.weShould}
                            onChange={ e => handlerFormControl(e)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBalance" className='mb-2'>
                        <Form.Label className='font-s-18' >Баланс</Form.Label>
                        <Form.Control
                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                            name={'balance'}
                            type='number'
                            value={value.balance}
                            onChange={ e => handlerFormControl(e)}
                        />
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

export default ModalMutualization;