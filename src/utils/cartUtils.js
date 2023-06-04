const isProductInWishlist = (wishlist, id) => {
    wishlist?.find(product => product._id === id)
}

const isProductInCart = (cart, id) => {
    cart?.find(product => product._id === id)
}

export {isProductInCart, isProductInWishlist}