import axios from "axios";
import { SET_LOADED, SET_PIZZAS } from "../types"

export const setLoading = val => ({
    type: SET_LOADED,
    payload: val,
});

export const setPizzas = (items) => {
    return {
        type: SET_PIZZAS,
        payload: items,
    }
};

export const fetchPizzas = (category, sortBy) => dispatch => {
    dispatch(setLoading(false));
    axios.get(`https://my-json-server.typicode.com/percuciat/pizza-db/pizzas?${category !== null && category !== undefined ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => dispatch(setPizzas(data)));
};

