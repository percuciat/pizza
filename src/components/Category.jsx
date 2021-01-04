import React from 'react';
import PropTypes from 'prop-types';

const Category = React.memo(
    ({items, onClickCategory, activeCategory}) => {
        const changeActive = (i) => {
            onClickCategory(i)
        };

        return <>
            <div className="categories">
                <ul>
                    <li className={activeCategory === null ? 'active' : ''} onClick={() => changeActive(null)}>Все</li>
                    {
                        items?.map((elem, index) => {
                            return <li className={activeCategory === index ? 'active' : ''} key={`${elem}_${index}`} onClick={() => changeActive(index)}>{elem}</li>
                        })
                    }
                </ul>
            </div>
        </>
    }
);

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