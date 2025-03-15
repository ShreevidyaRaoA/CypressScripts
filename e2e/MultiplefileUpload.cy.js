describe("Multiple file upload", ()=>{
    it("Uploading multiple fiels", ()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")

        //The added files should be present below the fixtures folder
        const files = ['FNOL.pdf', 'amazon.png', 'Flipcart.png']

        cy.get('#filesToUpload').attachFile(files);

        //Click on accepting terms checkbox
       // cy.get("#terms").click()

        //Click on submit fiel button
        //cy.get(':nth-child(6) > strong').should('contain', 'FNOL.pdf', 'amazon.png', 'Flipcart.png');
        cy.get(':nth-child(6) > strong').should('contain', 'Files You Selected:');
        cy.wait(4000)
    
    })

    it("Guru99 website", ()=>{

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
          
        const files = ['FNOL.pdf', 'amazon.png', 'Flipcart.png'] 
        cy.get('#uploadfile_0').attachFile(files);

        //Click on accepting terms checkbox
        cy.get("#terms").click()

        //Click on submit fiel button
        cy.get("#submitbutton").click()
    
        // Verify the file upload message
        cy.get("h3[id='res'] center").should('contain', '1 file has been successfully uploaded'); 
    
    })
})