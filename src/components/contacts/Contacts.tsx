import React from 'react';
import './Contacts.scss'
import {MY_EXPERIENCE} from "../../shared/constants";

export const Experience = () => {
    return (
        <div className="experience" id="experience">
            <div className='section'>
                <div>
                    <h6> ― work experience</h6>
                </div>
                <div>
                    {MY_EXPERIENCE.map(el =>
                        <div className='section-text'>
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
