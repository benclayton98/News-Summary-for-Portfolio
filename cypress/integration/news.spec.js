describe('Home page', function(){
    
    it('should display a headline', function(){
        cy.visit('/')
        cy.get('#headline1').should('contain', 'This is a headline')
    })

    it('should display a headline from an API', function(){
        cy.visit('/')
        cy.get('#headline2').should('contain', 'whatever the API shows')
    })

})
