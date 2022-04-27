const el = require('./elements').ELEMENTS

class Product {

    buy() {
        cy.server();
        cy.route('POST', '**/index.php?rand*').as('postCart');
        cy.get(el.locator)
            .click();
    }

    initiateCheckout() {
        cy.wait(4000)
        cy.wait('@postCart').then((xhr) => {
            cy.get(el.initiateCheckout)
                .click();
            cy.get(el.preCheckoutModal)
        })


    }
}

export default new Product();