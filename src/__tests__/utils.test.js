import { getPriceDetails } from "../utils";

describe('Price Utils', () => {
  test('getPriceDetails should return the correct price and discount', () => {
    const cart = [
      { originalPrice: 10, price: 8, qty: 2 },
      { originalPrice: 20, price: 15, qty: 1 },
      { originalPrice: 15, price: 12, qty: 3 },
    ];
    const { price, discount } = getPriceDetails(cart);
    expect(price).toBe(85);
    expect(discount).toBe(18);
  });

  test('getPriceDetails should return 0 price and discount if the cart is empty', () => {
    const cart = [];
    const { price, discount } = getPriceDetails(cart)
    expect(price).toBe(0);
    expect(discount).toBe(0);
  });
});
