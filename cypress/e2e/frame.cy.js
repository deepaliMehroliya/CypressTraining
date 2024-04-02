
describe('pop ups', () => {
    beforeEach(() => {
        cy.visit('https://the-internet.herokuapp.com/iframe')
    });
    it('Handle Frame', () => {
        const myFrame = cy.get("iframe#mce_0_ifr").its("0.contentDocument.body").then(cy.wrap);
        myFrame.clear().type("My first cypress test for frame handling")
    });

    it('Handling frame using cypress plugin', ()=>{

        cy.frameLoaded("iframe#mce_0_ifr");
        cy.iframe("iframe#mce_0_ifr").find("p").type("Hello World!")
    })

})
