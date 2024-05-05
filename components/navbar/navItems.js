import React, { useState } from 'react'
import { useRouter } from 'next/router';
import { ExpandMore } from '@mui/icons-material';

const NavItems = ({isDropdown, to, title, items}) => {
    const { pathname, push } = useRouter();
    const [isHover, setHover] = useState(false)
        
    const isCurrentPath = isDropdown
    ? pathname.split('/').filter((x) => x === items?.title?.toLowerCase()).length > 0
    : to === pathname;

    const shouldDrawLine = isCurrentPath;

    return (
        <div 
            onClick={() => push(to)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={shouldDrawLine ? "border-b-2 border-red-500 relative cursor-pointer font-bold" : "relative border-b-2 border-transparent cursor-pointer font-bold"}
        >
            {title}
            <span hidden={!isDropdown}><ExpandMore/></span>
            {isDropdown && isHover ? (
                <div className='w-64 h-64 bg-white rounded-xl shadow-lg absolute px-3 py-5 space-y-3'>
                    {items.map((item, i) => (
                        <div 
                            key={i}
                            className='text-black font-normal'
                            onClick={() => push(item.route)}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    )
}

export default NavItems