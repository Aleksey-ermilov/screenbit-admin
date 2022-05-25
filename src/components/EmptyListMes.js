import React from 'react';

const EmptyListMes = ({mes = 'Список пуст'}) => {
    return (
        <div className='block-center-screen unactive-text font-s-30 d-flex justify-content-center align-items-center'>
            <div>{mes}</div>
        </div>
    );
};

export default EmptyListMes;