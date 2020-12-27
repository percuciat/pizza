import React from 'react';
import { Category, SortPopup } from "../components";
import { ProductBlock } from "../components/product";

const Home = ({pizza}) => {
    return (
            <div className="container">
                <div className="content__top">
                    <Category items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}/>
                    <SortPopup elems={['популярности', 'цене', 'алфавиту']}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {
                        pizza.map((item, index) => {
                            return <ProductBlock key={`${item.id}_${index}`} item={item} index={index}/>
                        })
                    }
                </div>
            </div>
    );

};


export default Home;