import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {Form, FormControl} from 'react-bootstrap'
import {useDispatch} from "react-redux";

import {setAuth} from "../store/user/actionUser";

import {WAREHOUSE_ROUTER} from "../consts";
import {httpLoginAdmin} from "../http/userApi";

const Auth = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [login,setLogin] = useState('')
    const [password,setPassword] = useState('')

    const handlerBtnLogin = () => {
        httpLoginAdmin(login,password).then(data => {
            navigate(WAREHOUSE_ROUTER)
            dispatch(setAuth(true))
        })
    }

    return (
        <div className='auth-card shadow-mine'>
            <h3 className='font-s-30 font-w-300 text-center mb-4'>Авторизоваться</h3>
            <Form.Group controlId="formLogin" className='mb-2'>
                <Form.Label className='font-s-18' >Логин</Form.Label>
                <Form.Control
                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                    value={login}
                    onChange={ e => setLogin(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="formPass" className='mb-4'>
                <Form.Label className='font-s-18' >Пароль</Form.Label>
                <Form.Control
                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                    type={'password'}
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                />
            </Form.Group>
            <div className='d-flex justify-content-end'>
                <button
                    onClick={handlerBtnLogin}
                    className='btn-all btn-regular shadow-mine-hover'
                >Войти</button>
            </div>
        </div>
    );
};

export default Auth;