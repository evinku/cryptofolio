describe("Markets", () => {
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
      cy.get('[data-cy="coin-card-section"]').should("have.length", 1);
    });
    it("navigates to add transaction on click", () => {
      cy.get('[data-cy="coin-card-name"]')
        .eq(50)
        .click();
    });
  });
});

describe("Add transaction", () => {
  before(() => {
    cy.visit("http://localhost:3000/add-transaction");
  });

  it("create new transaction", () => {
    cy.get('[data-cy="input-quantity"]').type(50);
    cy.get('[data-cy="input-price"]').type(500);
  });
});
