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

    cy.contains('Next').click();

    cy.contains('What is your email address?');

    cy.get('input[name=email]')
      .type('colt@thefallguy.com')
      .should('have.value', 'colt@thefallguy.com');

    cy.contains('Next').click();

    cy.get('[type="radio"][name="service"][value="Other"]')
      .check()
      .should('have.value', 'Other');

  });
})
