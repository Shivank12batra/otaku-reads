import {createContext, useContext, useState} from 'react';

const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [showFilters, setShowFilters] = useState(false)
    console.log(showFilters)

    return (
        <DataContext.Provider value={{
            showFilters,
            setShowFilters
        }}>
            {children}
        </DataContext.Provider>
    )
}

export const useData = () => useContext(DataContext);