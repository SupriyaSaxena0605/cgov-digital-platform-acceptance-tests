/// <reference types="Cypress" />
import { When, Then } from "cypress-cucumber-preprocessor/steps";

When('user click on the link with href {string} and url for popup as {string}', (href, popupUrl) => {

  // const clickEventHandlerMock = cy.stub()
  // cy.get(`a.definition[href='${href}']`).then(input => {
  //   input.on('click', clickEventHandlerMock)

  //   cy.get(`a.definition[href='${href}']`)
  //     .click()
  //     .then(() => {
  //       expect(clickEventHandlerMock).to.be.calledOnce;
  //     console.log(clickEventHandlerMock)
  //     })
  // })


  /* cy.server()
     cy.route({
       method: "GET",
       url: '/glossary/v1/Terms/Cancer.gov/Patient/en/45214'
     }).as('firstLink');
   cy.get(`a.definition[href='${href}']`)
   .click();
   cy.wait('@firstLink').then((xhr) => {
     assert.isNotNull(xhr.response.headers, '1st API call has data')
   })
   
 });*/

  cy.server()
  cy.route({
    method: "GET",
    url: popupUrl
  }).as('secondLink');
  cy.get(`a.definition[href='${href}']`)
    .click();

});

Then('the call is stub', () => {

  cy.wait('@secondLink').then((xhr) => {
    assert.isNotNull(xhr.response.body, '1st API call has data');
    console.log(xhr.response.body);
  })
});

/*And('the following values are received', datatable => {

  cy.wait('@secondLink').should('have.property', 'status', 200)
  cy.get('@secondLink').should((xhr) => {
    const params = xhr.response.body;
    const paramItem = Array.from(params.entries()).map(([pkey, pvalue]) => {
      //expect(xhr.response.body, 'response body').to.include()
      for (const { property, value } of dataTable.hashes()) {
        if (property === pkey) {
          expect(pvalue).equal(value);
        }
      }
    })
  })

});*/

And('the following values are received', datatable => {
  cy.fixture('definitionPopup/popup.json').as('property')

});
