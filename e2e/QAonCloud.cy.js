describe('Test Suite', function() {

it('QAonCloud website', () => {
    cy.visit('https://www.qaoncloud.com/')
    cy.get('.elementor-widget-container > a > img')
    cy.get('.fas.fa-bars');  //Menu bar

    
})

it.only('QAonCloud Mouseover function', () => {
    cy.visit('https://www.qaoncloud.com/')

    cy.get("a[href='/functional-testing-services']").should('not.be.visible') //assertion
    
    cy.get('.elementskit-menu-hamburger > :nth-child(1)').trigger('mouseover').click();
    cy.get('#menu-item-319 > .ekit-menu-nav-link > .icon').should('be.visible') //assertion
    //cy.get("input[type='button']").dblclick();
    //cy.get('button[type=button]').click();
  
  //or

  // cy.get('.elementskit-menu-hamburger > :nth-child(1)').invoke('show')
  // cy.get('.elementskit-menu-hamburger > :nth-child(2)').click()

})


it('QAonCloud Mouseover function', () => {
//Why us
cy.get('.ekit_page_list_title_title');
cy.get('.elementor-repeater-item-5245ae1 > .ekit_page_list_content > .elementor-icon-list-text > .ekit_page_list_title_title')

})

})