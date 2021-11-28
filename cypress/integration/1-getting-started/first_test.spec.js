describe('our first test suite', () => {
    beforeEach(() => {
        cy.login('bartosz.chojnacki4@gmail.com', 'test123', 'http://localhost:4200/')
    })
    it('user should be able to add a new article', () => {
        cy.contains('New Article').click()
        const newArticleName = 'Title'
        cy.get('[formcontrolname="title"]').type(newArticleName)
        cy.get('[formcontrolname="description"]').type("Description")
        cy.get('[formcontrolname="body"]').type("Body")
        cy.contains('Publish Article').click()
        cy.location('pathname').should('contains', '/article/')
        cy.contains('bart').click()
        cy.get('app-article-list').find('app-article-preview').should('have.length', 1)
    })

    it('user should be able to delete an article', () => {
        cy.contains('bart').click()
        cy.get('.preview-link').click()
        cy.location('pathname').should('contains', '/article/')
        cy.contains('Delete Article').click()
        cy.get('.app-article-preview').should('contain', 'No articles are here... yet.').should('be.visible')
    })
})
