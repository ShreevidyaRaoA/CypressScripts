context('UserManage API automation test', () => {
    it('GET-List user', () => {
        cy.request('GET','https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).equal(200)          //Assertion
            expect(response.body.data[0].first_name).equal('Michael')   //Assertion
        })
    })

    it('POST-Create user', () => {
        var user={
            "name": "Shreevidya",
            "job": "leader"
        }

        cy.request('POST','https://reqres.in/api/users',user).then((response) => {
            expect(response.status).equal(201)          //Assertion
            expect(response.body.name).equal(user.name)   //Assertion
            expect(response.body.job).equal(user.job)
        })
    })


    it('Update user', () => {
        var user1={
            "name": "Paavani",
            "job": "Sample test"
        }

        cy.request('PUT','https://reqres.in/api/users/2',user1).then((response) => {
            expect(response.status).equal(200)          //Assertion
            expect(response.body.name).equal(user1.name)   //Assertion
            expect(response.body.job).equal(user1.job)
        })
    })

    it('Delete user', () => {

        cy.request('DELETE','https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)          //Assertion
            // expect(response.body.name).equal(user1.name)   //Assertion
            // expect(response.body.job).equal(user1.job)
        })
    })

})