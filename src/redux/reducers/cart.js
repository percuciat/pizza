import {
    ADD_PIZZA_CART,
    RESET_CART,
    REMOVE_CART_ITEM,
    MINUS_CART_ITEM,
    PLUS_CART_ITEM
} from "../types"

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const getTotalPrice = arr => arr.reduce((acc, elem) => {
    return acc + elem.price
},  0);

export default function cart(state = initialState, action) {
    switch (action.type) {

        case ADD_PIZZA_CART: {
            const currentPizzaData = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newObj = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaData,
                    totalPrice: getTotalPrice(currentPizzaData),
                }
            };
            return {
                ...state,
                items: newObj,
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + action.payload.price
            };
        }

        case REMOVE_CART_ITEM: {
            const newItems = {
                ...state.items
            };
            const totalCountDeleteItem = newItems[action.payload].items.length;
            const totalPriceDeleteItem = newItems[action.payload].totalPrice;

            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalCount: state.totalCount - totalCountDeleteItem,
                totalPrice: state.totalPrice - totalPriceDeleteItem
            };
        }

        case PLUS_CART_ITEM: {
            const newItem = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ];
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItem,
                        totalPrice: getTotalPrice(newItem)
                    }
                },
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + newItem[0].price
            };
        }

        case MINUS_CART_ITEM: {
            const oldItems = state.items[action.payload].items;
            const newItem = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
            return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload]: {
                        items: newItem,
                        totalPrice: getTotalPrice(newItem)
                    }
                },
                totalCount: oldItems.length > 1 ? state.totalCount - 1 : state.totalCount,
                totalPrice: oldItems.length > 1 ? state.totalPrice - newItem[0].price : state.totalPrice
            };
        }

        case RESET_CART: {
            return {
                ...state,
                items: {},
                totalCount: 0,
                totalPrice: 0
            };
        }

        default:
            return state
    }
}