describe("My first test", () => {
    beforeEach("Open the website", () => {
        // logger.debug("Open the website")
        cy.visit("https://www.drive2.ru/");
    });
    it("1: Check the URL", function () {
        cy.urlDrive2("drive2");
    });
    it.only("2: Check the search is field with the value", function () {
        cy.searchAttr("Ford", "value");
    });
    it("3: Check the search results", function () {
        cy.searchResult("Ford", "Ford");
    });
    it("4: Check SigIn", function () {
        cy.signIn();
    });
    it("5: Check LogIn", function () {
        cy.LoggedIn("+375259389663", "mAzHIGeK", "Лента");
    });
});
