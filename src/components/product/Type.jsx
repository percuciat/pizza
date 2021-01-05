import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";


const Type = React.memo(({dataType, types, changeType, activeType}) => {
    return (
        dataType.map((elem, i) => {
            return (
                <li
                    key={`${elem}_${i}`}
                    onClick={() => changeType(i)}
                    className={classNames({
                        active: activeType === i,
                        disable: !types.includes(i)
                    })}>
                    {elem}
                </li>
                )
            })
        );
});

Type.propTypes = {
    types: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Type;