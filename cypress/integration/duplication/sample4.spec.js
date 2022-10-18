describe('Code duplication bad practice - Sample 4', () => {
  beforeEach(() => {
    cy.visit('https://bit.ly/2XSuwCW')
  })
 
  it('checks all checkboxes from a specific fieldset', () => {
    // Selecionar tudo
    cy.get('fieldset div input[type="checkbox"]').check()
      .should('be.checked')

    // Um de cada vez
    cy.get('#friend').check()
    cy.get('#publication').check()
    cy.get('#social-media').check()
  })
})
