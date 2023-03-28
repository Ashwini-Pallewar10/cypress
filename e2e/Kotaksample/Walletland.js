
describe("MyTestSuite", () => {
    it("open kotak 811 and fill in the form", () =>{
    
    
    cy.visit("https://dev.wyreless.org/811-acqui");
    
    // Landing page
    
    cy.get("#input-with-sx").type("7019873800");
    cy.get("#email").type("Abu65@gmail.com");
    cy.get("#pincode").type("401107");
    
    cy.get('.form-action > .MuiButtonBase-root').click();
    
    cy.wait(30000);
    
    //pan aadhar page
    
    cy.get("#pan").type("KNPPH7698H");
    cy.get("#aadharInput").type("123412341234");
    
    cy.get("#openAccountConsent > .MuiButtonBase-root > .PrivateSwitchBase-input").check();
    
    cy.get(".form-action > .MuiButtonBase-root").click();
    
    cy.wait(30000);
    
    cy.get(".action-wrap > .MuiButton-contained").click();
    
    cy.wait(30000);
    
    
    //aadhar number verification page 
    //verify later

    cy.get("#toggle-verify-later").click();

    cy.wait(30000);

    cy.get(".action-wrap > .MuiButton-contained").click();

    cy.wait(30000);

    //adhaar authentication page

    cy.get('#mui-component-select-gender').click();
    cy.get('[data-value="SE"]').click();

    cy.get("#dob").type("06/12/1992");

    cy.get(".form-action > .MuiButtonBase-root").click();

    cy.wait(30000);

    // Otp mobile

    cy.get('.formControl').eq(0).type('1');
cy.get('.formControl').eq(1).type('1');
cy.get('.formControl').eq(2).type('1');
cy.get('.formControl').eq(3).type('1');
cy.get('.formControl').eq(4).type('1');
cy.get('.formControl').eq(5).type('1');

cy.wait(40000);

    //personal details page

cy.get('#occupation').click();
cy.get('[data-value="M"]').click();

cy.get("#occupation").click();
cy.get('[data-value="SPRS"]').click();

cy.get("#sourceOfIncome").click();

cy.get("#yearlyIncome").click();
cy.get('[data-value="05"]').click();

cy.get("#maritalStatus").click();
cy.get('[data-value="M"]').click();

cy.get("#fathersName").type("Father");

cy.get("#mothersMaidenName").type("Mother");

cy.get("input[name=reMothersMaidenName]").type("Mother");

cy.get(".personal-details_formAction__2QG2X > .MuiButtonBase-root").click();
cy.wait(30000);


//Add address page

cy.get("#houseNo").type("101-Sainagar");
cy.get("#addressLine1").type("CommLine123");
cy.get("#addressLine2").type("CommLine456");
cy.get("#landmark").type("Near Tower");
cy.get("#pincode").type("401107");

cy.get(".form-action > .MuiButtonBase-root").click();

cy.wait(30000);

//nominee details page


cy.get(".btn-check").click();

cy.wait(30000);


//self declaration page

cy.get("t-body > .MuiTypography-inherit").click();
cy.get(".form-action > .MuiButtonBase-root").click();

cy.wait(30000);


//set MPIN page


cy.get(":nth-child(1) > .typ-pin > .bs-otp-input > .otp > :nth-child(1) > .formControl").click();
cy.get(":nth-child(1) > .typ-pin > .bs-otp-input > .otp > :nth-child(1) > .formControl").type('545352');

cy.get(":nth-child(2) > .typ-pin > .bs-otp-input > .otp > :nth-child(1) > .formControl").click();
cy.get(":nth-child(2) > .typ-pin > .bs-otp-input > .otp > :nth-child(1) > .formControl").type('545352');

cy.get(".MuiButton-contained").click();

cy.wait(30000);

// configure-card page

cy.get('.PrivateSwitchBase-input').click();
cy.get(".if-footer > .MuiButtonBase-root").click();

cy.wait(30000);

//////
//account overview page

cy.get(".account-details-footer > .MuiButton-contained").click();
cy.wait(30000);

//VKYC video verification page

cy.get(".k-footer > .MuiButton-contained").click();
cy.wait(30000);

//kyc communication page

cy.get(".EtbCommunicationAddressCard_radioWrapper__xHpTu > .MuiButtonBase-root > .PrivateSwitchBase-input").click();
cy.get(".info-action > .MuiButtonBase-root").click();

cy.wait(30000);

//mitc consent

cy.get(".bs-form > .MuiTypography-root").click();
cy.get(".form-action > .MuiButton-contained").click();

cy.wait(30000);

//

cy.get(".action-wrap > .MuiButton-contained").click();

cy.wait(30000);

//upload document

cy.get(".action-wrap > .MuiButtonBase-root").click();

cy.wait(30000);

//schedule appointment


cy.get('#__next > div > div.tpl-overview.kyc-schedule-appointment_tplOverview__1Vd-P > main > div > div > div.a-body.kyc-schedule-appointment_aBody__1X8qb > div > ul > li:nth-child(2) > div > label').click();

cy.get(".form-action > .MuiButton-contained").click();

cy.wait(30000);


});

});
