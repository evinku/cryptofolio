describe("Cryptofolio", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/markets");
  });

  describe("Markets", () => {
    it("shows the correct header text", () => {
      cy.get('[data-cy="header-title-markets"]').should("contain", "Markets");
    });
    it("click on like buttons", () => {
      cy.get('[data-cy="coin-like"]')
        .eq(5)
        .click();
      cy.get('[data-cy="coin-like"]')
        .eq(10)
        .click();
      cy.get('[data-cy="coin-like"]')
        .eq(100)
        .click();
      cy.get('[data-cy="coin-like"]')
        .eq(249)
        .click();
    });
    it("search coin bitcoin ", () => {
      cy.get('[data-cy="input-search"]').type("bitcoin");
      cy.get('[data-cy="coin-card-name"]').should("contain", "Bitcoin");
    });

    it("click on filter like buttons", () => {
      cy.get('[data-cy="coin-like-filter"]').click();
    });
  });
});
