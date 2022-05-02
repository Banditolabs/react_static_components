import React from 'react'

import Navigation from './components/Navigation'
import WebsiteVisitors from './components/WebsiteVisitors'
import Review from './components/Reviews'
import AverageRating from './components/AverageRating'
import CSAT from './components/CSAT'

export default function (props) {
    return (
       <div>
           <Navigation />
           <WebsiteVisitors />
           <Review />
           <AverageRating />
           <CSAT />
       </div>
    );
}