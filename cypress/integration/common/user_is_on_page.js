/// <reference types="cypress" />
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given('that an user is on index page', function () {
  cy.visit('http://localhost:8080')
})
