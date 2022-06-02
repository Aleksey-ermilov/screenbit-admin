import React, {useState,useEffect,useCallback} from 'react';
import {useLocation} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import {Image, Row, Col, Form, Modal} from 'react-bootstrap'

import Header from "../components/Header";
import Loading from "./Loading";

import {httpFullUpdateProduct, httpGetProduct, httpUpdateProduct} from "../http/productApi";

import {setProduct} from "../store/product/actionProduct";
import BoxAddImgModalCreate from "../components/BoxAddImgModalCreate";
import BoxImgModalCreate from "../components/BoxImgModalCreate";
import {backParseCharacteristics, parseCharacteristics} from "../helper";

const ProductCard = () => {
    const {state: {product_id,product} } = useLocation()
    const dispatch = useDispatch()
    const {categories} = useSelector( state => state.product)

    const [loading,setLoading] = useState(false)

    const [prod,setProd] = useState({
        ...product,
        img: product.img.map( (item,i) => ({img: item, id: i})),
        accessories: product.accessories.map( (item,i) => ({title: item, id: i})),
    })
    const [characteristicsCategories,setCharacteristicsCategories] = useState([])
    const [characteristics,setCharacteristics] = useState([])

    const [img,setImg] = useState([])

    const [validated, setValidated] = useState(false);

    useEffect( () => {
        const { char, charCategories } = parseCharacteristics(product.characteristics)
        setCharacteristicsCategories(charCategories)
        setCharacteristics(char)
        httpGetProduct(product_id).then( data => {
            dispatch(setProduct(data))
        }).finally(() => setLoading(false))
    }, [product_id])


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
        }else {
            const accessoriesReady = prod.accessories.map(item => item.title)
            const imgReady = prod.img.filter(item => !item.img.includes('data')).map( item => item.img)
            const { characterist } = backParseCharacteristics(characteristicsCategories,characteristics)

            const formData = new FormData();
            img.forEach(item => formData.append('newImg',item.picture))
            formData.append('oldImg',JSON.stringify(imgReady))
            formData.append('name',prod.name)
            formData.append('product_id',prod.product_id)
            formData.append('brand',prod.brand)
            formData.append('category',prod.category)
            formData.append('type',prod.category)
            formData.append('price',prod.price)
            formData.append('desc',prod.desc)
            formData.append('warehouse_count',prod.warehouse_count)
            formData.append('accessories',JSON.stringify(accessoriesReady))
            formData.append('characteristics',JSON.stringify(characterist))
            formData.append('reviews', JSON.stringify(prod.reviews))

            httpFullUpdateProduct(formData).then( data => {

            })
            setValidated(false);
        }
    };
    const handlerSaveProduct = () => {
        const accessoriesReady = prod.accessories.map(item => item.title)
        const imgReady = prod.img.filter(item => !item.img.includes('data')).map( item => item.img)
        const { characterist } = backParseCharacteristics(characteristicsCategories,characteristics)

        const formData = new FormData();
        img.forEach(item => formData.append('newImg',item.picture))
        formData.append('oldImg',JSON.stringify(imgReady))
        formData.append('name',prod.name)
        formData.append('product_id',prod.product_id)
        formData.append('brand',prod.brand)
        formData.append('category',prod.category)
        formData.append('type',prod.category)
        formData.append('price',prod.price)
        formData.append('desc',prod.desc)
        formData.append('warehouse_count',prod.warehouse_count)
        formData.append('accessories',JSON.stringify(accessoriesReady))
        formData.append('characteristics',JSON.stringify(characterist))
        formData.append('reviews', JSON.stringify(prod.reviews))

        // httpFullUpdateProduct(formData).then( data => {
        //
        // })
    }

    const handlerAddImg = e => {
        const id = Date.now()
        if (e.target.files.length){
            const fr = new FileReader()
            fr.onload = (event) => {
                setProd(prev => ({...prev, img: [...prev.img, {img: event.target.result, id}] }))
                // setFile(prev => [...prev, {img: event.target.result, id: prev.length}] )
            }
            fr.readAsDataURL(e.target.files[0]);
            setImg(prev => [...prev, {picture: e.target.files[0], id }])
            console.log(img)
        }
    }
    const handlerBtnDelete = (file) => {
        setProd(prev => ({ ...prev, img: prev.img.filter(item => item.id !== file.id) }))
        // setFile(prev => prev.filter(item => item.id !== file.id))
        setImg(prev => prev.filter(item => item.id !== file.id) )
    }
    const handlerBtnArrowTop = (file) => {
        setProd(prev => ({ ...prev, img: [file, ...prev.img.filter(item => item.id !== file.id)] }))
        // setFile(prev => [file, ...prev.filter(item => item.id !== file.id)])
    }

    const handlerFormControl = e => {
        setProd(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    const addAccessories = () => {
        setProd(prev => ({...prev, accessories: [...prev.accessories, {title: '', id: Date.now()}]}))
    }
    const changeAccessories = (e,item) => {
        setProd(prev => ({ ...prev, accessories: prev.accessories.map(thing => thing.id === item.id ? {...thing, title: e.target.value} : thing ) }))
    }
    const removeAccessories = (accessory) => {
        setProd(prev => ({ ...prev, accessories: prev.accessories.filter(item => item.id !== accessory.id) }))
    }

    const addCharacteristicsCategories = () => {
        setCharacteristicsCategories(prev => [...prev, {title: '', id: Date.now()}])
    }
    const changeCharacteristicsCategories = (e,item) => {
        setCharacteristicsCategories(prev => prev.map(thing => thing.id === item.id ? {...thing, title: e.target.value} : thing ))
    }
    const removeCharacteristicsCategories = (category) => {
        setCharacteristics(prev => prev.filter(item => item.category !== category.id))
        setCharacteristicsCategories(prev => prev.filter(item => item.id !== category.id))
    }

    const addCharacteristics = (id) => {
        setCharacteristics(prev => [...prev, {title: '',value: '',category: id, id: Date.now()}])
    }
    const changeCharacteristics = (e,item) => {
        setCharacteristics(prev => prev.map(thing => thing.id === item.id ? {...thing, [e.target.name]: e.target.value} : thing ))
    }
    const removeCharacteristics = (characteristic) => {
        setCharacteristics(prev => prev.filter(item => item.id !== characteristic.id ))
    }

    if (loading){
        return <Loading />
    }

    return (
        <div className='pb-5'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Header title={'Редактировать товар'} className='d-flex justify-content-between' >
                    <button
                        type='submit'
                        className='me-5 font-w-100 btn-all btn-regular shadow-mine-hover font-s-24'
                    >Сохранить</button>
                </Header>
                <div className='mx-3'>
                    <Row>
                        <Col sm={{span:3}} >
                            <div className='d-flex justify-content-center'>
                                {
                                    !prod.img.length ?
                                        <BoxAddImgModalCreate
                                            height={'150px'}
                                            width={'150px'}
                                            sizeSvg={'2.5em'}
                                            handlerAddImg={(e) => handlerAddImg(e)}
                                        />
                                        :
                                        <BoxImgModalCreate
                                            deleteFile={handlerBtnDelete}
                                            setOneElem={handlerBtnArrowTop}
                                            file={prod.img[0]}
                                            index={0}
                                            width={150}
                                            height={150}
                                            sizeSvg={'2em'}
                                        />
                                }
                            </div>
                            <div className='d-flex justify-content-center flex-wrap'>
                                {
                                    prod.img.length >= 1 &&
                                    <>
                                        {prod.img.map((item,i) => {
                                            if (i >=1){
                                                return <BoxImgModalCreate
                                                    deleteFile={handlerBtnDelete}
                                                    setOneElem={handlerBtnArrowTop}
                                                    className='m-1'
                                                    file={item}
                                                    index={i}
                                                    width={50}
                                                    height={50}
                                                    sizeSvg={'1.2em'}
                                                    key={item.id}
                                                />
                                            }
                                        })}
                                        {
                                            prod.img.length < 9 &&
                                            <BoxAddImgModalCreate
                                                className='m-1'
                                                sizeSvg={'1em'}
                                                handlerAddImg={(e) => handlerAddImg(e)}
                                            />
                                        }
                                    </>
                                }
                            </div>
                        </Col>
                        <Col className='me-5' >
                            <Form.Group controlId="formName" className='mb-2'>
                                <Form.Label className='font-s-18' >Название товара</Form.Label>
                                <Form.Control
                                    required
                                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                    name={'name'}
                                    value={prod.name}
                                    onChange={ e => handlerFormControl(e)}
                                />
                                <Form.Control.Feedback type="invalid">Поле "Название товара" не может быть пустым</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formBrand" className='mb-2'>
                                <Form.Label className='font-s-18' >Бренд</Form.Label>
                                <Form.Control
                                    required
                                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                    name={'brand'}
                                    value={prod.brand}
                                    onChange={ e => handlerFormControl(e)}
                                />
                                <Form.Control.Feedback type="invalid">Поле "Бренд" не может быть пустым</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formCategorySelect" className='mb-2'>
                                <Form.Label className='font-s-18' >Категория</Form.Label>
                                <Form.Select
                                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                    onChange={ e => handlerFormControl(e)}
                                    name={'category'}
                                    value={prod.category}
                                >
                                    {
                                        categories.map(item =>
                                            <option key={item.id}>{item.name}</option>
                                        )
                                    }
                                </Form.Select>
                            </Form.Group>
                            <Form.Group controlId="formPrice" className='mb-2'>
                                <Form.Label className='font-s-18' >Цена</Form.Label>
                                <Form.Control
                                    required
                                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                    name={'price'}
                                    type='number'
                                    value={prod.price}
                                    onChange={ e => handlerFormControl(e)}
                                />
                                <Form.Control.Feedback type="invalid">Поле "Цена" не может быть пустым</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formDesc" className='mb-2'>
                                <Form.Label className='font-s-18' >Описание</Form.Label>
                                <Form.Control
                                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                    as="textarea"
                                    rows={4}
                                    name={'desc'}
                                    value={prod.desc}
                                    onChange={ e => handlerFormControl(e)}
                                />
                            </Form.Group>
                            <Form.Group controlId="formWarehouseCount" className='mb-2'>
                                <Form.Label className='font-s-18' >Количество товара</Form.Label>
                                <Form.Control
                                    required
                                    className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                    name={'warehouse_count'}
                                    type='number'
                                    value={prod.warehouse_count}
                                    onChange={ e => handlerFormControl(e)}
                                />
                                <Form.Control.Feedback type="invalid">Поле "Количество товара" не может быть пустым</Form.Control.Feedback>
                            </Form.Group>

                            <div className='mb-2'>
                                <button className='btn-all btn-regular mb-2 shadow-mine-hover' onClick={addAccessories}>Добавить аксессуар</button>
                                {
                                    prod.accessories.map((item,i) =>
                                        <Form.Group controlId={`formAccessory${i}`} className='mb-2' key={item.id}>
                                            <Row>
                                                <Col sm={{offset:1,span: 10}} className='mb-1'>
                                                    <Form.Control
                                                        required
                                                        placeholder={'Аксессуар'}
                                                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                                        value={item.title}
                                                        onChange={ e => changeAccessories(e,item)}
                                                    />
                                                    <Form.Control.Feedback type="invalid">Поле "Аксессуар" не может быть пустым</Form.Control.Feedback>
                                                </Col>
                                                <Col sm={{span:1}} >
                                                    <button
                                                        onClick={() => removeAccessories(item)}
                                                        className='btn-all btn-delete-product-modal shadow-mine-hover'
                                                    >X</button>
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                    )
                                }
                            </div>



                            <div className='mb-2'>
                                <button className='btn-all btn-regular mb-2 shadow-mine-hover' onClick={addCharacteristicsCategories}>Добавить характеристики</button>
                                {
                                    characteristicsCategories.map((item,i) =>
                                        <div className='mb-2' key={item.id}>
                                            <Row className='mb-1'>
                                                <Col sm={{offset:1}} className='mb-1'>
                                                    <Form.Group controlId={`formCharacteristicsCategories${i}`}>
                                                        <Form.Control
                                                            required
                                                            placeholder={'Категория характеристики'}
                                                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                                            value={item.title}
                                                            onChange={ e => changeCharacteristicsCategories(e,item)}
                                                        />
                                                        <Form.Control.Feedback type="invalid">Поле "Категория характеристики" не может быть пустым</Form.Control.Feedback>
                                                    </Form.Group>
                                                </Col>
                                                <Col sm={{span:4}} className='d-flex justify-content-end align-items-center'>
                                                    <button
                                                        onClick={() => addCharacteristics(item.id)}
                                                        className='btn-all btn-regular me-2 shadow-mine-hover'
                                                    >Добавить поле</button>
                                                    <button
                                                        onClick={() => removeCharacteristicsCategories(item)}
                                                        className='btn-all btn-delete-product-modal shadow-mine-hover'
                                                    >X</button>
                                                </Col>
                                            </Row>
                                            {
                                                characteristics.filter(i => i.category === item.id).map(thing =>
                                                    <div className='mb-1' key={thing.id}>
                                                        <Row>
                                                            <Col sm={{offset:2}} className='mb-1'>
                                                                <Form.Group controlId={`formCharacteristicsTitle${i}`}>
                                                                    <Form.Control
                                                                        required
                                                                        placeholder={'Наименование'}
                                                                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                                                        name={'title'}
                                                                        value={thing.title}
                                                                        onChange={ e => changeCharacteristics(e,thing)}
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">Поле "Наименование" не может быть пустым</Form.Control.Feedback>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col>
                                                                <Form.Group controlId={`formCharacteristicsValue${i}`}>
                                                                    <Form.Control
                                                                        required
                                                                        placeholder={'Значение'}
                                                                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                                                        name={'value'}
                                                                        value={thing.value}
                                                                        onChange={ e => changeCharacteristics(e,thing)}
                                                                    />
                                                                    <Form.Control.Feedback type="invalid">Поле "Значение" не может быть пустым</Form.Control.Feedback>
                                                                </Form.Group>
                                                            </Col>
                                                            <Col  className='d-flex justify-content-end align-items-center'>
                                                                <button
                                                                    onClick={() => removeCharacteristics(thing)}
                                                                    className='btn-all btn-delete-product-modal shadow-mine-hover'
                                                                >X</button>

                                                            </Col>
                                                        </Row>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    )
                                }

                            </div>


                        </Col>
                    </Row>
                </div>
            </Form>
        </div>
    );
};

export default ProductCard;