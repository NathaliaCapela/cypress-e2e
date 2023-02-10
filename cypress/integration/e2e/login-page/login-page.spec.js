/// <reference types="cypress" />

describe ('Acessar a login page e validar a existencia de componentes', () => {
    beforeEach('', () => {     
        cy.visit('/login')
        cy.viewport(1280,800)
    })


it('Validar a existência dos itens como: Textos, botões e inputs na Login Page', () => {
    cy.get(' [data-cy="LoginFormSection"]').should('be.visible')
    cy.get('[data-cy="LoginWelcomeText"]').should('be.visible')
    cy.get('[data-cy="LoginWelcomeText"]').should('have.text', 'Seja bem-vindo(a)!')
    cy.get('[data-cy="FormEmailLabel"]') .should('be.visible');
    cy.get('[data-cy="FormErrorMessageContainer"]').should('be.visible') 
    cy.get('[data-cy="FormPasswordInput"]').should('be.visible') 
    cy.get('[data-cy="ForgotPasswordText"]').should('be.visible') 
    cy.get('[data-cy="SubmitButton"]').should('be.visible') 
    cy.get('[data-cy="CopyrightInformation"]').should('be.visible')
   

});
})

it('B', () =>{

})

it('C', () => {

})
it('D', () => {
    
})

it('E', () => {
    
})

it('F', () => {
    
});

it('G', () => {
    
})

it('H', () => {
    
})

it('I', () => {
    
});

it('J', () => {
    
});















