import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <h3>Site title</h3>
                <ul>
                    <li>Home</li>
                    <li>Movies</li>
                    <li>Series</li>
                    <li>My Watchlist</li>
                </ul>
                <ul id="temp">
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </div>
        );
    }
}

export default Header;