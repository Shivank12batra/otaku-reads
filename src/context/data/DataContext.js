import {createContext, useContext, useState, useEffect, useReducer} from 'react';
import { ACTION_TYPE } from '../../utils/constant';
import { initialState, dataReducer } from '../../reducer/DataReducer';

const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, initialState)
    const [showFilters, setShowFilters] = useState(false)
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    console.log(state.category)

    const fetchCategoriesData = async() => {
        try {
            const res = await fetch('/api/categories')
            const data = await res.json()
            setCategories(data.categories)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchProductsData = async() => {
        try {
            const res = await fetch('/api/products')
            const data = await res.json()
            setProducts(data.products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategoriesData()
        fetchProductsData()
    }, [])

    return (
        <DataContext.Provider value={{
            showFilters,
            setShowFilters,
            sortBy: state.sortBy,
            category: state.category,
            priceRange: state.priceRange,
            filterByRating: state.filterByRating,
            dataDispatch: dispatch,
            categories,
            products

        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);