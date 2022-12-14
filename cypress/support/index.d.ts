// declare namespace Cypress {
//     interface Chainable<Subject> {
//         searchInGoogle(searchedText: string, expectedText: string): void;
//     }
// }
// in cypress/support/index.ts
// load type definitions that come with Cypress module
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
        urlDrive2(expectedText: string): void;
        searchAttr(searchedText: string, expectedText: string): void;
        searchResult(searchedText: string, expectedText: string): void;
        signIn(): void;
        LoggedIn(email: any, password: any, expectedText: string): void;
    }
}
