
describe('pop ups', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("login_url"))
    });
    it('Handle Frame', () => {
        const myFrame = cy.get("frame[name='frame-middle']").its("1.contentDocument.body").then(cy.wrap).click();
        myFrame.clear().type("My first cypress test for frame handling")
    });


})
