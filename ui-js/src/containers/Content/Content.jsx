import React from 'react';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';

import './content.scss';
import Home from '../pages/Home/Home';

let Content = () => (
    <div className='container body-content'>
        <Route path='/' component={Home} /> 
    </div>
);

export default Content = withRouter(Content);
