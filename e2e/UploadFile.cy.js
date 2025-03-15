describe('Uploading File', ()=>{
    it("Uploading single file", ()=> {
        cy.visit("https://the-internet.herokuapp.com/upload", { timeout: 120000, waitUntil: 'domcontentloaded' });

        //cy.wait(2000)
        const fileName = 'FNOL.pdf'; // Ensure this file exists in `cypress/fixtures`

    // Select the file input element and upload the file
    cy.get("#file-upload").attachFile(fileName);
    cy.get("#file-submit").click()

    // Verify the file upload (modify assertions as per your application)
    cy.get("div[class='example'] h3").should('contain', 'File Uploaded!'); 

    })

    it.only("Guru99 website", ()=>{

        cy.visit("https://demo.guru99.com/test/upload/", {timeout:120000})
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignore the 'archive_analytics' is not defined error
            if (err.message.includes('archive_analytics')) {
              return false;
            }
            
          });
          Cypress.on('uncaught:exception', (err, runnable) => {
            // Ignore 'Cannot read properties of null' errors
            if (err.message.includes("Cannot read properties of null")) {
              return false;
            }
          });
          
        const fileName = 'FNOL.pdf'; 
        cy.get('#uploadfile_0').attachFile(fileName);

        //Click on accepting terms checkbox
        cy.get("#terms").click()

        //Click on submit fiel button
        cy.get("#submitbutton").click()
    
        // Verify the file upload message
        cy.get("h3[id='res'] center").should('contain', '1 file has been successfully uploaded'); 
    
    })
    
})