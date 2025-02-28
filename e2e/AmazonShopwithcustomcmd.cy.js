describe("Amazon shpiing", ()=> {
    it("Sign in after logout", ()=> {
        cy.visit('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=11628885626573759707&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9062038&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1')
        cy.get("span[class='nav-line-2 ']").trigger('mouseover')
        cy.get("div[id='nav-flyout-ya-signin'] span[class='nav-action-inner']").click()
        cy.wait(3000)
        cy.AmazonLogin("shreevidyagmail.com","amazon")
    

        //Search for a product
        cy.get("#twotabsearchtextbox").type('Samsung Mobiles')
        cy.get("#nav-search-submit-button").click()

         //Adding the Mobile to cart
         cy.wait(4000);
         cy.get('#nav-cart-count-container').should('be.visible').click();
         //cy.get('.a-truncate-cut').should('have.text','Apple iPhone 15')
         //cy.get(".a-truncate-cut").should('have.text','Samsung Galaxy M35 5G')
 
         //Proceeding to Buy
         cy.get("input[value='Proceed to checkout']").click()

         //Selecting the address
        //cy.get("input[data-testid='Address_selectShipToThisAddress']").click()

        //return to cart
        //cy.wait(4000)
        cy.get('#nav-logo-sprites', { timeout: 10000 }).click()
        cy.get('#a-autoid-1-announce').click()

        //Deselect all the items
        //cy.get("#deselect-all", { timeout: 10000 }).click()
        //cy.get("#sc-subtotal-label-activecart").should('have.text','No items selected')
    })

})