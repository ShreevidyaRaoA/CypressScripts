describe('My Test Suite', function(){

    it('Fixtures Demo Test', function() {
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
        cy.get('input[name=Email]').type("admin@yiurstore.com")  //email
        cy.get('input[name=Password]').type("admin")  //Passowrd
        cy.get('input[type=submit]').click()  //Sign in
    })

})