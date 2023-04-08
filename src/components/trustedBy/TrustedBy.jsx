import React from 'react';
import './trustedBy.scss'
import addidasImg from './img/Addidas-Gray.png'
import netflixImg from './img/netflix.png'
import googleImg from './img/google.png'
import paypalImg from './img/Paypal-Gray.png'
import bmwImg from './img/Bmw-Gray.png'
import twitterImg from './img/twitter.png'

const TrustedBy = () => {
    return (
        <div className='trustedBy'>
            <div className="container">
                <span>Trusted by: </span>
                <img src={paypalImg} alt="" />
                <img src={netflixImg} alt="" />
                <img src={twitterImg} alt="" />
                <img src={googleImg} alt="" />
            </div>
        </div>
    );
}

export default TrustedBy;
