import React from 'react';
import './MenuItem.scss'

type MenuItemProps = {
    label: string,
    link: string,
    isBig?: boolean,
    forDesktop?: boolean,
}
export const MenuItem = ({label, link, isBig, forDesktop}: MenuItemProps) => {
    return (
        <div className={`menu-item ${isBig ? 'menu-item--big' : ''} ${forDesktop ? 'menu-item--desktop' : ''}`}>
            <a href={link}>
                {label}
            </a>
        </div>
    );
}
