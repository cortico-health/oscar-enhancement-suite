import plugin from "raw-loader!../../dist/cortico-min.js";
describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
    cy.visit("/")
      .get(":nth-child(1) > .form-control")
      .type("oscardoc")
      .get(":nth-child(2) > .form-control")
      .type("37uRc3mFK2mZt38e6Nn7FxWEJHzhfG81")
      .get(":nth-child(3) > .form-control")
      .type("1117")
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
