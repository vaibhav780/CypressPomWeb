class Products{

    elements = {
       heading_products : ()=>cy.xpath("//*[@id='inventory_filter_container']/div"),
    }


    Verify_productPage(){
        this.elements.heading_products().should('have.text', 'Products')
    }
}


export default new Products