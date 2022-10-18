describe('Flaky tests bad practice', () => {
  beforeEach(() => {

    cy.intercept(
      'GET',
      '**/search**',
      // Linha 8 pode ser comentada se não quiser mockar o back-end
      {fixture: 'stories'}
    ).as('getStories')

    cy.visit('https://wlsf82-hacker-stories.web.app')
    //cy.wait('@getStories')
  })

  Cypress._.times(10, () => {
    it('shows a max of 5 buttons for the last searched terms', () => {
      const faker = require('faker')

      Cypress._.times(6, () => {
        cy.search(faker.random.word())
      })

      //cy.wait('@getStories')

      cy.get('.last-searches button')
        .should('have.length', 5)
    })
  })
})
