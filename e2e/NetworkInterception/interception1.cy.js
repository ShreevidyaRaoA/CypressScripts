describe('intercept with cypress example', ()=> {

    it('test api with simple intercept', ()=> {

        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept({
            path: '/posts'

        }).as('check')  //alias name

        //cy.get ('tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)').click()
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@check').then(testresult => {
         cy.log(JSON.stringify(testresult))
        console.log(JSON.stringify(testresult))

        //assertion
        expect(interfaces.response.body).to.have.length(100)
       })
    })

    it('mocking with intercept test', ()=> {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/posts', {totalpost:5 , name: 'Shreevidya'}).as('check')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        //cy.wait('@check')

    })


    it.only('mocking with intercept test with dynamic fixture', ()=> {
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET', '/posts', {fixture: 'createuser.json'}).as('check')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@check')

    })


    
})