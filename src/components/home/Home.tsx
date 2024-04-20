import React from 'react';
import {MY_EMAIL, MY_FACEBOOK_LINK, MY_GITHUB_LINK, MY_LINKEDIN_LINK} from "../../shared/constants";
import './Home.scss'

const HOME_TEXT = 'Hi, I am Vitali, a software developer'
export const Home = () => {
    return (
        <div className="home">
            <div className="home__content">
                <div className="home__content-text">
                    <span>{HOME_TEXT}</span>
                </div>
                <div className="home__content-email">
                    <a href={`mailto:${MY_EMAIL}`}> Email me</a>
                </div>
                <div className="home__content-links">
                    <a target="_blank" rel="noreferrer" href={MY_LINKEDIN_LINK}>Linkedin</a>&nbsp;/&nbsp;
                    <a target="_blank" rel="noreferrer" href={MY_GITHUB_LINK}>GitHub</a>&nbsp;/&nbsp;
                    <a target="_blank" rel="noreferrer" href={MY_FACEBOOK_LINK}>Facebook</a>
                </div>
            </div>
            <div className="home__image">
                <img src={require('../../shared/images/medium/vitali_sitting.jpg')} alt="vitali_sitting"/>
            </div>
        </div>
    );
}
