
describe('pop ups', () => {
    beforeEach(() => {
        cy.visit('https://nichethyself.com/tourism/home.html')
        cy.visit('https://the-internet.herokuapp.com/windows')
    });

    it.only('Contact us window', () => {

        cy.window().then((win) => {
            const stub = cy.stub(win, "open").callsFake(url => {
                win.location.href = "https://nichethyself.com/tourism/contact.html";
            }).as('contactus');

        });
        cy.contains("button", "Contact us").click()
        cy.get("@contactus").should("be.called")
        cy.get(".glyphicon-search").click()

    });

    it('Handle tabs', () => {
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.contains("a", "Click Here").invoke("removeAttr", "target").click()
        cy.url().should("include", "new")
        cy.get("h3").should("include", "New Window")
    });

})
