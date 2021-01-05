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
    const  pizzaDataItems = useSelector(({pizza}) => pizza.items);
    const  cartDataItems = useSelector(({cart}) => cart.items);
    const  pizzaLoaded = useSelector(({pizza}) => pizza.isLoaded);
    const  {category, sortBy} = useSelector(({filter}) => filter);

    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy]);

    const onSelectCategoryItem = React.useCallback ((name) => {
        dispatch(setCategoryBy(name))
    }, []);

    const onSelectSortItem = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, []);

    const addPizza = React.useCallback ((obj) => {
        dispatch(addPizzaToCart(obj));
    }, []);

    return (
            <div className="container">
                <div className="content__top">
                    <Category items={dataCategory}
                              onClickCategory={onSelectCategoryItem}
                              activeCategory={category}/>
                    <SortPopup elems={filterData}
                               activeSort={sortBy.type}
                               onClickSortType={onSelectSortItem}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <ul className="content__items">
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
                </ul>
            </div>
    );

};


export default Home;