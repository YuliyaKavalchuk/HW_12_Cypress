import {email, password, searchText, url} from "../../fixtures/constMainPage";
import {urlPart, expectedLoggedInResult} from "../../fixtures/expectedResult";

describe("My first test", () => {
    beforeEach("Open the website", () => {
        cy.visit(url);
    });
    it("1: Check the URL", function () {
        cy.urlDrive2(urlPart);
    });
    it("2: Check the search is field with the value", function () {
        cy.searchAttr(searchText, "value");
    });
    it("3: Check the search results", function () {
        cy.searchResult(searchText, searchText);
    });
    it("4: Check SigIn", function () {
        cy.signIn();
    });
    it("5: Check LogIn", function () {
        cy.LoggedIn(email, password, expectedLoggedInResult);
    });
});
