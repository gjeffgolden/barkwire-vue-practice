// https://docs.cypress.io/api/introduction/api.html

describe('Barkwire', () => {
  it('Identifies the page', () => {
    cy.visit('/')
    cy.contains('h1', 'BarkWire')
  })

  it('Lists dogs', () => {
    cy.visit('/')
    cy.contains('a', 'dogs').click()
    cy.contains('h2', 'Dogs')
    cy.get(".dog-listing").should("have.length.gt", 1)
  })


})
