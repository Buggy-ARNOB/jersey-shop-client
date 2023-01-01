import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='d-flex App flex-column bg-dark text-white py-4'>
            <img className='footerImage mx-auto' src="https://ogs.gg/wp-content/uploads/2021/10/Jersey-Front-812-300x353.png" alt="" />
            <>
                Trusted Jersey Shop in the town
            </>
            <br />
            <div>
                <span className='me-3 text-white'>All Right Reserved® </span>||<span className='ms-3 text-white'> Copyright Proteted™</span>
            </div>

        </div>
    );
};

export default Footer;