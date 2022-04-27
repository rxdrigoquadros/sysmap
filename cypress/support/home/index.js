const el = require('./elements').ELEMENTS

class Home {
    visit() {
        cy.visit('/')
    }

    productSelect() {
        cy.get(el.id).click();
    }
}

export default new Home();