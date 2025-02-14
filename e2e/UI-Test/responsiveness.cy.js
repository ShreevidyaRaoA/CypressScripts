context('Page Responsiveness Test', () => {

    it('Twitter Login Page Desktop', () => {
        cy.visit('https://www.qaoncloud.com/#');

    })

    it.only('Twitter Login Page Desktop', () => {
        cy.viewport('iphone-x')
        cy.visit('https://www.qaoncloud.com/#');

    })

    it('Twitter Login Page Desktop', () => {
        cy.viewport('iphone-7')
        cy.visit('https://www.qaoncloud.com/#');

    })


})