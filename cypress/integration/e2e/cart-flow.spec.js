import home from "../../support/home";
import Product from "../../support/product";
import Cart from "../../support/cart";

describe('Ecommerce scenario tet', () => {
    it('Should be visit a ecommerce home page', () => {
        home.visit();
        home.productSelect();
    });

    it('Should be add a product to the cart', () => {
        Product.buy()
        Product.initiateCheckout()
    });

    it('Should be validate a cart', () => {
        Cart.validateBuy()
    });
});