
describe('pop ups', () => {
    beforeEach(() => {
        cy.visit(Cypress.env("login_url"))
    });
    it('Handle Frame', () => {
        cy.window().then((win) => {
            const stub = cy.stub(win, "open").callsFake(url => {
                win.location.href = "https://the-internet.herokuapp.com/";
            }).as('welcometab');
        });

        cy.contains('button', "Try it").click();
        cy.get("@welcometab").should("be.called");
        cy.get(".heading").should("have.text", "Welcome to the-internet")
        //include.text
        //have.text
    });
});
