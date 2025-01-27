describe('Iframe', ()=> {


    before(() => {
    cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/differentalerttypes')
})

it('Alert - First way', ()=> {
    cy.on('window:alert', alertText => {
        expect(alertText).to.eql('I\'m an Alert Box');
    })
    cy.get('button#alert').click()
})

it('Alert - Second way: Multiple Alerts', ()=> {
    const fn = cy.stub()
    cy.on('window:alert', fn)
        
    cy.get('button#miltiplealert').click().then(() =>{
        expect(fn.getCall(0)).to.be.calledWithExactly('First Alert Box')
        expect(fn.getCall(1)).to.be.calledWithExactly('Second Alert Box')
        expect(fn.getCall(2)).to.be.calledWithExactly('Third Alert Box')
    
    })
})


it('Confirm - First Way', () => {
    cy.on('window:confirm', confirmTxt => {
        expect(confirmTxt).to.eql('I\'m a Confirm Box');
        return false
    })
    cy.get('button#confirm').click()
})

//To get true 
it('Confirm - First Way', () => {
    cy.on('window:confirm', confirmTxt => {
        expect(confirmTxt).to.eql('I\'m a Confirm Box');
        return true     //or we can skip this line by default it will take true
    })
    cy.get('button#confirm').click()
})

it('Confirm - Second Way', () => {
    const stub = cy.stub()
    stub.onFirstCall().returns(true)
    cy.on('window:confirm', stub)
    cy.get('button#confirm').click().then(() => {
        expect(stub.getCall(0)).to.be.calledWithExactly('I\'m a Confirm Box')   
    })

    })

    it('Prompt', () => {
        cy.window().then(win => {
            const stub = cy.stub(win, 'prompt')
            stub.returns('Shree')
            cy.get('button#prompt').click()
        })
        
    })
   
    it('Custom Popup Dialog from hidden fields', () => {
        cy.get('button#cusdiag').click()
        cy.get('input#name').type('Username')
        cy.get('input#password').type('Password')
        cy.contains('Submit').click()
            
    })

    it('Custom pop up Dialog from function', () => {
        cy.get('button#moddiag').click()
        cy.contains('Close').click()
    })


    it.only('Window Pop up', () => {
        const pop_url = ('https://www.youtube.com/c/qaboxletstest/')
        cy.window().then(win => {
            const stub = cy.stub(win, 'open').as('windowopen')
        })
        cy.get('button#winpop').click()
        cy.get('@windowopen').should('be.calledWith', pop_url)
        cy.window().then(win => {
            win.location.href = pop_url
            cy.get('input#search').type('Cypress by qa box lets test{enter}')
        })
    })
})

