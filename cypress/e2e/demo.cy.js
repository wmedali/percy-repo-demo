import { openSystemMenu, selectItem } from "../helpers/overview";

describe("Demo", function () {
  const itemToSelect = "http:";

  before(() => {
    cy.visit("https://uptrace.dev/");
    cy.contains('[class="v-tab"]', "Demo").click();
  });

  it("selectionner un element systeme et vérifier les elements d'interace graphique", () => {
    openSystemMenu();
    selectItem(itemToSelect);
    cy.closeMenu();

    // Verify system overview items
    cy.get(".v-data-table__wrapper")
      .find("table")
      .find("tbody")
      .find("tr")
      .each((line) => {
        cy.wrap(line).find("td").first().should("include.text", itemToSelect);
      });

    cy.get(".v-slide-group__content")
      .find(".v-btn--rounded")
      .each((btn) => {
        cy.wrap(btn).should("include.text", itemToSelect);
      });
  });

  it("selectionner un environnement et verifier l'affichage");
});
