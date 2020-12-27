import React from 'react';
import PropTypes from 'prop-types';


const Image = ({imageUrl}) => {
    return (
        <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
        />
    )
};

Image.propTypes = {
    imageUrl: PropTypes.string.isRequired
};

export default Image;