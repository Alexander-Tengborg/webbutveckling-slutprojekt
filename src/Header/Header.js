import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div id="header">
                <div id="header-left">
                    <ul>
                        <li><h3>Site title</h3></li>
                        <li><a>Home</a></li>
                        <li><a>Movies</a></li>
                        <li><a>Series</a></li>
                        <li><a>My Watchlist</a></li>
                    </ul>
                </div>
                <div id="header-right">
                    <ul>
                        <li><input /></li>
                        <li><a>Username</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;