describe('Then and Wrap usage Cypress ', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
  
    it('Go to login page ', () => {
      cy.get('input[name="username"]').then((username)=>{
        cy.wrap(username).type("Admin")
        cy.get('input[name="password"]').type('admin123')
      }).then(()=>{
        cy.get('button[type="submit"]').click()
      })

  
    })
  })
  