import {
    SET_SORT_BY,
    SET_CATEGORY_BY,
} from "../types"


const initialState = {
    category: null,
    sortBy: {
        type: 'rating',
        order: 'desc'
    }
};


export default function filter(state = initialState , action) {
    switch (action.type) {
        case SET_SORT_BY: {
            return {
                ...state,
                sortBy: action.payload,
            };
        }

        case SET_CATEGORY_BY: {
            return {
                ...state,
                category: action.payload,
            };
        }
        default:
            return state
    }
}