import { overviewPage } from "../locators/overviewLocators";

export function selectItem(itemToSelect) {
  cy.contains(overviewPage.list, "spans:all").click();
  cy.contains(overviewPage.list, itemToSelect)
    .click()
    .should("have.class", overviewPage.activeListClass);
}

export function openSystemMenu() {
  cy.contains(overviewPage.selectSlot, "system:").click();
  cy.get(overviewPage.menuContent).should("be.visible");
}
