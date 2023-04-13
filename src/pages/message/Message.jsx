import React from 'react';
import './message.scss'
import {Link} from 'react-router-dom'

const Message = () => {
    return (
        <div className='message'>
            <div className="container">
                <span className='breadcrumbs'>
                    <Link to="/messages" className="link">MESSAGES </Link> &gt; JOHN DOE &gt; 
                </span>
                <div className="messages">
                    <div className="item">
                        <img src="/img/square.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem placeat officia molestias vitae laboriosam cupiditate, quo optio maxime dolor?</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/insta.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem placeat officia molestias vitae laboriosam cupiditate, quo optio maxime dolor?</p>
                    </div>
                    <div className="item">
                        <img src="/img/square.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem placeat officia molestias vitae laboriosam cupiditate, quo optio maxime dolor?</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/insta.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem placeat officia molestias vitae laboriosam cupiditate, quo optio maxime dolor?</p>
                    </div>
                    <div className="item">
                        <img src="/img/square.jpg" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem placeat officia molestias vitae laboriosam cupiditate, quo optio maxime dolor?</p>
                    </div>
                    <div className="item owner">
                        <img src="/img/insta.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rem placeat officia molestias vitae laboriosam cupiditate, quo optio maxime dolor?</p>
                    </div>
                </div>
                <hr />
                <div className="write">
                    <textarea name="" placeholder='Write a message...' id="" cols="30" rows="10"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Message;
