declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to type a few random words into input elements
       */
      closeMenu(): Chainable<JQuery<HTMLElement>>;
    }
  }
}
