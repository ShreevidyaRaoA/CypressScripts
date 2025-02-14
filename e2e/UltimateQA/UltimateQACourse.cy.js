describe('Ultimate QA Course', ()=> {

    beforeEach(() => {
        // notice this alias is created just once using "before" hook
        cy.visit('https://ultimateqa.com/about/')
      })

    it('Free course', ()=> {
        //cy.visit('https://ultimateqa.com/about/')
        cy.get('.et_pb_section_0 > .et_pb_row > .et_pb_column > .et_pb_module > .et_pb_text_inner > h1').should('have.text','We elevate the way the world creates technology!')
        cy.get("ul[id='menu-footer-secondary-menu'] li[id='menu-item-218104'] a").click();
        //cy.get('#category-name').should('have.text','All Courses')
        cy.get("body > main:nth-child(4) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1) > div:nth-child(2) > div:nth-child(2) > p:nth-child(1) > span:nth-child(1)").click();
        cy.get('.section__heading.section__heading___c4125').should('have.text', 'TestProject Java SDK Tutorial')

        //Enroll for the course
        cy.get(".button.button-primary[href='/enroll/1037683?et=free']").click()
        cy.get('.top-drawer__label').click()
        cy.get('.product-price__value').should('have.text','$0.00')
        cy.get('.top-drawer__label').click()

    })

    //Searching for the free course

    it('Free sourse by searching the course', ()=> {
        //cy.visit('https://ultimateqa.com/about/')

        cy.get('.et_pb_menu__wrap > .et_pb_menu__icon').click()
        cy.get("input[placeholder='Search …']").type('Free Courses{enter}');

        //Selecting course
        cy.get("article[id='post-1019'] h2[class='entry-title'] a").click()
        cy.get(".entry-title").should('have.text','11 Greatest Selenium WebDriver Online Courses (2019)')
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > article:nth-child(1) > div:nth-child(2) > h2:nth-child(37) > span:nth-child(1) > a:nth-child(1) > strong:nth-child(1)").click();
        cy.origin('https://testautomationu.applitools.com', () => {
            // Commands to interact with the new origin
            cy.get(".btn.btn-warning.btn-lg.heroRegisterBtn").click();  // Example command
          
        
        cy.get("button[class='firebaseui-idp-button mdl-button mdl-js-button mdl-button--raised firebaseui-idp-password firebaseui-id-idp-button'] span[class='firebaseui-idp-text firebaseui-idp-text-long']").click();
        //Clicking on Next button without entering the eamil ID
        cy.get("button[type='submit']").click()
        cy.get(".mdl-textfield__label.firebaseui-label").should('be.visible','Enter your email address to continue')

        //entering invalid email ID
        cy.get("input[name='email']").type('shreevidya.com')  // Type invalid email
        cy.get("button[type='submit']").click()
        cy.get(".mdl-textfield__label.firebaseui-label").should('be.visible','Enter your email address to continue')

        //Clicking cancel button
        cy.get(".firebaseui-id-secondary-link.firebaseui-button.mdl-button.mdl-js-button.mdl-button--primary").click()
        
    });

        
    })
})