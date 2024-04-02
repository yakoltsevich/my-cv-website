import React from 'react';
import Link from '@mui/material/Link';
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
            <Link href={link} underline='none'>
                {label}
            </Link>
        </div>
    );
}
