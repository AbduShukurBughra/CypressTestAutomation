describe('Cypress Selector Playground', ()=>{
          it('Login Test', ()=>{
                    cy.visit("https://opensource-demo.orangehrmlive.com/");

                    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin");

                    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123");  
                    
                    cy.get('.oxd-button').click();
          });   
          
          it.only('Forgot Password', ()=>{

                    cy.visit("https://opensource-demo.orangehrmlive.com/");

                    cy.contains('Forgot').click();
                    
          })

});