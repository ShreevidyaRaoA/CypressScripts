describe("Desicrew website", () => {
    beforeEach(() => {   

        // Visit website before each test
        cy.visit("https://desicrew.in/");
    });

    let userdata;

    

    // Ignore uncaught exceptions to prevent test failures
    Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
    });

    it("Home page", () => {
        cy.viewport(900, 620);
        //cy.visit("https://desicrew.in/");

        // Verify Let's Connect button
        cy.get(".elementor-sticky--active > .elementor-element-1db4b5f > .elementor-element-4afcd71 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text")
            .should("have.text", "Let's Connect");

        cy.wait(4000);

        cy.get(".elementor-sticky--active > .elementor-element-1db4b5f > .elementor-element-4afcd71 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text", {timeout:4000}).click()
        //Entering data on Let's Connect
        
        //Entering details
        cy.fixture("desicrewLetsConnect.json").then((data) => {
           const userdata2 = data;
        
        cy.get("#form-field-first_name").type(userdata2.userFirstName)
        cy.get("#form-field-field_c3d76e4").type(userdata2.userLastName)
        cy.get("#form-field-email").type(userdata2.email)
        //cy.get("button[type='submit'] span[class='elementor-button-text']").click()

        //Terms and condition link on Footer
        cy.get("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1) > span:nth-child(1) > u:nth-child(1)", {timeout:4000}).click()
        cy.get("div[class='elementor-element elementor-element-64a5ba6 elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']").should('have.text','Terms and Conditions')
        cy.wait(4000)

        //Privacy policy link on Footer
        cy.get("body > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1) > span:nth-child(1) > u:nth-child(1)").click()
        cy.get("div[class='elementor-element elementor-element-fa77df4 elementor-widget elementor-widget-heading'] h2[class='elementor-heading-title elementor-size-default']").should('have.text','Privacy Policy')
        cy.wait(4000)

        })
    })
        
        it("Visiting QAoncloud website", ()=>{
                    // Open menu and navigate
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > svg:nth-child(1)").click();
        cy.get("nav[aria-hidden='false'] li.menu-item-103 span.sub-arrow svg path").click();
        cy.get("nav[aria-hidden='false'] li.menu-item-142 a.elementor-sub-item").click();

        cy.get("h4.elementor-heading-title.elementor-size-default")
            .should("have.text", "Net Promoter Score of 100");
            cy.wait(4000)

        // Open the new page properly
        //Clicking on visit our website button
        cy.fixture("desicrewContactUs.json").then((data) => {
            const userdata = data;
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1) > span:nth-child(1)", {timeout:4000}).invoke("removeAttr", "target") // Prevent opening in a new tab
            .click();
            cy.wait(4000)


            cy.get(".elementor-button-text", { timeout: 8000 })
            .first() // Selects the first element
            .click({ force: true });
          
            cy.wait(5000)
            cy.get("#form-field-first_name").should("be.visible").type(userdata.userName);
            cy.get("#form-field-email").should("be.visible").type(userdata.email);
            cy.get("#form-field-phone_number").should("be.visible").type(userdata.phone);
            cy.get("#form-field-comapny_name").should("be.visible").type(userdata.companyName);
            //cy.get("body > div:nth-child(3) > main:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > form:nth-child(3) > input:nth-child(11)").type(userdata.role)
            cy.get("#form-field-how_can_we_help").should("be.visible").type(userdata.requirements);

            //Recaptcha
            //cy.get('[data-aos="fade-left"] > form > .g-recaptcha > [style="width: 304px; height: 78px;"] > div > iframe').click()
            cy.get('.elementor-field-type-submit > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').click()

           cy.wait(4000)
                ///About Us link
        })
    })


          it("LinkedIn website from desicrew", ()=>
            {
                //cy.get(".e-font-icon-svg.e-fab-linkedin").invoke("removeAttr", "target").click();
               
                cy.get('.e-font-icon-svg.e-fab-linkedin').invoke('removeAttr','target').click()
                cy.wait(4000) //clicking on link
                cy.url().should('include','https://desicrew.in')
                cy.wait(4000)

                //operations
                cy.visit('back')


            })

        })
  
   
        







