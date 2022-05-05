import React from 'react'

import Navigation from './Navigation'
import WebsiteVisitors from './WebsiteVisitors'
import Reviews from './Reviews'
import AverageRating from './AverageRating'
import CSAT from './CSAT'


export default function Dashboard (props) {
    return (
       <div className='dashboard'>
            
            <Navigation />
            
            <div>
            <div className='stat-block'>
                <Reviews />
                <AverageRating />
                <CSAT />
            </div>

                <div className='graph'>
                <WebsiteVisitors />
                </div>
            </div>
                
       </div>
    );
}