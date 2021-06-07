/// <reference types="cypress" />
import { When, Then } from 'cypress-cucumber-preprocessor/steps'
import '../common/user_is_on_page'

When(/the user presses a (.*)$/, function (key) {
  cy.window().trigger('keydown', { key, release: false })
})

When('the user presses keys {word} and {word}', function (key1, key2) {
  cy.window().trigger('keydown', { key: key1, release: false })
  cy.window().trigger('keydown', { key: key2, release: false })
})

When(/the user releases (.*)$/, function (key) {
  cy.window().trigger('keyup', { key, release: true })
})

Then('Press a key should be printed', function () {
  cy.get('[data-cy="key"]').should('have.text', 'Press a key')
})

Then(/(.*) should be printed periodically$/, function (key) {
  cy.get('[data-cy="key"]').should('have.text', key)
})
