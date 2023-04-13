import React from 'react';
import './myGigs.scss'
import {Link} from 'react-router-dom'

const MyGigs = () => {
    return (
        <div className='myGigs'>
            <div className="container">
                <div className="title">
                    <h1>Gigs</h1>
                    <Link to='/add'>
                        <button>Add New Gig</button>
                    </Link>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Sales</th>
                            <th>Action</th>
                        </tr>
                        
                        <tr>
                            <td>
                                <img src="/img/img1.jpg" alt="" className='img'/>
                            </td>
                            <td>Gig1</td>
                            <td>59.99</td>
                            <td>120</td>
                            <td>
                                <img src="img/delete.png" alt="" className='delete'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/img1.jpg" alt="" className='img'/>
                            </td>
                            <td>Gig1</td>
                            <td>59.99</td>
                            <td>120</td>
                            <td>
                                <img src="img/delete.png" alt="" className='delete'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/img1.jpg" alt="" className='img'/>
                            </td>
                            <td>Gig1</td>
                            <td>59.99</td>
                            <td>120</td>
                            <td>
                                <img src="img/delete.png" alt="" className='delete'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/img1.jpg" alt="" className='img'/>
                            </td>
                            <td>Gig1</td>
                            <td>59.99</td>
                            <td>120</td>
                            <td>
                                <img src="img/delete.png" alt="" className='delete'/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="/img/img1.jpg" alt="" className='img'/>
                            </td>
                            <td>Gig1</td>
                            <td>59.99</td>
                            <td>120</td>
                            <td>
                                <img src="img/delete.png" alt="" className='delete'/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default MyGigs;
