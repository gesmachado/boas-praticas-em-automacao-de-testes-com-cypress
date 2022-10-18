describe('Code duplication bad practice - Sample 2', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      '**/search**'
    ).as('getStories')

    cy.visit('https://hackernews-seven.vercel.app')
    cy.wait('@getStories')
  })

  // Forma 1 - Com reuso
  const terms = ['reactjs', 'viewjs']
  terms.forEach(term => {
    it('searches for ${term}', () => {
      cy.search(term)
  
      cy.wait('@getStories')
  
      cy.get('.table-row')
        .should('have.length', 100)
    })
  })

  // Forma 2 - sem iteração e reuso

  it('searches for "reactjs"', () => {
    cy.search('reactjs')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })

  it('searches for "vuejs"', () => {
    cy.search('vuejs')

    cy.wait('@getStories')

    cy.get('.table-row')
      .should('have.length', 100)
  })
})
