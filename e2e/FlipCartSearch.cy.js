


describe('Fiplcart Application', () => {

    it('search function in flipcart application by css locators', () => {
        //steps
        cy.visit("https://www.flipkart.com/")  
       // cy.get('input.zDPmFV').type('Atomberg Fans')  // class tag is optional

        // cy.get('.Pke_EE').type('Formals for men')
        // cy.get('._2iLD__').click()
        // cy.get('.BUOuZu').contains('Formals for men')//Assertion

        cy.get('.Pke_EE').type('Atomberg 1400mm Ikano fan')
        cy.get('._2iLD__').click()
        cy.get('.BUOuZu').contains('Atomberg 1400mm Ikano fan')

      })

      
        it('Capture screenshot and videos', ()=> {
            cy.visit('https://www.flipkart.com/')
            cy.screenshot('Flipcart Homepage');
            cy.wait(5000)
    
            //Toget particular image
            cy.get("img[title='Flipkart']").screenshot("logo");

            //Automatically capture screenshot and video on failure - only when we execute through CLI
            cy.get("img[alt='Mobiles']").click(); //Mobiles
            //cy.get("._0FYq1K").should('have.text','Mobile Phones');  //assertion pass
        
            cy.get("._0FYq1K").should('have.text','Clothes');  //assertion fail
    })

        
  })


  