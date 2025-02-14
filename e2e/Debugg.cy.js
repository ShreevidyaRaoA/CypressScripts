describe('Verify Browser Stack Home Page', () => {

        it('Verify Browserstack logo is visible', () => {
    
            cy.visit('https://www.browserstack.com/');
    
            cy.task("log","This is console log : Navigated to home page")
    
        })
    
    })