

describe('XPathLoactors', () =>{

    it('find no. of products', () =>{
    
        cy.visit('https://www.flipkart.com/')
        cy.xpath("//ul[.'DOjaWF gdgoEp']/li").should('have.length',24)
       
    }
)

it('chained xpath', () =>{
    
    cy.visit('https://www.flipkart.com/')
    cy.xpath("//ul[.'DOjaWF gdgoEp']").xpath("./li")('have.length',24)
   
}
)

}
)