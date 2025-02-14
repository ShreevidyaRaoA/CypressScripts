describe('My Second Test', () => {

it('verify title with postitive test', () => {
    //steps
    cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")  
    cy.title().should('eq','WebdriverUniversity.com (Dropdown Menu(s), Checkboxe(s), Radio Button(s))')    //assertion
    
  })
})