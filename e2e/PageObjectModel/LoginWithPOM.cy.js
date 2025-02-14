//import Login from "../../PageObjects/OrangeHRMLoginPage";
import Login from "../../PageObjects/LoginPageOrangeHRM.js";

describe('page object model', () => {

    //General approach

    // it('Login Test script without page object model', ()=>  {
    
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //     cy.get("input[placeholder='Username']").type("Admin")
    //     cy.get("input[placeholder='Password']").type("admin123")
    //     cy.get("button[type='submit']").click()
    //     cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard');
    // })


    //By using pom

    it('Login Test by using POM', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const ln=new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();

    })

    //using POM with fixtures

  it.only('Login Test by using fixtures', () =>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.fixture('orangehrm').then((data)=>{
            const ln = new Login();
            ln.setUserName(data.username);  //data given in orangehrm.json under fixtures folder
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();

        })


    })


})