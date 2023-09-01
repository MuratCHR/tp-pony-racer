import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('Login Page', () => {
  it('should navigate to the login page', () => {
    cy.visit('/login');
    cy.url().should('include', '/login');
  });

  it('should display the login form', () => {
    cy.visit('/login');
    cy.get('form').should('be.visible');
  });

  it('should fill in the username and password fields and submit', () => {
    cy.visit('/login');
    cy.get('#username').type('username');
    cy.get('#password').type('password');
    cy.get('#submit').click();
  });
});

