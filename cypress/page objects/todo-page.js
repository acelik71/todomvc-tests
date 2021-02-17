import { type } from "cypress/types/jquery"

export class TodoPage{
    navigate(){
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
    }

    addTodo(todoText) {
        cy.get('.new-todo').type(todoText + "{enter}")
    }
}