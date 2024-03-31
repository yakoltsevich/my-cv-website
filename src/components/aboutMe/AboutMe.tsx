import React from 'react';
import './Home.scss'


const HOME_TEXT = 'Hi, I am Brooke, a project manager'

export const Home = () => {
    return (
        <div className="home">
            <div className="home__content">
                <div className="home__content-text">
                    <span>{HOME_TEXT}</span>
                </div>
                <div className="home__content-email">Email Me</div>
                <div className="home__content-links">Linkedin / Facebook / Twitter</div>

            </div>
            <div className="home__image">
                <img src={require('../../shared/images/vitali_sitting.jpg')} alt="vitali_sitting"/>
            </div>
        </div>
    );
}
