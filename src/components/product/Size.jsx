import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";


const Size = ({sizes}) => {
    const availableSizesValue = [26, 30, 40];

    const [size, setSize] = useState(sizes[0]);

    const changeSize = (i) => {
        setSize(i)
    };
    return (
            availableSizesValue.map((elem, i) => {
                return <li key={`${elem}_${i}`}
                           className={classNames({
                               active: size === i,
                               disable: !sizes.includes(elem)
                           })}
                           onClick={() => changeSize(i)}>{elem} см.</li>
            })

    )
};

Size.propTypes = {
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired
};

Size.defaultProps = {
    sizes: []
};

export default Size;