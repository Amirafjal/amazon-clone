import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Header() {
    return (
        <nav className="header">
            {/* logo on the left =>img */}
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            {/* search box */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* 3 links: */}
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello
                            Amir&nbsp;</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
                {/* 2nd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns&nbsp;
                        </span>
                        <span className="header__optionLineTwo">&   Orders</span>
                    </div>
                </Link>
                {/* 3rd link */}
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your
                        </span>
                        <span className="header__optionLineTwo">Prime </span>
                    </div>
                </Link>
                {/* 4th link */}
                <Link to="/checkout"
                    className="header__link">
                    <div className="header__optionBasket">
                        {/* shoping basket icon */}
                        <AddShoppingCartIcon />
                        {/* Number of items in the basket */}
                        <span className="header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>
            </div>
            {/* basket icon with a number on the right */}
        </nav >
    )
}
export default Header;
