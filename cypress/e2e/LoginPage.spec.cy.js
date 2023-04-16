describe('User shold be login', ()=>{
          it('Login Page Tests', ()=>{
                    cy.viewport(1920, 1080)
                    cy.visit("https://demoqa.com/login")
                    cy.get('#userName').type("Hakan");
                    cy.get('#password').type("Admin123!");
                    cy.get('#login').click();
          });
})