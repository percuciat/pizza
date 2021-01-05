import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";


const Size = React.memo(({dataSize, sizes, changeSize, activeSize}) => {
    return (
        dataSize.map((elem, i) => {
            return <li key={`${elem}_${i}`}
                       className={classNames({
                           active: activeSize === i,
                           disable: !sizes.includes(elem)
                       })}
                       onClick={() => changeSize(i)}>{elem} см.</li>
            })

    )
});

Size.propTypes = {
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired
};

Size.defaultProps = {
    sizes: []
};

export default Size;