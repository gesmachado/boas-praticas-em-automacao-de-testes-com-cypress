const faker = require('faker')
const editDestinationPage = require('../../page-objects/editDestination') // Só precisa se usar page object

describe('Page Object bad practice', () => {
  const randomDestination = Math.floor(Math.random() * 15) + 1

  beforeEach(() => {
    cy.visit(`https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}/edit`)
  })

  it('updates destination info', () => {
    const info = {
      name: faker.random.words(5),
      description: faker.random.words(5)
    }

    // Se usar page object
    //editDestinationPage.updateInfo(info)
    //editDestinationPage.updateInfo_2(info)
  
    //Se usar commands
    cy.updateDestination(info)  // só funciona na pasta support e jno arquivo commands.js

    cy.url()
      .should(
        'be.equal',
        `https://lit-chamber-61567.herokuapp.com/destinations/${randomDestination}`
      )
    cy.contains('h2', info.name)
      .should('be.visible')
    cy.contains('p', info.description)
      .should('be.visible')
  })
})
