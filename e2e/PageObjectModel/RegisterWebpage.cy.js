import RegisterPage from "../../PageObjects/RegisterPage"

describe('Regiter Page', () => {
    
    it.only('Register page Test by using fixtures', () =>{
        cy.visit('https://demo.automationtesting.in/Register.html')

        cy.fixture('registerwebpage').then((data)=>{
            const ln = new RegisterPage();
            ln.setFirstName(data.firstname);  //data given in orangehrm.json under fixtures folder
            ln.setLastName(data.lastname);
            // ln.setEmail(data.emial);
            // ln.setPhone(data.phone);
            // ln.setGender(data.gender);
            // ln.setHobbies(data.hobbies);
            // ln.setCountry(data.country);
            ln.clickSubmit();

        })

    })

})