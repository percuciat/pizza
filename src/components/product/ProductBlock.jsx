import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Image, Title, Price, Type, Size } from "../product";

const availableSizesValue = [26, 30, 40];
const availableTypesValue = ['тонкое', 'традиционное'];

const ProductBlock = React.memo(({item: {id, name, sizes, imageUrl, price, types}, index, onClickAddPizza, valueCartCount }) => {

    const [size, setSize] = useState(0);

    const changeSize = (i) => {
        setSize(i)
    };


    const [type, setType] = useState(types[0]);

    const changeType = (i) => {
        setType(i)
    };

    const handelAddPizza = () => {
        const data = {
            id,
            name,
            imageUrl,
            price,
            size: availableSizesValue[size],
            type: availableTypesValue[type]
        };
        return onClickAddPizza(data)
    };
    return (
        <li key={`${id}_${index}`} className="pizza-block">
            <Image imageUrl={imageUrl}/>
            <Title name={name}/>
            <div className="pizza-block__selector">
                <ul>
                    <Type dataType={availableTypesValue}
                          types={types}
                          activeType={type}
                          changeType={changeType} />
                </ul>
                <ul>
                    <Size dataSize={availableSizesValue}
                          sizes={sizes}
                          activeSize={size}
                          changeSize={changeSize}/>
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <Price price={price}/>
                <button className="button button--outline button--add" onClick={handelAddPizza}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {
                        valueCartCount && <i>{valueCartCount}</i>
                    }
                </button>
            </div>
        </li>
    )
});

ProductBlock.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    loaded: PropTypes.bool,
    valueCartCount: PropTypes.number
};

ProductBlock.defaultProps = {
    loaded: false,
};

export default ProductBlock;