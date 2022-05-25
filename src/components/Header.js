import React from 'react';

const Header = ({title,children,className, ...props}) => {
    return (
        <div
            className={`shadow-mine p-3 ps-4 mb-5 font-s-24 font-w-100 ${className}`}
            {...props}
        >
            {title}
            {children}
        </div>
    );
};

export default Header;