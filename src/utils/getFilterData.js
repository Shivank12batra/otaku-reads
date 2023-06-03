export const filterData = (products, sortBy, priceRange, category, filterByRating) => {
    switch (sortBy) {
        case "CLEAR":
            break;
        case "LOW_TO_HIGH":
            products = products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            break;
        case "HIGH_TO_LOW":
            products = products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
            break;
        default:
            products = products
    }
    if (priceRange) {
        products = products.filter(({price}) => price <= +priceRange)
    }
    if (filterByRating) {
        products = products.filter(({rating}) => rating === filterByRating)
    }
    for (const cat in category) {
        if (!category[cat]) {
            products = products.filter((products) => products.category !== cat)
        }
    }
    return products
}

export const sortData = (products, category) => {
    for (const cat in category) {
        return products.filter(({category}) => category === cat)
    }
    return products
}