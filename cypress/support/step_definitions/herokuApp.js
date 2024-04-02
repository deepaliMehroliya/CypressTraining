const {
    Given,
    When,
    Then,
  } = require("@badeball/cypress-cucumber-preprocessor");
  
  Given("User is on Home Page", ()=>{
    cy.visit('https://the-internet.herokuapp.com')
  })