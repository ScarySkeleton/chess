import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tab = ({ tabs, liClassName, spanClassName }) => (
    <div className='container tabs'>
        {
            tabs.map(function(element, index) {
                return (
                    <li className={liClassName} key={index}>
                        <Link
                            to={ '/' + element.caption }>
                            <i className={element.i}></i>
                            <span className={spanClassName}>
                                { element.caption }
                            </span>
                        </Link>
                    </li>
                )
            })
        }
    </div>
);

Tab.propTypes = {
    tabs: PropTypes.array.isRequired,
}
Tab.defaultProps = {
    liClassName: 'list__element',
    spanClassName: 'list__text',
}

export default Tab;
