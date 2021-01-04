import { SET_SORT_BY, SET_CATEGORY_BY } from "../types"

export const setSortBy = ({type, order}) => {
    return {
        type: SET_SORT_BY,
        payload: {type, order}
    }
};

export const setCategoryBy = (typeCategory) => {
    return {
        type: SET_CATEGORY_BY,
        payload: typeCategory,
    }
};