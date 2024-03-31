import React from 'react';
import './Footer.scss'
import {AGREE_TO_PERSONAL_DATA} from "../../shared/constants";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
                {AGREE_TO_PERSONAL_DATA}
            </div>
        </div>
    );
}
