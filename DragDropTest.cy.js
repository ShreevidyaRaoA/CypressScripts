describe('Drag drop', ()=> {
    it('Drag drop test', ()=> {
        cy.visit('https://www.globalsqa.com/demo-site/draganddrop/')
        cy.click('body > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)')
        cy.get("img[alt='The peaks of High Tatras']").drag('#trash')
 

    })
    
    it.only('Drag drop test', ()=> {
        cy.visit('https://commitquality.com/practice-drag-and-drop')
        cy.get("#small-box").drag('.large-box')

    })

})