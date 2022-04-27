const el = require('./elements').ELEMENTS

class Cart {
    validateBuy() {
        cy.get(el.locator);
    }
}

export default new Cart();