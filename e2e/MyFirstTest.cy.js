describe('My First Test', () => {


    it('verify title with postitive test', () => {
        //steps
        cy.visit("https://www.ironspider.ca/forms/checkradio.htm")  
        cy.title().should('eq','Checkboxes & Radio Buttons')    //assertion
        
      })

      it('verify title with negative test', () => {
      //steps
      cy.visit("https://www.ironspider.ca/forms/checkradio.htm") 
      cy.title().should('eq','IRONSPIDER')    //assertion
      
    })

  })

//   describe('My First Test', function()  {
//     it('Does not do much!', function()  {
//       expect(true).to.equal(true)
//     })
//   })