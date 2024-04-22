describe.only('Telus API', () => {
    it.only('passes', () => {

        cy.request('GET', 'https://pokeapi.co/')
          .its('status')
          .should('equal', 200)

        cy.request('GET', 'https://pokeapi.co/')
          .then(response => {
            expect(response.body).to.include("https://pokeapi.co/api/v2/version/1/")
        });
        
    })
})