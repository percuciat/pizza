import React, { useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
// import {connect} from 'react-redux'
// import axios from 'axios';

import { Header} from "./components/";
import { Home, Cart, NotFound } from "./pages/"
 import { fetchPizzas } from "./redux/actions/pizza";

import { Switch, Route } from "react-router-dom";

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

const App = () => {
    // const[pizzas, setPizzas] = useState([]);
    // функция для передачи данных в redux (store)


    // получает данные из store
    // передавать конкретные данные
   /* const render = useSelector(({pizza}) => {
        return {
            pizza: state.pizza.items,
        }
    });
    */
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

/*
class App extends Component {
    componentDidMount() {
        return axios.get('http://localhost:3000/db.json')
            .then(({data}) => {
                // this.props.dispatch(setPizzas(data.pizzas));
                this.props.setPizzas(data.pizzas)
            });
    }

    // const [pizzas, setPizzas] = useState([]);
 /!* const data = useEffect(() => {
     return axios.get('http://localhost:3000/db.json')
          .then(({data}) => setPizzas(data.pizzas))
    /!*return fetch('http://localhost:3000/db.json')
        .then(r => r.json())
        .then(rJson => {
          setPizzas(rJson.pizzas)
        })*!/

  }, []);*!/
 render() {
     console.log(this.props);
     return (
         <div className="wrapper">
             <Header/>
             <div className="content">
                 <Switch>
                     <Route exact path="/" >
                         <Home pizza={this.props.pizza33}/>
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
}


// возвращает данные из хранилища (store) rootReducer
const mapStateToProps = (state) => {
    console.log(state)
    return {
        pizza33: state.pizza.items,
        filter: state.filter222,
    }
};


//возвращает actions для конкретного компонента
/!*const mapDispatchToProps = (dispatch) => {
   return {
       setPizzas: (items) => {
           dispatch(setPizzas(items))
       }
   }
};*!/
// возвращает actions для конкретного компонента
const mapDispatchToProps = { setPizzas };

export default connect(mapStateToProps, mapDispatchToProps)(App);*/
export default App;
