import 'cypress-iframe'

describe("Handling frames", ()=> {
    it("apprraoch1", ()=> {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe=cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')   //assertion
        .then(cy.wrap);

        iframe.clear().type("Welcome {ctrl+a}");

        cy.get("[aria-label='Bold']").click();
    })


    it("apprraoch2 - by using custom command", ()=> {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}");

        cy.get("[aria-label='Bold']").click();
    })


    it.only("apprraoch3 - by using cypress iframe plugin", ()=> {
        cy.visit('https://the-internet.herokuapp.com/iframe');

        cy.frameLoaded('#mce_0_ifr');  //Load the frame

        cy.iframe('#mce_0_ifr').clear().type("Welcome {ctrl+a}");  //{ctrl+a} to select the text for bold
        cy.get("[aria-label='Bold']").click();

    })


})