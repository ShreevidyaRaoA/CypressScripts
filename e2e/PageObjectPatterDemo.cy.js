import LoginPage from '../fixtures/integration/examples/PageObjects/LoginPage'

//Login page code is written on LoginPage.js file under integration-> PageObjects folder
//POM Test cases

describe('Test Suite', function() {
    it('valid Login Test', function()
{
    const lp=new LoginPage()
    lp.visit()
    lp.fillEmail('admin@yourstore.com')
    lp.fillPassword('admin')
    lp.submit()
    cy.title().should('be.equal', 'Dashboard / nopCommerce administration')

})
})