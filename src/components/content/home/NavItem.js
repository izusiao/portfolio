import React from 'react';
import './NavItem.css';
import { Link } from 'react-router-dom';

const NavItem = (props) => {
    return(
        <Link className="nav-item" to={`/${props.link}`}>
            {props.name}
        </Link>
    );
}

export default NavItem;