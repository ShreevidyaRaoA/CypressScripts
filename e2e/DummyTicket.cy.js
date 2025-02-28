describe("Dummy ticket application", ()=> {
    
    let userdata;
    before( () =>{
        cy.fixture("dummyTicketsinFixture").then((data) =>{
            userdata=data;
        })
    })
    
    it("Dummy ticket", ()=> {
        
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.wait(5000)
        cy.get("div:nth-child(1) section:nth-child(1) h2:nth-child(1) p:nth-child(2)").should('have.text',userdata.expected)
        cy.get("#product_549").check()

        //Enter the user name
        cy.get("#travname").type(userdata.firstname)
        cy.get("#travlastname").type(userdata.lastname)

        
        // cy.get("#dob").click(); // Open Date Picker
        
        // function selectYear(targetYear) {
        //     cy.get("select[aria-label='Select year']").invoke('val').then((currentYear) => {
        //         currentYear = parseInt(currentYear); // Convert to a number
        
        //         if (currentYear < targetYear) {
        //             cy.get(".ui-icon.ui-icon-circle-triangle-e").click();
        //             cy.wait(500); // Small wait to allow UI to update
        //             selectYear(targetYear);
        //         } else if (currentYear > targetYear) {
        //             cy.get(".ui-icon.ui-icon-circle-triangle-w").click();
        //             cy.wait(500);
        //             selectYear(targetYear);
        //         }
        //     });
        // }
        
        
        
        //     // Select Year First
        //     selectYear(2024);

        //     // Then Select Month
        //     cy.get("select[aria-label='Select month']").select('May');

        //     // Wait for UI Update
        //     cy.wait(5000);

        //     // Select Date 28
        //     cy.get(':nth-child(5) > :nth-child(3) > .ui-state-default').contains('28').click();

        //     // Close Date Picker
        //     cy.get('.ui-datepicker-close').click();
        
          
     
       
        //DOB
        cy.get("#dob").click()
        cy.get("select[aria-label='Select month']").select('May')  //Month

         cy.wait(3000)
         cy.get("select[aria-label='Select year']").select('1992')
         cy.get(':nth-child(5) > :nth-child(5) > .ui-state-default').contains('28').click() // Selects date 28

        // Close Date Picker
        //cy.get('.ui-datepicker-close').click()
        
        //Gender radio button
        cy.get("#sex_2").check()

        //Trip Type Radio button
        cy.get("#traveltype_2").check()

        //Travel details
        cy.get("#fromcity").type(userdata.travelcity)
        cy.get("#tocity").type(userdata.traveldestrict)


        //Departure Date
        cy.wait(4000)
        cy.get("#departon").click()
        cy.get("select[aria-label='Select month']").select('Aug')
        cy.wait(4000)
        cy.get("select[aria-label='Select year']").select('2025')
        cy.wait(4000)
        cy.get(':nth-child(5) > :nth-child(2) > .ui-state-default').contains('25').click() 

        //Return Date
        cy.wait(4000)
        cy.get("#returndate").click()
        cy.get("select[aria-label='Select month']").select('Aug')
        cy.wait(4000)
        cy.get("select[aria-label='Select year']").select('2025')
        cy.wait(4000)
        cy.get(':nth-child(6) > [data-handler="selectDay"] > .ui-state-default').contains('31').click()


        //Billing Details
        cy.get("#billing_phone").type(userdata.phone)
        cy.get("#billing_email").type(userdata.email)
        cy.get("#billing_address_1").type(userdata.streetAddress)
        cy.get("#billing_city").type(userdata.billingCity)
        cy.get("body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > form:nth-child(4) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(46) > p:nth-child(9) > span:nth-child(2) > span:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1)").type('Kar')
        cy.get("input[role='combobox']").type('{enter}')
        cy.wait(5000)
        cy.get("#billing_postcode").type(userdata.pinCode)
        cy.get("tr[class='order-total'] span[class='woocommerce-Price-amount amount']").should('have.text','₹1,200')

        //Placing the order or booking the ticket
        cy.get("#place_order").click()

        cy.wait(4000)
        //Clicking on the back button and clciking 'No' in the popup
        // Detect when Cypress navigates to `https://api.payu.in`
        cy.origin('https://api.payu.in', () => {
        // Perform actions on the new origin
        
   
        // cy.get("i[id='sidebar-backBtn'] small").click()

        // cy.get("div[class='cancel-modal-btns'] button[class='common-btn']").click()

        cy.wait(4000)
        //Clicking on the back button and clicking 'Yes' in the popup
        cy.get("i[id='sidebar-backBtn'] small").click()
        
        cy.get("button[class='common-btn txt-btn']").click()

    })
        cy.wait(10000)
        cy.get(".has-text-align-center.has-text-color.wp-block-heading", { timeout:4000 }).should('have.text','Thank you. Your order has been received.')
        
        //cy.get('p').should('have.text','Thank you for your order, please wait as you will be automatically redirected to PayUBiz.')
        
    })
})