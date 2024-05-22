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

    const eventClick = () => {
        if(to) {
            push(to)
        } else {
            setHover(!isHover)
        }
    }

    return (
        <div 
            onClick={eventClick}
            onMouseEnter={() => setHover(true)}
            className={`flex items-center uppercase relative border-b-2 cursor-pointer font-bold ${shouldDrawLine ? "border-red-500" : "border-transparent"}`}
        >
            {title}
            <span hidden={!isDropdown}><ExpandMore/></span>
            {isDropdown && isHover ? (
                <div
                    onMouseLeave={() => setHover(false)}
                    className='w-64 h-auto bg-white rounded-xl shadow-xl absolute left-0 top-10 py-5 space-y-3'
                >
                    {items.map((item, i) => (
                        <div 
                            key={i}
                            className='text-black font-semibold capitalize hover:bg-primary/40 px-3'
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