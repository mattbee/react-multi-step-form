describe('SH:24 Code Test', function() {
  it('Visits the Ordering page', function() {
    cy.visit('http://localhost:3000');
    cy.contains('SH:24 Order Journey')
  });

  it('Can order a product', function() {
    cy.visit('http://localhost:3000');

    cy.get('input[name=name]')
      .type('Colt Seavers')
      .should('have.value', 'Colt Seavers');
  });
})
