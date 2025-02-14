describe("Assertion",()=>{

    it("Implicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        //should    and
        cy.url().should('include','orangehrmlive.com')
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.url().should('contain','orangehrm')

        //or

        // cy.url().should('include','orangehrmlive.com')
        // .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .should('contain','orangehrm')

        // cy.url().should('include','orangehrmlive.com')
        // .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // .and('contain','orangehrm')

        //-ve assertion
        cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('not.contain','greenhrm')

        cy.title().should('include','Orange')
        .and('eq',"OrangeHRM")
        .and('contain',"HRM")

        // cy.get('.orangehrm-login-branding > img').should('be.visible')
        // cy.get('.orangehrm-login-branding > img').should('exist')

        //or

        cy.get('.orangehrm-login-branding > img').should('be.visible')
       .and('exist')

       cy.xpath("//a").should('have.length','5')  //No of links means to match all the links present in the web page

       cy.get("input[placeholder='Username']").type("Admin")  //provide a value into input box

       cy.get("input[placeholder='Username']").should('have.value','Admin')   //value

       cy.get("input[placeholder='Password']").type("admin123")  //provide a value into password input box

       cy.get("input[placeholder='Password']").should('have.value','admin123')

      //  cy.get("button[type='submit']").click()  //login button or submit

       
    })

    it.only("Explicit assertions", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName="TestFirstName TestLastName";

        cy.get('.oxd-userdropdown-name').then( (x)=> {
            let actName=x.text()

            //BDD Style
            expect(actName).to.equal(expName) //assertion comapring the actual name with expected name
            expect(actName).to.not.equal(expName)

            //TDD Style
            assert.equal(actName,expName)
            assert.not.equal(actName,expName)


        })

       
    })

})