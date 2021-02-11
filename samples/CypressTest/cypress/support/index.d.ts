/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {
    checkPlaceholder(name: string): Chainable<void>;
  }
}
