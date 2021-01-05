import React from 'react';
import PropTypes from 'prop-types';

const Category = React.memo(({items, onClickCategory, activeCategory}) => {

    const changeCategory = (i) => {
        return onClickCategory(i)
    };

    return <>
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => changeCategory(null)}>Все</li>
                {
                    items?.map((elem, index) => {
                        return <li className={activeCategory === index ? 'active' : ''}
                                   key={`${elem}_${index}`}
                                   onClick={() => changeCategory(index)}>{elem}</li>
                    })
                }
            </ul>
        </div>
    </>
});

Category.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func,
    activeCategory: PropTypes.number
};

Category.defaultProps = {
    activeCategory: null,
    items: []
};

export default Category;