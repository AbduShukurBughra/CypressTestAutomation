describe('Cypress Selector Playground', ()=>{
          it.only('Login Test', ()=>{
                    cy.visit("https://opensource-demo.orangehrmlive.com/");

                    // cy.xpath("//input[@name='username']").type("admin");
                    cy.get("input[name='username']").type("admin");

                    // cy.xpath("//input[@name='password']").type("admin123");
                    cy.get("input[name='password']").type("admin123");
                    
                    // cy.xpath("//button[@type='submit']").click();
                    cy.get("button[type='submit']").click();
                    // cy.get('.oxd-button').click();
          });   
          

});