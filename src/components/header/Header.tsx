import React, {useEffect, useState} from 'react';
import {MenuItem} from "./MenuItem";
import {Menu} from "./Menu";
import './Header.scss'

export const Header = ({appRef}: any) => {
    const [headerOn, setHeaderOn] = useState(false)

    useEffect(() => {
        const {current} = appRef
        const handleScroll = () => {
            setHeaderOn(!!current.scrollTop)
        };

        current.addEventListener('scroll', handleScroll, {passive: true});

        return () => current.removeEventListener('scroll', handleScroll);

    }, [appRef]);

    return (
        <div className={`header ${headerOn && 'header--active'}`}>
            <div className="header__content">
                <MenuItem label='home' isBig link='#home'/>
                <div className='flex1'/>
                <Menu/>
                <MenuItem label='about me' forDesktop link='#about-me'/>
                <MenuItem label='experience' forDesktop link='#experience'/>
                <MenuItem label='contacts' forDesktop link='#contacts'/>
            </div>
        </div>
    );
}
