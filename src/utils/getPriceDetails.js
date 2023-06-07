export const getPriceDetails = (cart) => {
    return cart.reduce(
    ({price, discount}, item) => {
        price += item.originalPrice * item.qty
        discount += (item.originalPrice - item.price) * item.qty
        return {price, discount}
    }, {price: 0, discount: 0})
}