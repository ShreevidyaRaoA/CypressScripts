describe('Mysuite', ()=> {
    it.only('Capture screenshot & videos', ()=> {
        cy.visit('https://www.flipkart.com/')
        // cy.screenshot('Flipcart Homepage');
        // cy.wait(5000)

        // //Toget particular image
        // cy.get("img[title='Flipkart']").screenshot("logo");

        //Automatically capture screenshot and video on failure - only when we execute through CLI
        cy.get("img[alt='Mobiles']").click(); //Mobiles
        //cy.get("._0FYq1K").should('have.text','Mobile Phones');  //assertion pass
        
        cy.get("._0FYq1K").should('have.text','Clothes');  

    })


    it('Capture screenshot & videos', ()=> {
        cy.visit('https://demo.opencart.com/')

        //Automatically capture screenshot and video on failure - only when we execute through CLI
        cy.get("body > main:nth-child(5) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(7) > a:nth-child(1)").click(); //Mobiles
        //cy.get("._0FYq1K").should('have.text','Mobile Phones');  //assertion pass
        
        cy.get("div[id='content'] h2").should('have.text','Tablets');  //assertion fail

    })
})