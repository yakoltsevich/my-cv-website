import React from 'react';
import './Home.scss'

export const Home = () => {
    return (
        <div className="home">
            <div className="home__content">
                <div>Hi, I am Brooke, a project manager</div>
                <div>Email Me</div>
                <div>Linkedin / Facebook / Twitter</div>

            </div>
            <div className="home__image">
                <img src={require('../shared/images/vitali_sitting.jpg')} alt="vitali_sitting"/>
            </div>
        </div>
    );
}
