import React from 'react';
import './messages.scss'
import {Link} from 'react-router-dom'

const Messages = () => {

    const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, obcaecati ratione. Tempora vitae perspiciatis laborum, reiciendis sed iste! Facilis repellat debitis maxime. Quam eveniet nihil incidunt aliquid accusantium, aut harum."

    return (
        <div className='messages'>
            <div className="container">
                <div className="title">
                    <h1>Messages</h1>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Buyer</th>
                            <th>Last Messsage</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                        
                        <tr className='active'>
                            <td>John Doe</td>
                            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
                            <td>1 day ago</td>
                            <td>
                                <button>Mark as Read</button>
                            </td>
                        </tr>
                        <tr className='active'>
                            <td>John Doe</td>
                            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
                            <td>1 day ago</td><td>
                                <button>Mark as Read</button>
                            </td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
                            <td>1 day ago</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
                            <td>1 day ago</td>
                        </tr>
                        <tr>
                            <td>John Doe</td>
                            <td><Link to="/message/123" className='link'>{message.substring(0, 100)}...</Link></td>
                            <td>1 day ago</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Messages;
