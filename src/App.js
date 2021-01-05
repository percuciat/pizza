import React from 'react';

import { Header} from "./components/";
import { Home, Cart, NotFound } from "./pages/";

import { Switch, Route } from "react-router-dom";

import './scss/app.scss';


const App = () => {

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch>
                    <Route exact path="/" >
                        <Home />
                    </Route>
                    <Route exact path="/cart" component={Cart} />
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </div>
    )
};

export default App;
