import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Link
} from "react-router-dom";
import logoType from "../../scss/assets/img/pizza-logo.svg";
import Button from "./Button";

class Header extends Component {
    constructor(props) {
        super(props);
        this.changeNum = this.changeNum.bind(this);
    }
    state = {
        arr:  [1,2,3,4]
    };
    changeNum() {
        this.setState({
            arr: [...this.state.arr, 7]
        })
    }

    render() {
        return (
            <div className="header">
                <button onClick={this.changeNum}>click</button>
                <ul>
                    {
                        this.state.arr.map(item => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
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
    }
}

Header.propTypes = {
    logoType: PropTypes.string
};

export default Header;