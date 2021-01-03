import axios from "axios";

export const setLoading = val => ({
    type: 'SET_LOADED',
    payload: val,
});

export const fetchPizzas = (category, sortBy) => dispatch => {
    dispatch(setLoading(false));
    axios.get(`http://localhost:3003/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(({data}) => dispatch(setPizzas(data)));


};


export const setPizzas = (items) => {
    return {
        type: 'SET_PIZZAS',
        payload: items,
    }
};