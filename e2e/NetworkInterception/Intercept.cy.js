describe('Iframe', ()=> {


    before(() => {

        //cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/')
        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/intercept')

})


    it("SPY - INTERCEPT VIA SERVER-ROUTE XHR GET Request", ()=> {
        //cy.server();
        cy.intercept("/users?*").as("users");

        cy.get("#loadThreeUsersXHR").click();
        //cy.wait("@users").its("status").should("be.eq", 200);
         cy.get("#xhrusers > tbody > tr").should("have.length", 3);
    })


    it("SPY - INTERCEPT VIA SERVER-ROUTE XHR POST Request", ()=> {
        //cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/intercept')
        cy.intercept("POST", "/users").as("users");

        const user = {
            name: "Shree",
            email: "a.b@c.com",
        };
        
        cy.get("#xhrname").type(user.name);
        cy.get("#xhremail").type(user.email)
        cy.get("#xhrbtn").click();

        // cy.wait("@users").then((xhr) => {
        //     expect(xhr.status).to.eql(201);
        //     expect(xhr.response.body.name).to.eql(user.name);
        //     expect(xhr.response.body.email).to.eql(user.email);
        // })
         cy.get("#xhrspan").should("contain.text", '${user.name} - ${user.email}');
    })


    it("SPY - INTERCEPT VIA SERVER-ROUTE XHR GET Request", ()=> {
        //cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/intercept')
        cy.intercept("/users?*", "fixture:users.json").as("users");
        
        cy.get("#loadThreeUsersXHR").click();
        cy.wait("@users");
        cy.get("#xhrusers > tbody > tr").should("have.length", 3);

    })


    it("SPY - INTERCEPT FETCH GET Request - 3 users", ()=> {
        //cy.intercept('/users').as("users");
        cy.intercept({
            pathname:"/users",
            method:"GET",
            query:{
                _limit:'3'
            }
        }).as("users");
        cy.get("#loadThreeUsersFETCH").click();
        
        cy.wait("@users")
        .its("response.body")
        .should("have.length", 3)

        
        cy.get("#fetchusers > tbody >tr").should("have.length", 3);
        
    })


    //for 3 users
    it("STUB- INTERCEPT FETCH GET Request - 3 users", ()=> {
        //cy.intercept('/users').as("users");
        cy.intercept({
            pathname:"/users",
            method:"GET",
            query:{
                _limit:'3',
            },
        }, 
        {
    fixture:"users.json"
    }).as("users");
        cy.get("#loadThreeUsersFETCH").click();
        
        cy.wait("@users")
        .its("response.body")
        .should("have.length", 3)

        
        cy.get("#fetchusers > tbody >tr").should("have.length", 3);
        
    })

    //for 5 users
    it("STUB- INTERCEPT FETCH GET Request - 5 users", ()=> {
        //cy.intercept('/users').as("users");
        cy.intercept({
            pathname:"/users",
            query:{
                _limit:'5',
            }, 
    
    }).as("users");
        cy.get("#loadFiveUsersFETCH").click();
        
        cy.wait("@users")
        .its("response.body")
        .should("have.length", 5)

        
        cy.get("#fetchusers > tbody >tr").should("have.length", 5);
        
    })


    //for 5 users by using fixtures
    it("STUB- INTERCEPT FETCH GET Request - 5 users", ()=> {
        //cy.intercept('/users').as("users");
        cy.intercept({
            pathname:"/users",
            query:{
                _limit:'5',
            },
        }, 
        {
    fixture:"intercept5users.json"
    }).as("users");
        cy.get("#loadFiveUsersFETCH").click();
        
        cy.wait("@users")
        .its("response.body")
        .should("have.length", 5)

        
        cy.get("#fetchusers > tbody >tr").should("have.length", 5);
        
    })


    it("STUB- INTERCEPT FETCH GET Request - Single user", ()=> {
        cy.intercept("/users/1").as("users");
        cy.get("#loadSpecificUserFETCH").click();
        
        cy.wait("@users")
        .its("response.body.phone")
        .should("eq", "210.067.6132")

        
        cy.get("#fetchusers > tbody >tr").should("have.length", 1);
        
    })


    it.only("STUB - INTERCEPT VIA SERVER-ROUTE XHR POST Request", ()=> {
        //cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/intercept')

       

        cy.intercept({
            method: "POST", 
            pathname: "/users",
    }).as("users");

    const user = {
        name: "Avi",
        email: "a.b@c.com",
    };
        
        cy.get("#fetchname").type(user.name);
        cy.get("#fetchemail").type(user.email)
        cy.get("#fetchbtn").click();

        cy.wait("@users").then((obj) => {
            expect(obj.response.statusCode).to.eql(201);
            expect(obj.response.body.name).to.eql(user.name);
            expect(obj.response.body.email).to.eql(user.email);
        })
         cy.get("#fetchspan").should("contain.text", '${user.name} - ${user.email}');
    })

})