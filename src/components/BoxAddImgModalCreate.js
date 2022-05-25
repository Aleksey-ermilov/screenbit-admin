import React from 'react';
import PlusSvg from "../img/svg/PlusSvg";

const BoxAddImgModalCreate = ({handlerAddImg,sizeSvg='2.5em',width='50px',height='50px',className}) => {
    return (
        <label className={`${className} cursor-pointer shadow-mine-hover`}>
            <div
                style={{width:width,height:height}}
                className='modal-create-product-box-img d-flex justify-content-center align-items-center'>
                <PlusSvg width={sizeSvg} height={sizeSvg} fill='#767676'/>
            </div>
            <input
                accept="image/*"
                type="file"
                onChange={(e) => handlerAddImg(e)}
            />
        </label>
    );
};

export default BoxAddImgModalCreate;