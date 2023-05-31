import {createContext, useContext, useState, useEffect} from 'react';

const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [showFilters, setShowFilters] = useState(false)
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    console.log(showFilters)

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
            categories,
            products

        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);