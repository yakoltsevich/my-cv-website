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
                <MenuItem appRef={appRef} label='home' isBig anchor='#home'/>
                <div className='flex1'/>
                <MenuItem appRef={appRef} label='about me' anchor='#about-me'/>
                <MenuItem appRef={appRef} label='experience' anchor='#experience'/>
                <MenuItem appRef={appRef} label='contacts' anchor='#contacts'/>
            </div>
        </div>
    );
}
