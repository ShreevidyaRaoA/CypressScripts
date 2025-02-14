class Login 
{
    setUserFirstName(firstname)
    {
        cy.get("input[placeholder='First Name']").type(firstname)
        
    }

    setUserLastName(lastname)
    {
        cy.get("input[placeholder='Last Name']").type(lastname)
    }
   

}