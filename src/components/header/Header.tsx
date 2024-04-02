import React, {useEffect, useState} from 'react';
import {MenuItem} from "./MenuItem";
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
                <MenuItem label='about me' link='#about-me'/>
                <MenuItem label='experience' link='#experience'/>
                <MenuItem label='contacts' link='#contacts'/>
            </div>
        </div>
    );
}
