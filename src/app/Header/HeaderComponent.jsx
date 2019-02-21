import React from 'react';
import { Link } from 'react-router-dom';
import SwitchComponent from '../routes';

const HeaderComponent = () => (
    <div>
        <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>
            </ul>
        </nav>
        {SwitchComponent}
    </div>
);

export default HeaderComponent;