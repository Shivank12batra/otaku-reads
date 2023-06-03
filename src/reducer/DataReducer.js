import {ACTION_TYPE} from '../utils/constant';

export const initialState = {
    sortBy: "",
    priceRange: "500",
    category: {
        'Shounen' : true,
        'Seinen' : true,
        'Shoujo' : true
    },
    filterByRating: 0,
}

export const dataReducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPE.PRICE_RANGE:
            return {
                ...state,
                priceRange: action.payload
            }
        case ACTION_TYPE.SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case ACTION_TYPE.CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        
        case ACTION_TYPE.FILTER_BY_RATING:
            return {
                ...state,
                filterByRating: action.payload
            }
        case ACTION_TYPE.CLEAR_FILTER:
            for (const cat in state.category) {
                state.category[cat] = true
            }
            return {
                sortBy: "",
                priceRange: "500",
                category: state.category,
                filterByRating: 0,
            }
        default:
            return {...state}
    }
}