import React, { useState } from 'react';
import './gigs.scss'
import { gigs } from '../../data'
import GigCard from '../../components/gigCard/GigCard'

const Gigs = () => {

    const [open, setOpen] = useState(false);
    const [sort, setSort] = useState('sales');

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    }

    return (
        <div className='gigs'>
            <div className="container">
                <span className="breadcrumbs"> MARKETPLACE &gt; GRAPHICS & DESIGN &gt; </span>
                <h1>AI Artists</h1>
                <p>
                    Explore the boundaries of art and technology with Marketplace&apos;s AI artists
                </p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input type="text" placeholder='min' />
                        <input type="text" placeholder='max' />
                        <button>Apply</button>
                    </div>
                    <div className="right">
                        <span className='sortBy'>Sort By:</span>
                        <span className='sortType'>{sort === 'sales' ? 'Best Selling' : 'Newest'}</span>
                        <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)}/>
                        {open && <div className="rightMenu">
                            <span onClick={()=>reSort('createdAt')}>Newest</span>
                            <span onClick={()=>reSort('sales')}>Best Selling</span>
                        </div>}
                    </div>
                </div>
                <div className="cards">
                    <div className="cardItem">
                        {gigs.map(gig => (
                        <GigCard key={gig.id} card={gig}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gigs;
