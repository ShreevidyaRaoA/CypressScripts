describe('Custom commands', ()=> {

    it("handling links", ()=> {
        cy.visit("https://www.flipkart.com/fastrack-revoltt-fs1-1-83-display-bt-calling-fastcharge-110-sports-mode-200-watchfaces-smartwatch/p/itmc37b506d7ae4e?pid=SMWGN4YE3YRF2QH9&lid=LSTSMWGN4YE3YRF2QH9J09ZDA&marketplace=FLIPKART&store=ajy%2Fbuh&spotlightTagId=BestsellerId_ajy%2Fbuh&srno=b_1_5&otracker=browse&fm=organic&iid=b914ea7c-1ed2-401d-984a-e729df91658b.SMWGN4YE3YRF2QH9.SEARCH&ppt=browse&ppn=browse&ssid=2mglvq4wdc0000001732903832008");
        
        //direct - without using custom command
       // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()

        //using custom command
        cy.clickLink("Fastrack Revoltt FS1,46.9mm HD Display,Working Crown,Ad...");  //label of the element
        cy.get("div[class='_1sdMkc LFEi7Z Cd8ZYz'] a[title='Fastrack Revoltt FS1,46.9mm HD Display,Working Crown,Advance Chipset,BT Calling,IP68,SOS Smartwatch']").should('have.text','"Fastrack Revoltt FS1,46.9mm HD Display,Working Crown,Ad..."');

    })

    it.only("overwriting existing command", () =>{
        cy.visit("https://www.flipkart.com/fastrack-revoltt-fs1-1-83-display-bt-calling-fastcharge-110-sports-mode-200-watchfaces-smartwatch/p/itmc37b506d7ae4e?pid=SMWGN4YE3YRF2QH9&lid=LSTSMWGN4YE3YRF2QH9J09ZDA&marketplace=FLIPKART&store=ajy%2Fbuh&spotlightTagId=BestsellerId_ajy%2Fbuh&srno=b_1_5&otracker=browse&fm=organic&iid=b914ea7c-1ed2-401d-984a-e729df91658b.SMWGN4YE3YRF2QH9.SEARCH&ppt=browse&ppn=browse&ssid=2mglvq4wdc0000001732903832008");
        
        cy.clickLink("FASTTRACK REVOLTT FS1,46.9mm HD Display,Working Crown,Ad...");  //label of the element
        cy.get("div[class='_1sdMkc LFEi7Z Cd8ZYz'] a[title='Fastrack Revoltt FS1,46.9mm HD Display,Working Crown,Advance Chipset,BT Calling,IP68,SOS Smartwatch']").should('have.text','"Fastrack Revoltt FS1,46.9mm HD Display,Working Crown,Ad..."');


    })


})