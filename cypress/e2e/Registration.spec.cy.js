describe('Fill all details', ()=>{
          it('Complete registration',()=>{

                    cy.viewport(1920, 1080)
                    cy.visit("https://demoqa.com/register")
                    cy.get('#firstname').type("Bughra");
                    cy.get('#lastname').type("Ali");
                    cy.get('#userName').type("Hakan");
                    cy.get('#password').type("Admin123!");
                    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
                    cy.get('#register').click();
                    // cy.xpath("//input[@id='firstname']").type("Bughra");
                    // cy.xpath("//input[@id='lastname']").type("Ali");
                    // cy.xpath("//input[@id='userName']").type("Hakan");
                    // cy.xpath("//input[@id='password']").type("admin123!");
                    


          })
});