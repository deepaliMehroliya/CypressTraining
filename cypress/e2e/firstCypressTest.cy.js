/// <reference types="Cypress" />

describe('Tourism Login TEst cases', () => {
  it('Login into Tourism Website', () => {
    cy.visit('https://nichethyself.com/tourism/home.html')
    cy.get('input[name="username"]').type('stc123')
    cy.get('input[name="password"]').type('12345')
   // cy.get('#loginsection > form > .btn').click()
   //cypress waits for element to be loaded fpr max 4 secs ( Is impleented to avoid element not found exception)
    cy.get('#loginsection > form').submit()
    cy.title().should("eq", "My account")
    cy.url().should("include", "myaccount.html?")
  })
})

// # means id , . means class