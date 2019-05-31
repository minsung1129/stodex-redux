import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Nav extends Component {
    render() {
        return (
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link className="btn btn-dark" to="/exchange">Exchange</Link>
                </li>
                <li className="nav-item">
                    <Link className="btn btn-dark" to="/account" >Account</Link>
                </li>
            </ul>
        );
    }
}

export default Nav;
