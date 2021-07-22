import plugin from "raw-loader!../../dist/cortico-min.js";

const username = Cypress.env("OSCAR_LOGIN");
const password = Cypress.env("OSCAR_PASSWORD");
const pin = Cypress.env("OSCAR_PIN");

describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
    cy.visit("/")
      .get(":nth-child(1) > .form-control")
      .type(username)
      .get(":nth-child(2) > .form-control")
      .type(password)
      .get(":nth-child(3) > .form-control")
      .type(pin)
      .get(".btn")
      .click();

    cy.location("pathname", { timeout: 10000 }).should("include", "/provider");

    cy.document().then((document) => {
      const script = document.createElement("script");
      script.text = plugin;
      document.body.appendChild(script);
    });
  });
});
