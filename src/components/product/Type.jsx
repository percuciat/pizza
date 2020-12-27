import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";


const Type = ({types}) => {
    const availableTypesValue = ['тонкое', 'традиционное'];
    const [type, setType] = useState(types[0]);

    const change = (i) => {
        setType(i)
    };
    return (
            availableTypesValue.map((elem, i) => {
                return (
                    <li
                        key={`${elem}_${i}`}
                        onClick={() => change(i)}
                        className={classNames({
                            active: type === i,
                            disable: !types.includes(i)
                        })}>
                        {elem}
                    </li>
                )
            })
        );
};

Type.propTypes = {
    types: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Type;