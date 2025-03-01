describe("Webdriver Login", ()=>{
    //Using Fixtures
    // it("Web driver Login", ()=>{
    //     cy.visit("https://webdriveruniversity.com/Login-Portal/index.html?")
    //     cy.fixture('WebDriverLogin').then((data)=>{
    //         cy.get("#text").type(data.username)
    //         cy.get("#password").type(data.password)
    //         cy.get("#login-button").click()
    //     })
        
    // })

    //or

    
    let userdata;
    before( () =>{
        cy.fixture("WebDriverLogin").then((data) =>{
            userdata=data;
        })
    })
    it('Web driver login', ()=>{
        cy.visit("https://webdriveruniversity.com/Login-Portal/index.html?")
        cy.get("#text").type(userdata.username)
        cy.get("#password").type(userdata.password)
        cy.get("#login-button").click()


        //Closing the alert
        cy.on('window:confirm', function(t){
            expect(t).to.contains('validation failed');
        })
    })

})