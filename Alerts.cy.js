describe('Alerts', function() {

//1. Simple Alert
it('Js alert', function() {
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get("button[onclick='jsAlert()']").click();

    cy.on('window:alert', function(t){      //or cy.on('window:alert', (t)=>{  })
        expect(t).to.contains('I am a JS Alert');


    })

    //alert window automatically closed by cypress
    cy.get("#result").should('have.text','You successfully clicked an alert')  //Assertion

  
    })

    //2) Javascriot Confirmation Alert
    //Closing with ok button
    it('Js confirm alert', function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsConfirm()']").click();
    
        cy.on('window:confirm', function(t){      //or cy.on('window:alert', (t)=>{  })
            expect(t).to.contains('I am a JS Confirm');
    
    
        })
    
        //cypress automatically closed alert window by using ok button-default
        cy.get("#result").should('have.text','You clicked: Ok')  //Assertion
    
      
        })
        //closing by cancel button continuation of alert 2
        it('Js confirm alert - Cancel', function() {
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    
            cy.get("button[onclick='jsConfirm()']").click();
        
            cy.on('window:confirm', function(t){      //or cy.on('window:alert', (t)=>{  })
                expect(t).to.contains('I am a JS Confirm');
        
        
            })
        
            //cypress automatically closed alert window by using ok button-default
            cy.on('window:confirm', ()=> false);
            cy.get("#result").should('have.text','You clicked: Cancel')  //Assertion
        
          
            }) 


    //3. Javascriot Confirmation Alert with prompt

        it('Js prompt alert', function() {
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.window().then((win)=>{
                cy.stub(win,'prompt'). returns('Welcome')
            })
    
            cy.get("button[onclick='jsPrompt()']").click();
        
             //cypress automatically closed alert window by using ok button-default
             cy.get("#result").should('have.text','You entered: Welcome')  //Assertion
        
          
            })

             //closing by clicking on cancel button continuation of prompt alert
        it('Js prompt alert - Cancel', function() {
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.window().then((win)=>{
                cy.stub(win,'prompt'). returns('Welcome')
            })
    
            cy.get("button[onclick='jsPrompt()']").click();
        
        
            //cypress automatically closed alert window by using ok button-default
            cy.on('window:prompt', ()=> false);
            cy.get("#result").should('have.text','You entered: Welcome')  //Assertion
        
          
            }) 

//Authenticated Alert
it.only('Authenticated alert',()=>{

    //appraoch1

    cy.visit("https://the-internet.herokuapp.com/basic_auth",{ auth:
                                                                    {
                                                                        username: "admin",
                                                                        password: "admin"
                                                                    }
                                                                } );

    cy.get("div[class='example'] p").should('have.contain',"Congratulations");


    //approach 2
    
    // cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    // cy.get("div[class='example'] p").should('have.contain',"Congratulations");
})


        

})

     
     

       