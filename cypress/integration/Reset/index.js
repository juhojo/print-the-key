/// <reference types="cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import '../common/user_is_on_page'

Given('the application prints some letters', function () {
  cy.window().trigger('keydown', { key: 'á', release: false })
})

When('the user presses reset', function () {
  cy.get('[data-cy="reset"]').click()
})

Then('Press a key should be printed', function () {
  cy.get('[data-cy="key"]').should('have.text', 'Press a key')
})
