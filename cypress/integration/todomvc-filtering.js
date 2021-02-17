/// <reference types="cypress" />
describe('filtering',()=>{
beforeEach(()=>{
    cy.visit('http://todomvc-app-for-testing.surge.sh/?delay-new-todo=3000')

    cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")
    cy.get('.new-todo', {timeout: 6000}).type("Learn JavaScript{enter}")
    cy.get('.new-todo', {timeout: 6000}).type("Use Cypress{enter}")
    cy.get(':nth-child(2) > .view > .toggle').click()
    // cy.get('.todo-list li:nth-child(2) .toggle').click()
})
it('should filter "Active" todos', () => {
    cy.contains('Active').click()
    cy.get('.todo-list li').should('have.length', 2)
})

it('should filter "Completed" todos', () => {
    cy.contains('Completed').click()
    cy.get('.todo-list li').should('have.length', 1)
})

it('should filter "All" todos', () => {
    cy.contains('All').click()
    cy.get('.todo-list li').should('have.length', 3)
})

})