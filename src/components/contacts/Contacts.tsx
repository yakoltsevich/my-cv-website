import React from 'react';
import {
    MY_EMAIL,
    MY_GITHUB_LINK,
    MY_LINKEDIN_LINK,
    MY_TELEGRAM_LINK
} from "../../shared/constants";
import './Contacts.scss'


const TITLE = 'Let\'s keep in touch'
export const Contacts = () => {
    return (
        <div className="contacts" id="contacts">
            <div className="contacts__content">

                <div className="contacts__image">
                    <img src={require('../../shared/images/medium/vitali_with_dog.jpg')} alt="vitali_with_dog"/>
                </div>
                <div className="contacts__contact-data">
                    <div className="contacts__title">
                        <span>{TITLE}</span>
                    </div>
                    <div className="contacts__data-row">
                        Email:&nbsp;<a href={`mailto:${MY_EMAIL}`}>vitpol94@gmail.com</a>
                    </div>
                    <div className="contacts__data-row">
                        Linkedin:&nbsp;<a target="_blank" rel="noreferrer"
                                          href={MY_LINKEDIN_LINK}>linkedin.com/in/yakol</a>
                    </div>
                    <div className="contacts__data-row">
                        Telegram:&nbsp;<a target="_blank" rel="noreferrer"
                                          href={MY_TELEGRAM_LINK}>t.me/kind_grandfather</a>
                    </div>
                    <div className="contacts__data-row">
                        GitHub:&nbsp;<a target="_blank" rel="noreferrer"
                                        href={MY_GITHUB_LINK}>github.com/yakoltsevich</a>
                    </div>
                    <div className="contacts__data-row">
                        Location: Gdansk, Poland (Polish residence permit)
                    </div>
                </div>
            </div>
        </div>
    );
}
