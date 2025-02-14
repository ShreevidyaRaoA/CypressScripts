describe('Dropdown',() => {

    it('Single select from dropdown', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select(1)  //Select based on index
        cy.get('#dropdowm-menu-2').select('JUnit')  //Select based on Text
        cy.get('#dropdowm-menu-3').select('javascript')  //Select based on value
    })

    it('Multiple select from checkboxes', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        //cy.get('[type="checkbox"]').check()  //To select all checkbox

        //Single or multi select
        cy.get('[type="checkbox"]').check('option-1')
        cy.get('[type="checkbox"]').check('option-4')
      //  cy.get('[type="checkbox"]').uncheck('option-3')
        
    })

    it('Radio button', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[type="radio"]').check('orange')
     
    })

    it('Radio button', () => {
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[type="radio"]').check('lettuce')
        cy.get('#fruit-selects').select('pear')     
    })


})