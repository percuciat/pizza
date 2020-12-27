import React, {useEffect, useState} from 'react';
import axios from 'axios';


import { Header} from "./components/";
import {Home, Cart, NotFound} from "./pages/"

import {
  Switch,
  Route,
} from "react-router-dom";

import './scss/app.scss';



// как выглядит модель виртуального дома
let virtualDom = {
  type: 'div',
  props: {
    children: [
      {
        type: 'h1',
        children: 'Hello world'
      }
    ]
  }
};

function App() {
  const [pizzas, setPizzas] = useState([]);
  const data = useEffect(() => {
     return axios.get('http://localhost:3000/db.json')
          .then(({data}) => setPizzas(data.pizzas))
    /*return fetch('http://localhost:3000/db.json')
        .then(r => r.json())
        .then(rJson => {
          setPizzas(rJson.pizzas)
        })*/

  }, []);
  return (
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Switch>
              <Route exact path="/" >
                  <Home pizza={pizzas}/>
              </Route>
            <Route exact path="/cart" component={Cart} />
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
  )
}

export default App;
