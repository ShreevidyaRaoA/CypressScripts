describe('File upload test', ()=> {
    it('File upload Test', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        //const yourFixturePath = 'data.json';
        //cy.get('#file-upload').attachfile(yourFixturePath);
        cy.get('#file-upload').selectFile("C:\\Users\\DCKLP-110\\OneDrive\\Documents\\ShareX\\Screenshots\\2024-12\\wx8MbBMQGH.png")
        cy.get('#file-submit').click()
        
    })
})