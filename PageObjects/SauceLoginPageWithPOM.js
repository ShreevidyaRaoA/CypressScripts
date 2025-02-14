class Login
{
    setUserName(username)
    {
        cy.get('#user-name').type(username);
        
    }

    setPassword(password)
    {
        cy.get('#password').type(password);
    }

    clickSubmit()
    {
        cy.get("#login-button").click();
    }

    verifyLogin()
    {
        cy.get('.title').should('have.text','Products');
    }

    setUserFirstName(firstname)
    {
        cy.get('#first-name').type(firstname)

    }

    setUserLastName(lastname)
    {
        cy.get('#last-name').type(lastname)

    }
    setZipCode(zip)
    {
        cy.get('#postal-code').type(zip)
    }
    clickContinue()
    {
        cy.get('#continue').click()
    }
}

export default Login;