describe('Home page', function(){
    
    it('should display a headline', function(){
        cy.visit('/')
        cy.get('#headline1').should('contain', 'This is a headline')
    })

    it('should display a headline from an API', function(){
        cy.intercept("https://content.guardianapis.com/world/2021/mar/22/*", {fixture: 'covid.json'})
        cy.visit('/')
        cy.get('#headline2').should('contain', 'Link between diabetes and coronavirus infections')
    })

    it('should display an image from an API', function(){
        cy.intercept("https://content.guardianapis.com/world/2021/mar/22/*", {fixture: 'covid.json'})
        cy.visit('/')
        cy.get('#img1').should('have.css', 'alt=', "image1")
    })

})
