import React from 'react';
import './MenuItem.scss'

type MenuItemProps = {
    label: string,
    link: string,
    isBig?: boolean
}
export const MenuItem = ({label, link, isBig}: MenuItemProps) => {
    return (
        <div className={`menu-item ${isBig && 'menu-item--big'}`}>
            <a href={link}>
                {label}
            </a>
        </div>
    );
}
