const el = require('./elements').ELEMENTS

class Home {
    visit() {
        cy.visit('/')
    }

    productSelect() {
        cy.get(el.locator)
            .first()
            .click();
    }
}

export default new Home();