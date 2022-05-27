import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import {Modal, Form,Row,Col, InputGroup,DropdownButton,Dropdown,FormControl} from 'react-bootstrap'

import BoxImgModalCreate from "../BoxImgModalCreate";
import BoxAddImgModalCreate from "../BoxAddImgModalCreate";
import {httpCreateProduct} from "../../http/productApi";
import {addProducts} from "../../store/product/actionProduct";

const ModalCreate = ({show,onHide,}) => {
    const dispatch = useDispatch()

    const [file,setFile] = useState([])
    const [img,setImg] = useState([])

    const [accessories,setAccessories] = useState([])

    const [characteristicsCategories,setCharacteristicsCategories] = useState([])
    const [characteristics,setCharacteristics] = useState([])

    const [obj,setObj] = useState({name:'',brand:'',category:'',price:'',desc:'',warehouseCount:''})

    const handlerBtn = () => {
        const accessoriesReady = accessories.map(item => item.title)
        const arr = characteristicsCategories.map(thing => {
            const char = characteristics.filter(item => item.category === thing.id).map(item => [item.title,item.value] )
            return [thing.title, char]
        })

        const formData = new FormData();
        img.forEach(item => formData.append('img',item.picture))
        formData.append('name',obj.name)
        formData.append('brand',obj.brand)
        formData.append('category',obj.category)
        formData.append('type',obj.category)
        formData.append('price',obj.price)
        formData.append('desc',obj.desc)
        formData.append('warehouseCount',obj.warehouseCount)
        formData.append('accessories',JSON.stringify(accessoriesReady))
        formData.append('characteristics',JSON.stringify(arr))

        httpCreateProduct(formData).then(data => {
            dispatch(addProducts(data))
        //     // onHide()
        })
        /*
            name: Galaxy A38
            brand: Samsung
            category: Смартфоны
            type: Смартфоны
            price: 29000
            desc: super puper phone
            warehouse_count: 12
            characteristics: [Зарядное устройство,Наушники]
            accessories: [[Мобильная связь,[Поддержка сетей 2G,GSM 900, GSM 1800, GSM 1900, GSM 850][Поддержка сетей 3G,HSDPA 900, HSDPA 2100, HSDPA 850, HSDPA 1900]]
                        [Экран,[Диагональ экрана (дюйм),6.5][Разрешение экрана,2400x1080]]
                        [Корпус и защита,[Материал корпуса,пластик][Вид защитного покрытия,Corning Gorilla Glass 5]
        */


    }
    const handlerBtnCancel = () => {
        onHide()
        setFile([])
    }

    const handlerFormControl = e => {
        setObj(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    const handlerAddImg = e => {
        const id = Date.now()
        if (e.target.files.length){
            const fr = new FileReader()
            fr.onload = (event) => {
                setFile(prev => [...prev, {img: event.target.result, id: id}] )
            }
            fr.readAsDataURL(e.target.files[0]);
            setImg(prev => [...prev, {picture: e.target.files[0], id }])
        }
    }

    const handlerBtnDelete = (file) => {
        setFile(prev => prev.filter(item => item.id !== file.id))
        setImg(prev => prev.filter(item => item.id !== file.id) )
    }
    const handlerBtnArrowTop = (file) => {
        setFile(prev => [file, ...prev.filter(item => item.id !== file.id)])
    }

    const addAccessories = () => {
        setAccessories(prev => [...prev, {title: '', id: Date.now()}])
    }
    const changeAccessories = (e,item) => {
        setAccessories(prev => prev.map(thing => thing.id === item.id ? {...thing, title: e.target.value} : thing ))
    }
    const removeAccessories = (accessory) => {
        setAccessories(prev => prev.filter(item => item.id !== accessory.id))
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
        setCharacteristics(prev => prev.filter(item => item.id !== characteristic.id))
    }

    return (
        <Modal
            show={show}
            onHide={handlerBtnCancel}
            centered
            contentClassName='modal-all'
            size={'lg'}
        >
            <Modal.Header closeButton className='border-bottom-0 pb-0'>
                <Modal.Title
                    className='font-s-20 fw-normal'
                >
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='mb-3'>
                    <div className='mb-1 d-flex justify-content-center'>
                        {
                            !file.length ?
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
                                    file={file[0]}
                                    index={0}
                                    width={150}
                                    height={150}
                                    sizeSvg={'2em'}
                                />
                        }
                    </div>
                    <div className='d-flex justify-content-center'>
                        {
                            file.length >= 1 &&
                            <>
                                {file.map((item,i) => {
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
                                    file.length < 9 &&
                                    <BoxAddImgModalCreate
                                        className='m-1'
                                        sizeSvg={'1em'}
                                        handlerAddImg={(e) => handlerAddImg(e)}
                                    />
                                }
                            </>
                        }
                    </div>

                </div>
                <Form.Group controlId="formName" className='mb-2'>
                    <Form.Label className='font-s-18' >Название товара</Form.Label>
                    <Form.Control
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        name={'name'}
                        value={obj.name}
                        onChange={ e => handlerFormControl(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formBrand" className='mb-2'>
                    <Form.Label className='font-s-18' >Бренд</Form.Label>
                    <Form.Control
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        name={'brand'}
                        value={obj.brand}
                        onChange={ e => handlerFormControl(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formCategory" className='mb-2'>
                    <Form.Label className='font-s-18' >Категория</Form.Label>
                    <Form.Control
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        name={'category'}
                        value={obj.category}
                        onChange={ e => handlerFormControl(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formPrice" className='mb-2'>
                    <Form.Label className='font-s-18' >Цена</Form.Label>
                    <Form.Control
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        name={'price'}
                        value={obj.price}
                        onChange={ e => handlerFormControl(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formDesc" className='mb-2'>
                    <Form.Label className='font-s-18' >Описание</Form.Label>
                    <Form.Control
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        as="textarea"
                        rows={4}
                        name={'desc'}
                        value={obj.desc}
                        onChange={ e => handlerFormControl(e)}
                    />
                </Form.Group>
                <Form.Group controlId="formWarehouseCount" className='mb-2'>
                    <Form.Label className='font-s-18' >Количество товара</Form.Label>
                    <Form.Control
                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                        name={'warehouseCount'}
                        value={obj.warehouseCount}
                        onChange={ e => handlerFormControl(e)}
                    />
                </Form.Group>

                <div className='mb-2'>
                    <button className='btn-all btn-regular mb-2 shadow-mine-hover' onClick={addAccessories}>Добавить аксессуар</button>
                    {
                        accessories.map((item,i) =>
                            <Form.Group controlId={`formAccessory${i}`} className='mb-2' key={item.id}>
                                <Row>
                                    <Col sm={{offset:1,span: 10}} className='mb-1'>
                                        <Form.Control
                                            placeholder={'Аксессуар'}
                                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                            value={item.title}
                                            onChange={ e => changeAccessories(e,item)}
                                        />
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
                                        <Form.Control
                                            placeholder={'Категория характеристики'}
                                            className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                            value={item.title}
                                            onChange={ e => changeCharacteristicsCategories(e,item)}
                                        />
                                    </Col>
                                    <Col sm={{span:4}} className='d-flex justify-content-end'>
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
                                                    <Form.Control
                                                        placeholder={'Наименование'}
                                                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                                        name={'title'}
                                                        value={thing.title}
                                                        onChange={ e => changeCharacteristics(e,thing)}
                                                    />
                                                </Col>
                                                <Col>
                                                    <Form.Control
                                                        placeholder={'Значение'}
                                                        className='my-form-control shadow-inner-neomorph-focus shadow-mine-hover'
                                                        name={'value'}
                                                        value={thing.value}
                                                        onChange={ e => changeCharacteristics(e,thing)}
                                                    />
                                                </Col>
                                                <Col  className='d-flex justify-content-end'>
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

                {/*<InputGroup className="mb-3">
                    <DropdownButton
                        title="Dropdown"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#">brand 1</Dropdown.Item>
                        <Dropdown.Item href="#">brand 2</Dropdown.Item>
                        <Dropdown.Item href="#">brand 3</Dropdown.Item>
                    </DropdownButton>
                    <FormControl aria-label="Text input with dropdown button" />
                </InputGroup>*/}



                <div className='d-flex justify-content-between mt-5'>
                    <button
                        className='btn-all btn-regular shadow-mine-hover shadow-inner-my-focus font-s-18 py-2'
                        onClick={handlerBtnCancel}
                    >Отмена</button>
                    <button
                        className='btn-all btn-regular shadow-mine-hover shadow-inner-my-focus font-s-18 py-2'
                        onClick={handlerBtn}
                    >Добавить</button>
                </div>

            </Modal.Body>
        </Modal>
    );
};

export default ModalCreate;
/*
    img: {type: DataTypes.TEXT (array),},
    name: {type: DataTypes.STRING, unique: true,,
    brand: {type: DataTypes.STRING,
    category: {type: DataTypes.STRING,
    type: {type: DataTypes.STRING,
    price: {type: DataTypes.STRING,
    desc: {type: DataTypes.TEXT},
    characteristics: {type: DataTypes.JSON,},
    accessories: {type: DataTypes.JSON,},
    warehouse_count
*/

/*
const characteristics = [
    ["Внешний вид",[
        ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
    ],
    ],
    ["Внешний вид", [
        ["Цвет","Черный"],["Материал крышки","Алюминий"],["Материал корпуса","Пластик"]
    ],
    ],
]
*/
