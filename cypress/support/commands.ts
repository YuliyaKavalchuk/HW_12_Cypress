import {url} from "../fixtures/constMainPage";
import {searchResult} from "../fixtures/expectedResult";
import {
    btnSignIn,
    btnSubmit, btnSubmitPart1, loggedInTitle,
    loginField,
    passwordField,
    resultFieldPart1,
    resultFieldPart2,
    searchInput
} from "../fixtures/locators";


Cypress.Commands.add("urlDrive2", (expectedText: string): void => {
    cy.visit(url);
    cy.url().should("contain", expectedText);
});

Cypress.Commands.add("searchAttr", (searchedText: string, expectedText: string): void => {
    cy.get(searchInput).type(searchedText);
    cy.get(btnSubmit).click();
    cy.get(searchResult).should("have.attr", expectedText);
});
Cypress.Commands.add("searchResult", (searchedText: string, expectedText: string): void => {
    cy.get(searchInput).type(searchedText);
    cy.get(btnSubmit).click();
    cy.intercept("*", "**/getcookie").as("requestWaiter");
    cy.wait("@requestWaiter");
    cy.get(resultFieldPart1).within(() => {
        cy.get(resultFieldPart2).should("contain.text", expectedText);
    });
});
Cypress.Commands.add("signIn", (): void => {
    cy.get(btnSignIn).click();
    cy.get(loginField).should("be.empty");
    cy.get(passwordField).should("be.empty");
});
Cypress.Commands.add("LoggedIn", (email: any, password: any, expectedText: string): void => {
    cy.get(btnSignIn).click();
    cy.get(loginField).type(email);
    cy.get(passwordField).type(password);
    cy.get(btnSubmitPart1).within(() => {
        cy.get(btnSubmit).click();
    });
    cy.get(loggedInTitle).should("contain.text", expectedText);
});
