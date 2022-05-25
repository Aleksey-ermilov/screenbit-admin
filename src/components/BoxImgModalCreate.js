import React, {useState} from 'react';
import {Image} from "react-bootstrap";

import ArrowTopSvg from "../img/svg/ArrowTopSvg";
import DeleteSvg from "../img/svg/DeleteSvg";

const BoxImgModalCreate = ({deleteFile,setOneElem,file,index,width=150,height=150,sizeSvg='1.5em',className}) => {
    const [isHover, setIsHover]= useState(false)

    const handlerHoverEnter = (e) => {
        setIsHover(true)
    }
    const handlerHoverLeave = (e) => {
        setIsHover(false)
    }
    return (
        <>
            {
                isHover ?
                    <div className={className} >
                        <div
                            className='box-create-modal-hover d-flex justify-content-center align-items-center'
                            onMouseEnter={(e) => handlerHoverEnter(e)}
                            onMouseLeave={(e) => handlerHoverLeave(e)}
                            style={{height,width}}
                        >
                            {
                                index !== 0 &&
                                <div onClick={() => setOneElem(file)} className='me-1'>
                                    <ArrowTopSvg fill={'white'} width={sizeSvg} height={sizeSvg}/>
                                </div>
                            }
                            <div onClick={() => deleteFile(file)}>
                                <DeleteSvg fill={'white'} width={sizeSvg} height={sizeSvg} />
                            </div>
                        </div>
                        <Image src={file.img} width={width} height={height} />
                    </div>
                    :
                    <Image className={className} src={file.img} width={width} height={height}
                           onMouseEnter={(e) => handlerHoverEnter(e)}
                           onMouseLeave={(e) => handlerHoverLeave(e)}
                    />
            }
        </>
    );
};

export default BoxImgModalCreate;