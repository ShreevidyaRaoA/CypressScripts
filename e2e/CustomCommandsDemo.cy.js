// describe('CustomSuite', function() {
//     it('LoginTest CustomTest', function()
//     {
//         cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
//         cy.get('#Email').type('admin@yourstore.com')
//         cy.get('#Password').type('admin')
//         cy.get('button[type=submit]').click()

//     })

//     it('Add customer', function()
//         //Login script
//         {
//             cy.visit('https://admin-demo.nopcommerce.com/')
//             cy.get('#Email').type('admin@yourstore.com')
//             cy.get('#Password').type('admin')
//             cy.get('button[type=submit]').click()

//             //script for Adding new customer
//             cy.log('Adding customer................')
    
//         })

//         it('Edit Customer', function ()
//         {
//             cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
//             cy.get('#Email').type('admin@yourstore.com')
//             cy.get('#Password').type('admin')
//             cy.get('button[type=submit]').click()

//             //script for editing customer
//             cy.log('Editing customer...............')
    
//         })
    
//     })

//or

describe('CustomSuite', function() {
    // it.only('LoginTest CustomTest', function()
    // {
    //     cy.login('admin@yourstore.com','admin')  //valid
    //     cy.title().should('be.equal','Dashboard / nopCommerce administration')

    //     cy.login('admin@yourstore.com','admin12')  //Invalid data
    //     cy.title().should('be.equal','Your store. Login')

    //     cy.login('admin@yourstore123.com','admin')  //Invalid data
    //     cy.title().should('be.equal','Your store. Login')

    // })

    // it('Add customer', function()
    //     //Login script
    //     {
    //         cy.login('admin@yourstore.com','admin')  //valid

    //         //script for Adding new customer
    //         cy.log('Adding customer................')
    
    //     })

    it('Add customer', function()
        //Login script
        {
            cy.login('demo','demo')  //valid
            cy.title().should('be.equal','Dashboard')

    
        })



})