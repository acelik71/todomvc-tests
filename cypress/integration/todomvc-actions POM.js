/// <reference types="cypress" />

import {TodoPage} from "../page-objefts/todo-page"

describe('todo actions',()=>{
    const todoPage = new TodoPage()

beforeEach(()=>{
    todoPage.nav

    cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")
})
it('should add a new todo to the list', () => {
    cy.get('label').should('have.text', 'Clean room')
    cy.get('.toggle').should('not.be.checked')
})

it('should mark a todo as complete', () => {
    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
})

it('should clear completed', () => {
    cy.get('.toggle').click()
    cy.contains('Clear').click()
    cy.get('todo-list').should('not.have.descendants', 'li')
})
})