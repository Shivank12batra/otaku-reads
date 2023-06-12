import {createContext, useContext, useState, useEffect, useReducer} from 'react';
import { initialState, dataReducer } from '../../reducer/DataReducer';

const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(dataReducer, initialState)
    const [showFilters, setShowFilters] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])

    console.log(state)

    const fetchCategoriesData = async() => {
        try {
            setLoading(true)
            const res = await fetch('/api/categories')
            const data = await res.json()
            setCategories(data.categories)
        } catch (error) {
            console.log(error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    const fetchProductsData = async() => {
        try {
            setLoading(true)
            const res = await fetch('/api/products')
            const data = await res.json()
            setProducts(data.products)

        } catch (error) {
            console.log(error)
            setError(true)
        } finally {
            setLoading(false)
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
            loading,
            setLoading,
            error,
            sortBy: state.sortBy,
            category: state.category,
            priceRange: state.priceRange,
            filterByRating: state.filterByRating,
            searchTerm: state.searchTerm,
            cart: state.cart,
            wishlist: state.wishlist,
            address: state.address,
            dataDispatch: dispatch,
            categories,
            products

        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);