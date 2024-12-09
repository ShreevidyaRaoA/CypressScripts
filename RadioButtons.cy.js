describe('Dropdown',() => {


    it('Radio button', () => {
        cy.visit('https://demo.guru99.com/test/radio.html')
        cy.get('[type="radio"]').check()
        cy.get('[type="radio"]').check('Option 2')
     
    })

    it('Single select from dropdown', () => {
        cy.visit('https://demo.guru99.com/test/radio.html')
        cy.get('[type="checkbox"]').check('checkbox1')
        cy.get('[type="checkbox"]').check('checkbox3')
    })

})