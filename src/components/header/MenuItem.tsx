import React from 'react';
import Link from '@mui/material/Link';
import './MenuItem.scss'

type MenuItemProps = {
    label: string,
    anchor: string,
    isBig?: boolean,
    appRef?: React.RefObject<HTMLElement>,
}
export const MenuItem = ({label, anchor, appRef, isBig}: MenuItemProps) => {

    const onClick = () => {
        if (!appRef?.current) return
        const anchorElement: HTMLElement | null = document.querySelector(anchor)
        if (anchorElement) {
            const scrollTo: number = anchorElement?.offsetTop
            appRef.current.scrollTo({
                top: scrollTo,
            })
        }
    }

    return (
        <div className={`menu-item ${isBig ? 'menu-item--big' : ''}`}>
            <Link href='#' onClick={onClick} underline='none'>
                {label}
            </Link>
        </div>
    );
}
