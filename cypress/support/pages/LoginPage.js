import BasePage from "./BasePage"

class LoginPage{

    elements = {
        text_box_username : ()=>cy.xpath("//*[@id='user-name']"),
        text_box_password : ()=>cy.xpath("//*[@id='password']"), 
        button_login      : ()=>cy.xpath("//*[@id='login-button']")
    }

    fill_username(username){
        //this.elements.text_box_username().type(username)
        
        BasePage.fillDataelement(this.elements.text_box_username(),username)
    }

    fill_password(password){
        //this.elements.text_box_password().type(password)
        BasePage.fillDataelement(this.elements.text_box_password(),password)
    }

    Click_login(){
        BasePage.ClickOnelement(this.elements.button_login())
    }

}  

export default new LoginPage;