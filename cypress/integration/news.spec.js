describe('Home page', function(){
    it('should display a headline', function(){
        cy.visit('/')
        cy.get('#headline1').should('contain', 'This is a headline')
    })
})
    