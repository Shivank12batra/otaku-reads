const isProductInWishlist = (wishlist, id) => {
    return wishlist?.find(product => product._id === id)
}

const isProductInCart = (cart, id) => {
    return cart?.find(product => product._id === id)
}

export {isProductInCart, isProductInWishlist}