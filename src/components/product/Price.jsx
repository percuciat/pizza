import React from 'react';
import PropTypes from 'prop-types';


const Price = ({price}) => {
    return (
        <div className="pizza-block__price">{price} ₽</div>
    )
};

Price.propTypes = {
    price: PropTypes.number.isRequired
};

export default Price;