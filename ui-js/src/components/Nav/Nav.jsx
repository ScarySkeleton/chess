import React from 'react';
import { Link } from 'react-router-dom';

import Tab from '../Tab/Tab';
import './nav.scss';

const links = [
    {
        caption: "Home",
        i: "fa fa-home fa-2x",
    },
    {
        caption: "Lessons",
        i: "fa fa-list fa-2x",
    },
    {
        caption: "Game",
        i: "fa fa-gamepad"
    },
    {
        caption: "History",
        i: "fa fa-bar-chart-o fa-2x",
    }, 
    {
        caption: "Maps",
        i: "fa fa-map-marker fa-2x",
    }, 
    {
        caption: "Documentation",
        i: "fa fa-info fa-2x",
    }
]

const Nav = () => (
    <nav className="container nav">
        <ul className='nav__list'>
            <Tab 
                tabs={links}
                liClassName={'nav__element'}
                spanClassName={'nav__text'}
            />
        </ul>

        <ul className="nav__list-logout">
            <li className='nav__element'>
                <Link to='/logout'>
                    <i className="fa fa-power-off fa-2x"></i>
                    <span className="nav__text">
                        Logout
                    </span>
                </Link>
            </li>  
        </ul>
    </nav>
)

export default Nav;
