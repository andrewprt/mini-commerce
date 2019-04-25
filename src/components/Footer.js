import React, { Component } from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom';

//logo can be clicked to go to homepage
class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Link to="/">
                    <div className="footer--logo"></div>
                </Link>

                <div className="footer--text">
                    Copyright © 2019 Andrew Prawira
            </div>
            </div>
        );
    }
}

export default Footer;