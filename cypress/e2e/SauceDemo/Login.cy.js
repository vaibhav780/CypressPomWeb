/// <reference types="cypress" />
import LoginPage from '../../support/pages/LoginPage';
import Products from '../../support/pages/Products';

describe('Sauce Demo', () => {
    const data = require('/cypress/fixtures/credentials.json')
    beforeEach(() => {
        // cy.visit('https://www.saucedemo.com/v1/');
        cy.goToApp();
    })


    // it.skip('@regression @sanity Login with standard Credentials', () => {
    //     //   cy.get('#user-name').type(username)
    //     cy.xpath('//*[@id="user-name"]').type(data.username)
    //     cy.get('#password').type(data.password)
    //     cy.screenshot()
    //     cy.get('#login-button').click()
    //     cy.get('.product_label').should('have.text', 'Products')
    //     cy.screenshot()
    // })


    it('@regression Using POM',()=>{
        LoginPage.fill_username(data.username)
        LoginPage.fill_password(data.password)
        LoginPage.Click_login()
        Products.Verify_productPage()
    
    })
    

    // it('@regression Verify Page Title', () => {
    //     cy.title().should('contain', 'Swag Labs')
        
    // })








})