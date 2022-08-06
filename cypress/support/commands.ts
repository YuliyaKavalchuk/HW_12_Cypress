import selectors from "../../selectors/selectors";
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
// Cypress.Commands.add('login', (email, password) => { ... })
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

// Cypress.Commands.add("searchInGoogle", (searchedText: string, expectedText: string): void => {
//     cy.get('[name="q"]').type(searchedText);
//     cy.get('[jsname="VlcLAe"]').within(() => {
//         cy.get(".gNO89b").click();
//     });
//     cy.get("h3.LC20lb").eq(0).should("contain.text", expectedText);
// });

Cypress.Commands.add("urlDrive2", (expectedText: string): void => {
    cy.visit("https://www.drive2.ru/");
    cy.url().should("contain", expectedText);
});

Cypress.Commands.add("searchAttr", (searchedText: string, expectedText: string): void => {
    cy.get(selectors.searchInput).type(searchedText);
    cy.get('[type="submit"]').click();
    cy.get('[value="Ford"]').should("have.attr", expectedText);
});
Cypress.Commands.add("searchResult", (searchedText: string, expectedText: string): void => {
    cy.get('[class="x-search__input"]').type(searchedText);
    cy.get('[type="submit"]').click();
    cy.intercept("*", "**/getcookie").as("requestWaiter");
    cy.wait("@requestWaiter");
    cy.get('[href="/cars/ford/"]').within(() => {
        cy.get('[class="c-serp-item__header u-break-word"]').should("contain.text", expectedText);
    });
});
Cypress.Commands.add("signIn", (): void => {
    cy.get('[data-testid="topbar.login"]').click();
    cy.get('[name="Login"]').should("be.empty");
    cy.get('[name="Password"]').should("be.empty");
});
Cypress.Commands.add("LoggedIn", (email: any, password: any, expectedText: string): void => {
    cy.get('[data-testid="topbar.login"]').click();
    cy.get('[name="Login"]').type(email);
    cy.get('[name="Password"]').type(password);
    cy.get('div[class="f-group__item"]').within(() => {
        cy.get('[type="submit"]').click();
    });
    cy.get('[class="x-title"]').should("contain.text", expectedText);
});
