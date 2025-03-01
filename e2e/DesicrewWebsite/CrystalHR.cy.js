describe("Crystal HR", ()=>{
    it("Crystal HR Login", ()=>{
        cy.fixture("crystalHRLogin").then((data) =>{
        cy.visit('https://desicrewdtrial.crystalhr.com/Account/Login?returnUrl=%2FHome%2FIndex')
        
            //Login
            data.forEach((userdata)=>{
                cy.get('#frmLogin > fieldset > :nth-child(2) > .block > #Username').clear().type(userdata.username)
                cy.get('#Password').clear().type(userdata.password)
                cy.get("#btnLogin").click()
                cy.wait(4000)
                 

                if(userdata.username=='XXXX' && userdata.password=='YYYY')  //Enter valid username and password in the XXXX and YYYY place
                {
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)").should('have.text',userdata.expected)
                    cy.get('[data-menuid="da13b99a-2ec2-4a57-96a1-0ceca15613ac"] > a > .menu-icon', { timeout: 3000 }).click()
                    cy.wait(3000)
                    cy.get('[data-menuid="16347c81-62c6-4296-9f6c-fbf3a606a18b"] > a > .menu-icon').click()
                    //Logout
                    cy.get(".ace-icon.fa.fa-caret-down").click()
                    cy.get("a[href='/Account/Logout']").click()
                }
                else{
                    cy.get(".error").should('have.text',userdata.expected)
                }

            })
            
            cy.wait(2000)

        })

    })

})