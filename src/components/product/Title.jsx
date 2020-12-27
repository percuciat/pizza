import React from 'react';
import PropTypes from 'prop-types';


const Title = ({name}) => {
    return (
        <h4 className="pizza-block__title">{name}</h4>
    )
};

Title.propTypes = {
    name: PropTypes.string.isRequired
};

export default Title;