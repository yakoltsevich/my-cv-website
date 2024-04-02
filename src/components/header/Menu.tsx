import React, {useState} from 'react';
import {MenuItem} from "./MenuItem";
import {ReactComponent as MenuIcon} from "../../shared/icons/menu-icon.svg";
import './Menu.scss'

export const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='menu'>
            <div className='menu__icon-button' onClick={() => setOpen(!open)}>
                <MenuIcon/>
            </div>
            <div className={`menu__list ${open && 'menu__list--open'}`}>
                <MenuItem label='about me' link='#about-me'/>
                <MenuItem label='experience' link='#experience'/>
                <MenuItem label='contacts' link='#contacts'/>
            </div>
        </div>
    );
}
