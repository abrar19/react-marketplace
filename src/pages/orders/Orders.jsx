import React from 'react';
import './orders.scss'
import {Link} from 'react-router-dom'

const Orders = () => {
    return (
        <div className='orders'>
            <div className="container">
                <div className="title">
                    <h1>Orders</h1>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Buyer</th>
                            <th>Contact</th>
                        </tr>
                        
                        <tr>
                            <td>
                                <img src="/img/img2.jpg" alt="" className='img'/>
                            </td>
                            <td>Gig1</td>
                            <td>59.99</td>
                            <td>John Doe</td>
                            <td>
                                <img src="img/message.png" alt="" className='message'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/img2.jpg" alt="" className='img'/>
                            </td>
                            <td>Gig1</td>
                            <td>59.99</td>
                            <td>John Doe</td>
                            <td>
                                <img src="img/message.png" alt="" className='message'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/img2.jpg" alt="" className='img'/>
                            </td>
                            <td>Gig1</td>
                            <td>59.99</td>
                            <td>John Doe</td>
                            <td>
                                <img src="img/message.png" alt="" className='message'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/img2.jpg" alt="" className='img'/>
                            </td>
                            <td>Gig1</td>
                            <td>59.99</td>
                            <td>John Doe</td>
                            <td>
                                <img src="img/message.png" alt="" className='message'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/img2.jpg" alt="" className='img'/>
                            </td>
                            <td>Gig1</td>
                            <td>59.99</td>
                            <td>John Doe</td>
                            <td>
                                <img src="img/message.png" alt="" className='message'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Orders;
