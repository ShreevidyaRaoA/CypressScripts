describe('My Test Suite', function(){

    before(function (){
        cy.fixture('example').then(function(data){

            //block
           this.data=data

        })
    })

    // it('FixturesDemoTest', function() {
    //     cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
    //     cy.get('input[name=Email]').type("admin@yiurstore.com")  //email
    //     cy.get('input[name=Password]').type("admin")  //Passowrd
    //     cy.get('input[type=submit]').click()  //Sign in
    // })

    it('FixturesDemoTest', function() {
        cy.visit('https://www.orangehrm.com/hris-hr-software-demo/')
        // cy.get('input[name=Email]').type("this.data.email")  //email
        // cy.get('input[name=Password]').type("athis.data.password")  //Passowrd
        // cy.get('input[type=submit]').click()  //Sign in
    })

})