/// <reference types="Cypress" />

describe("OrangeHRM Test Suite", ()=>{
  it("Verify URL",()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/");
            // cy.visit("https://www.facebook.com/");


            cy.url().should("include","orangehrmlive");
            // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/');

  });

  // it("Verify title", function(){

  //   cy.title().should("include","O");

  // });

  it("Login", ()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/");

    cy.get('input[name="username"]').type("admin").should("have.value","admin");

    cy.get('input[name="password"]').type("admin123"); //Valid password
    
    // cy.get('input[name="password"]').type("admin1234"); //invalid password

    // cy.get(".oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button").click();
    cy.xpath("//button[@type='submit']").click();
    
    // cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text","Invalid credentials");

    // cy.get
  });

})