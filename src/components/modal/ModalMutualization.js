import React, {useState} from 'react';
import {Form, Modal} from "react-bootstrap";

const ModalMutualization = ({show,onHide,addMutualization}) => {
    const [value, setValue] = useState({
        name: '', weOwe: '', weShould: '', balance: ''
    })

    const handlerBtnAdd = () => {
        addMutualization(value)
        onHide()
        setValue({
            name: '', weOwe: '', weShould: '', balance: ''
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
                    Добавить взаиморасчёт
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
                        onClick={handlerBtnAdd}
                    >Добавить</button>
                </div>

            </Modal.Body>
        </Modal>
    );
};

export default ModalMutualization;