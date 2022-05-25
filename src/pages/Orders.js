import React from 'react';
import {Table} from 'react-bootstrap'

import Header from "../components/Header";

import WrenchSvg from "../img/svg/WrenchSvg";
import FireSvg from "../img/svg/FireSvg";
import OclockSvg from "../img/svg/OclockSvg";
import ShopSvg from "../img/svg/ShopSvg";

const Orders = () => {
    return (
        <div>
            <Header title={'Заказы'} />
            {/*<div className='d-flex justify-content-end flex-wrap px-5 mb-3'>
                <div className='orders-filter-btn orders-filter-btn-green '>
                    <WrenchSvg fill='#fff' width="1.5em" height="1.5em" />
                    <div className='ms-2'>
                        <div>6 заказов</div>
                        <div>Мои заказы</div>
                    </div>
                </div>
                <div className='orders-filter-btn orders-filter-btn-red'>
                    <FireSvg fill='#fff' width="1.5em" height="1.5em" />
                    <div className='ms-2'>
                        <div>1 заказ</div>
                        <div>Срочно</div>
                    </div>
                </div>
                <div className='orders-filter-btn orders-filter-btn-yellow'>
                    <OclockSvg fill='#fff' width="1.5em" height="1.5em" />
                    <div className='ms-2'>
                        <div>34 заказа</div>
                        <div>Просроченные</div>
                    </div>
                </div>
                <div className='orders-filter-btn orders-filter-btn-black'>
                    <ShopSvg fill='#fff' width="1.5em" height="1.5em" />
                    <div className='ms-2'>
                        <div>119 550 руб</div>
                        <div>Ждут оплаты</div>
                    </div>
                </div>
            </div>

            <div className='px-3 '>
                <Table className='orders-table' hover >
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Заказ №</th>
                        <th scope="col">Крайний срок</th>
                        <th scope="col">Статус</th>
                        <th scope="col">Изделие</th>
                        <th scope="col">Неисправность</th>
                        <th scope="col">Клиент</th>
                        <th scope="col">Цена</th>
                        <th scope="col">Гарантия/уведомления</th>
                        <th scope="col">Рекламная компания</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>Thornton</td>
                        <td>Thornton</td>
                        <td>Thornton</td>
                        <td>Thornton</td>
                        <td>Thornton</td>
                        <td>Thornton</td>
                    </tr>

                    </tbody>
                </Table>
            </div>*/}

        </div>
    );
};

export default Orders;