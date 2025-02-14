class RegisterPage 
{

    txtUserFirstName="input[placeholder='First Name']";
    txtUserLastName="input[placeholder='Last Name']";
    txtEmail="input[type='email']";
    txtPhone="input[type='tel']";
    txtGender="input[value='FeMale']";
    txtHobbies="#checkbox1";
    txtCountry="span[role='combobox']";
    btnSubmit="#submitbtn";
    
    
    setFirstName(firstname)
    {
        cy.get(this.txtUserFirstName).type(firstname);
        
    }

    setLastName(lastname)
    {
        cy.get(this.txtUserLastName).type(lastname);
        
    }

    // setEmail(email)
    // {
    //     cy.get(this.txtEmail).type(email)
    // }

    // setPhone(phone)
    // {
    //     cy.get(this.txtPhone).type(phone);
        
    // }

    // setGender(gender)
    // {
    //     cy.get(this.txtGender).type(gender)
    // }

    // setHobbies(hobbies)
    // {
    //     cy.get(this.txtHobbies).type(hobbies);
        
    // }

    // setCountry(country)
    // {
    //     cy.get(this.txtCountry).type(country);
    // }

    clickSubmit()
    {
        cy.get(this.btnSubmit).click()
    }
   
    // verifyLogin()
    // {
    //     cy.get(this.lblMsg).should('have.text','Dashboard');
    // }

}

export default RegisterPage;  //export default (classname)