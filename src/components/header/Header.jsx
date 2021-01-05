import React from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from "react-router-dom";
import logoType from "../../scss/assets/img/pizza-logo.svg";
import Button from "./Button";

const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logoType} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>самая вкусная пицца во вселенной</p>
                        </div>
                    </div>
                </Link>
                <div className="header__cart">
                    <Button/>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    logoType: PropTypes.string
};



export default Header;