import React, {useRef} from 'react';
import {Header} from "./components/header/Header";
import {Home} from "./components/home/Home";
import {AboutMe} from "./components/aboutMe/AboutMe";
import {Experience} from "./components/experience/Experience";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";
import './App.scss';

export const App = () => {
    const appRef = useRef(null)
    return (
        <div ref={appRef} className="App">
            <div className='anchor'  id="home"/>
            <Header appRef={appRef}/>
            <Home/>
            <AboutMe/>
            <Experience/>
            <Contacts/>
            <Footer/>
        </div>
    );
}
