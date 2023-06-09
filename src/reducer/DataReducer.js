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
    searchTerm: "",
    cart: [],
    wishlist: [],
    address: [],
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
                ...state,
                sortBy: "",
                priceRange: "500",
                category: state.category,
                filterByRating: 0,
                searchTerm: "",
            }
        case ACTION_TYPE.SEARCH:
            return {
                ...state,
                searchTerm: action.payload
            }
        case ACTION_TYPE.ADD_TO_CART:
            return {
                ...state,
                cart: [...action.payload]
            }
        case ACTION_TYPE.REMOVE_FROM_CART:
            return {
                ...state,
                cart: [...action.payload]
            }
        case ACTION_TYPE.UPDATE_QTY_IN_CART:
            return {
                ...state,
                cart: [...action.payload]
            }
        case ACTION_TYPE.CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        case ACTION_TYPE.ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: [...action.payload]
            }
        case ACTION_TYPE.REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlist: [...action.payload]
            }
        case ACTION_TYPE.ADD_ADDRESS:
            return {
                ...state,
                address: [...state.address, action.payload],
            };
        case ACTION_TYPE.REMOVE_ADDRESS:
            return {
                ...state,
                address: state.address.filter(({id}) => action.payload.id !== id)
            }
        case ACTION_TYPE.UPDATE_ADDRESS:
            return {
                ...state,
                address: state.address.map(location => location.id === action.payload.id ? action.payload : location)
            }
        case ACTION_TYPE.LOG_OUT:
            return {
                ...state,
                cart: [],
                wishlist: [],
                address: [],
            }
        default:
            return {...state}
    }
}