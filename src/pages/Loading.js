import React from 'react';

import Logo from "../img/svg/Logo";

const Loading = () => {
    return (
        <div className='loading d-flex justify-content-center align-items-center'>
             <div >
                 <Logo className='mb-4' height={160} width={155} />
                 <div className='font-s-20 secondary-text text-center '>Загрузка...</div>
             </div>
        </div>
    );
};

export default Loading;