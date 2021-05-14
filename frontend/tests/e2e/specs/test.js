// https://docs.cypress.io/api/introduction/api.html

describe('Barkwire', () => {
  it('Identifies the page', () => {
    cy.visit('/')
    cy.contains('h1', 'BarkWire')
  })

  it('Lists dogs', () => {
    cy.visit('/')
    cy.contains('a', 'Dogs').click()
    cy.contains('h2', 'Dogs')
    cy.get(".dog-listing").should("have.length.gt", 1)
  })

  it('Lists places', () => {
    cy.visit('/')
    cy.contains('a', 'Places').click()
    cy.contains('h2', 'Places')
    cy.get(".place-listing").should("have.length.gt", 1)
  })

})
