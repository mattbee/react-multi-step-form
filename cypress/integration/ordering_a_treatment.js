describe('SH:24 Code Test', function() {
  it('Visits the Ordering page', function() {
    cy.visit('http://localhost:3000');
    cy.contains('SH:24 Order Journey')
  })
})
