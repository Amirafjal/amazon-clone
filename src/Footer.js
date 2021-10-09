import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer1">
                    <h2>Get to know Us</h2>
                    <li>Careers</li>
                    <li>Blog</li>
                    <li>About Amazon</li>
                    <li>Investor Relations</li>
                    <li>Amazon Devices</li>
                </div>
                {/*  */}
                <div className="footer2">
                    <h2>Make Money with Us</h2>
                    <li>Sell products on Amazon</li>
                    <li>Sell on Amazon business</li>
                    <li>Sell apps on Amazon</li>
                    <li>Become an Affiliate</li>
                    <li>Advertise Your Products</li>
                    <li>Self-Publish with Us</li>
                    <li>Host an Amazon Hub</li>
                    <li>See More Make Money with Us</li>
                </div>
                <div className="footer3">
                    <h2>Amazon Payment Products</h2>
                    <li>Amazon Business Card</li>
                    <li>Shop with Points</li>
                    <li>Reload Your Balance</li>
                    <li>Amazon currency Converter</li>
                </div>
                <div className="footer4">
                    <h2>Let Us Help You</h2>
                    <li>Amazon and COVID-19</li>
                    <li>Your Accounts</li>
                    <li>Your Orders</li>
                    <li>Shipping Rates & Policies</li>
                    <li>Returns & Replacements</li>
                    <li>Manage Your Content and Devices</li>
                    <li>Amazon Assistant</li>

                </div>
            </div>
            <div className="footer__last">
                <div className="footer__last1">
                    <Link to="/">
                        <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
                    </Link>
                </div>
            </div>
            <div className="footer__lastt">

            </div>
        </div>
    );
}
export default Footer;