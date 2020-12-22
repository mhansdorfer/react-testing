describe("Counter component tests", () => {

    beforeEach(() => {
        cy.visit('localhost:3000/');
      })

    it('should counter be initially 0 if no props is used', () => {
 
    });
    
    it('should counter be initially 10 if props.start is 10', () => {
        cy.get('.counterVal').should(($counter) => {
            const text = $counter.text();
            expect(text).to.equal('10');
        });
    });

    it('should Counter have increment and decrement buttons', () => {
        cy.get('.btn-inc').should('exist');
        cy.get('.btn-dec').should('exist');
    });

    it("should counter increase by two if '+' is pressed twice", () => {
        cy.get('.btn-inc').click().click();
        cy.get('.counterVal').should('contain', "2");
    });

    it("should counter decrease by one if '-' is pressed", () => {
        cy.get('.btn-dec').click();
        cy.get('.counterVal').should("contain",'9');
    });

    it("should counter value be set to the value from input when button 'Zmien' is pressed and + / - buttons continue to change the value properly", () => {
        cy.get('input').type(12);
        cy.get('.btn-change').click();
        cy.get('.counterVal').should("contain", "12");
        cy.get('.btn-dec').click();
        cy.get('.counterVal').should("contain", "11");
        cy.get('.btn-inc').click();
        cy.get('.counterVal').should("contain", "12");
        cy.get('input').should('have.value', '0');
    });

    it("should Reset button reset the counter to initial state 0", () => {

    });

    it("should Reset button reset the counter to initial state 10", () => {
        cy.get(".btn-inc").click();
        cy.get(".btn-inc").click();
        cy.get(".counterVal").should("contain", "12"); //value changed
        cy.get('.btn-reset').click();
        cy.get(".counterVal").should("contain", "10"); //value set back to the initial value
    });
});