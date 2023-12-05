it("Visuals demo app", () => {
  cy.visit("https://practice.expandtesting.com/notes/app/login");
  cy.get('[data-testid="login-email"]').type("temp_12345@mail.com");
  cy.get('[data-testid="login-password"]').type("password");

  cy.percySnapshot("Login page");

  cy.get('[data-testid="login-submit"]').click();
  cy.get('[data-testid="search-input"]').should("be.visible");

  cy.percySnapshot("Notes app");
});
