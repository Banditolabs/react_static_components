import React from 'react'

import Navigation from './Navigation'
import WebsiteVisitors from './WebsiteVisitors'
import Reviews from './Reviews'
import AverageRating from './AverageRating'
import CSAT from './CSAT'

export default function Dashboard (props) {
    return (
       <div>
           <Navigation />
           <WebsiteVisitors />
           <Reviews />
           <AverageRating />
           <CSAT />
       </div>
    );
}