export const sortData = (products, sortBy, priceRange, sortByRating) => {
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
    if (sortByRating) {
        products = products.filter(({rating}) => rating > sortByRating)
    }
    if (priceRange) {
        products = products.filter(({price}) => price <= +priceRange)
    }
    return products
}