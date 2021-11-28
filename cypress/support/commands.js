// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password, url) => {
    cy.visit(url)
    cy.contains('Sign in').should('be.visible').click()
    cy.get('.form-control[formcontrolname=email]').type(email)
    cy.get('.form-control[formcontrolname=password]').type(password)
    cy.get('button[type=Submit]').should('be.visible').click()
    cy.contains('bart').should('exist')
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
