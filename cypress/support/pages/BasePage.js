class Base {


    ClickOnelement(element){
        element.click();
        cy.log("Click on element")
    }

    fillDataelement(element,text){
        cy.log("Entering data to element")
        element.type(text);
    }

}



export default new Base