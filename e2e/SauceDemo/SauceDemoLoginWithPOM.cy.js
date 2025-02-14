import Login from "../../PageObjects/SauceLoginPageWithPOM"

describe('Sauce demo application with POM', ()=> {


    //Using POM
    beforeEach(() => {
      // notice this alias is created just once using "before" hook
      cy.visit("https://www.saucedemo.com/");
    })
    
    it('Sauce Login', ()=> {
        //cy.visit("https://www.saucedemo.com/", { timeout: 60000, failOnStatusCode: false });
        const ln = new Login();
        ln.setUserName("standard_user")
        ln.setPassword("secret_sauce")
        ln.clickSubmit();
        ln.verifyLogin();
        cy.wait(3000)
        
    })

    it('Add an product to the cart', () => {
        //cy.visit("https://www.saucedemo.com/", { timeout: 60000, failOnStatusCode: false });
        const ln = new Login();
        ln.setUserName("standard_user")
        ln.setPassword("secret_sauce")
        ln.clickSubmit();
        ln.verifyLogin();

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').contains('1')
        cy.get('.shopping_cart_badge').click()
        cy.get(".inventory_item_name").should('have.text','Sauce Labs Backpack');

      })

      it('Remove the product from the cart', () => {
       // cy.visit("https://www.saucedemo.com/", { timeout: 60000, failOnStatusCode: false });
        const ln = new Login();
        ln.setUserName("standard_user")
        ln.setPassword("secret_sauce")
        ln.clickSubmit();
        ln.verifyLogin();

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').contains('1')
        cy.get('.shopping_cart_badge').click()
        cy.get(".inventory_item_name").should('have.text','Sauce Labs Backpack');

        cy.get(".inventory_item_name").should('have.text','Sauce Labs Backpack');
        cy.get('#remove-sauce-labs-backpack').click();
        cy.get('#continue-shopping').click();
        ln.verifyLogin();


      })

      it('Remove the product from the cart', () => {
        //cy.visit("https://www.saucedemo.com/", { timeout: 60000, failOnStatusCode: false });
        const ln = new Login();
        ln.setUserName("standard_user")
        ln.setPassword("secret_sauce")
        ln.clickSubmit();
        ln.verifyLogin();

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('.shopping_cart_link').contains('1')
        cy.get('.shopping_cart_badge').click()
        cy.get(".inventory_item_name").should('have.text','Sauce Labs Backpack');

        cy.get("#checkout").click()
        ln.setUserFirstName("Shree")
        ln.setUserLastName("Vidya")
        ln.setZipCode('23111')
        ln.clickContinue();
        cy.get('[data-test="total-label"]').should('have.text','Total: $32.39');
              
      })
      

})



    // describe('Sauce demo application with POM', ()=> {
    //     //Using POM
    //     it('Sauce demo Login', ()=> {
    //         cy.visit('https://www.saucedemo.com/')
    //         cy.get('#user-name').type('standard_user')
    //         cy.get('#password').type('secret_sauce')
    //         cy.get('#login-button').click()
    //         cy.get('.title').should('have.text','Products')

    //     })
    // })