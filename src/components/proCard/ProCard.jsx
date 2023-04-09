import React from 'react';
import './proCard.scss'
import {Link} from 'react-router-dom'

const ProCard = ({proCard}) => {
    return (
        <Link to='/' className='link'>
            <div className='proCard'>
                <img src={proCard.img} alt="" />
                <div className="info">
                    <img src={proCard.pp} alt="" />
                    <div className="texts">
                        <h2>{proCard.cat}</h2>
                        <span>{proCard.username}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ProCard;
