import React from 'react';
import {
    MY_BACKGROUND,
    MY_EDUCATION,
    MY_LANGUAGES,
    MY_SKILLS_COMMON,
    MY_SKILLS_MAIN
} from "../../shared/constants";
import './AboutMe.scss'

export const AboutMe = () => {
    return (
        <div className="about-me" id="about-me">
            <div className='section'>
                <h6> ― MY BACKGROUND</h6>
                <div className='background-text'>{MY_BACKGROUND}</div>
            </div>
            <div className='section'>
                <h6> ― skills</h6>
                <p><i>Main:</i> {MY_SKILLS_MAIN.map(el => el)}</p>
                <br/>
                <p><i>Common:</i> {MY_SKILLS_COMMON.map(el => el)}</p>
                <br/>
                <p><i>Languages:</i> {MY_LANGUAGES.map(el => el)}</p>
            </div>
            <div className='section'>
                <h6> ― education</h6>
                <div>
                    {MY_EDUCATION.map((el, i) =>
                        <div key={i} className='section-text'>
                            <h5 className='section-text__title'>{el.title}</h5>
                            <div className='section-text__period'>{el.company}&nbsp;/&nbsp;{el.period}</div>
                            <div className='section-text__description'>{el.description}</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
