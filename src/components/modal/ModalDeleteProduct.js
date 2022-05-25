import React from 'react';
import {Modal} from "react-bootstrap";

const ModalDeleteProduct = ({show,onHide}) => {

    const handlerBtnDelete = () => {
        console.log('DELETE!!!',show.id)
        onHide()
    }
    const handlerBtnCancel = () => {
        onHide()
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
                    Удалить {show.name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Вы действительно хотите удалить {show.name}</p>
                <div className='d-flex justify-content-between'>
                    <button
                        className='btn-all btn-regular font-s-16 shadow-mine-hover shadow-inner-my-focus'
                        onClick={handlerBtnCancel}
                    >Отмена</button>
                    <button
                        className='btn-all btn-delete-product-modal font-s-16 shadow-mine-hover shadow-inner-my-focus'
                        onClick={handlerBtnDelete}
                    >Удалить</button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default ModalDeleteProduct;