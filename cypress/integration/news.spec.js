describe('Home page', function(){
    
    beforeEach(function(){
        cy.intercept("https://content.guardianapis.com/world/2021/mar/22/*", {fixture: 'covid.json'})
    })

    it('should display a headline', function(){
        cy.visit('/')
        cy.get('#headline1').should('contain', 'This is a headline')
    })

    it('should display a headline from an API', function(){
        cy.visit('/')
        cy.get('#headline2').should('contain', 'Link between diabetes and coronavirus infections')
    })

    it('should display an image from an API', function(){
        cy.visit('/')
        cy.get('#img1').should('have.attr', 'alt')
    })

    it('should display 3 headlines and 3 corresponding images', function(){
        cy.visit('/')
        cy.get('#headline3').should('contain', 'Aston Villa agree £30m deal for Norwich midfielder Emiliano Buendía')
        cy.get('#headline4').should('contain', 'third headline')
        cy.get('#img2').should('have.attr', 'alt')
        cy.get('#img3').should('have.attr', 'alt')
    })


})
