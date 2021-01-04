import React from 'react';
import { Category, SortPopup } from "../components";
import { ProductBlock, LoadingProduct } from "../components/product";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryBy, setSortBy } from "../redux/actions/filter";
import { fetchPizzas } from "../redux/actions/pizza";
import { addPizzaToCart } from "../redux/actions/cart";


const dataCategory = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const filterData = [
    {
        name: 'популярности',
        type: 'rating',
        order: 'desc'
    },
    {
        name: 'цене',
        type: 'price',
        order: 'desc'
    },
    {
        name: 'алфавиту',
        type: 'name',
        order: 'asc'
    },
];

const Home = () => {
    const dispatch = useDispatch();
    const  {category, sortBy} = useSelector(({filter222}) => filter222);
    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
        /* return axios.get('http://localhost:3003/pizzas')
             .then(({data}) => dispatch(setPizzas(data)))*/

    }, [category, sortBy]);
    const onSelectItem = React.useCallback ((i) => {
        dispatch(setCategoryBy(i))
    }, []);
    const onSelectSortItem = React.useCallback((i) => {
        dispatch(setSortBy(i))
    }, []);

    const addPizza = React.useCallback ((obj) => {
        dispatch(addPizzaToCart(obj));
    }, []);
    // получаем данные из store
    const  pizzaDataItems = useSelector(({pizza}) => pizza.items);
    const  cartDataItems = useSelector(({cart}) => cart.items);
    const  pizzaLoaded = useSelector(({pizza}) => pizza.isLoaded);
    const  activeCategory = useSelector(({filter222}) => filter222.category);
    const  { type } = useSelector(({filter222}) => filter222.sortBy);

    return (
            <div className="container">
                <div className="content__top">
                    <Category items={dataCategory}
                              onClickCategory={onSelectItem} activeCategory={activeCategory}/>
                    <SortPopup elems={filterData}
                               activeSort={type}
                               onClickSortType={onSelectSortItem}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        pizzaLoaded ?
                                pizzaDataItems.map((item, index) => {
                                return <ProductBlock key={`${item.id}_${index}`}
                                                     item={item}
                                                     index={index}
                                                     onClickAddPizza={addPizza}
                                                     valueCartCount={cartDataItems[item.id]?.items.length}
                                />
                            })
                            : Array(12)
                                .fill(0)
                                .map((item, index) => {
                                return <LoadingProduct key={`${item.id}_${index}`}/>
                            })
                    }
                </div>
            </div>
    );

};


export default Home;