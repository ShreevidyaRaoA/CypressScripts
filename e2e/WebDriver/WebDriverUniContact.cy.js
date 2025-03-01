describe("Test University contact", ()=> {
    let userdata1
    before( () =>{
        cy.fixture("WebDriverUniContact").then((data) =>{
            userdata1=data;
        })
    })

    it('Web Driver University Contact', ()=>{
        //cy.fixture("WebDriverUniContact").then((data) =>{

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        //data.foreach((userdata1) => {
            cy.get("input[placeholder='First Name']").type(userdata1.userfirstname)
            cy.get("input[placeholder='Last Name']").type(userdata1.userlastname)
            cy.get("input[placeholder='Email Address']").type(userdata1.useremail)
            cy.get("textarea[placeholder='Comments']").type(userdata1.comments)
            cy.wait(4000)
            cy.get("input[value='RESET']").click()

            //if(userdata1.userfirstname=='')
        })
  
    it('Web Driver University Contact', ()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("input[placeholder='First Name']").type(userdata1.userfirstname)
        cy.get("input[placeholder='Last Name']").type(userdata1.userlastname)
        cy.get("input[placeholder='Email Address']").type(userdata1.useremail)
        cy.get("textarea[placeholder='Comments']").type(userdata1.comments)
        cy.get("input[value='SUBMIT']").click()
        cy.get("div[id='contact_reply'] h1").should('have.text','Thank You for your Message!')
        cy.wait(4000)
    })

    it('Web Driver University Contact with invalid data', ()=>{
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get("input[placeholder='First Name']").type(userdata1.userfirstname)
        cy.get("input[placeholder='Last Name']").type(userdata1.userlastname)
        cy.get("input[placeholder='Email Address']").type("shree.com")
        cy.get("input[value='SUBMIT']").click()
       
    })

})
