
describe("MyTestSuite", () => {
it("open kotak 811 and fill in the form", () =>{


cy.visit("https://dev.wyreless.org/811-acqui");

// Landing page

const random = '7' + Math.random().toString();
cy.get("#input-with-sx").type(random);
cy.get("#email").type("App76565@gmail.com");
cy.get("#pincode").type("401107");

cy.get('.form-action > .MuiButtonBase-root').click();

cy.wait(40000);

//pan aadhar page

cy.get("#pan").type("JKLPP7088T");
cy.get("#aadharInput").type("123412341234");

cy.get("#openAccountConsent > .MuiButtonBase-root > .PrivateSwitchBase-input").check();

cy.get(".form-action > .MuiButtonBase-root").click();

cy.wait(40000);

cy.get(".action-wrap > .MuiButton-contained").click();

cy.wait(40000);


//aadhar number verification page 

cy.get('.formControl').eq(0).type('1');
cy.get('.formControl').eq(1).type('1');
cy.get('.formControl').eq(2).type('1');
cy.get('.formControl').eq(3).type('1');
cy.get('.formControl').eq(4).type('1');
cy.get('.formControl').eq(5).type('1');

cy.wait(40000);

//personal details page

cy.get('#occupation').click();
cy.get('[data-value="SE"]').click();

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


//communication address page

cy.get('.PrivateSwitchBase-input').click();
cy.get(".form-action > .MuiButtonBase-root").click();

cy.wait(30000);

//nominee details page


cy.get(".btn-check").click();

cy.wait(30000);


//self declaration page

cy.get(".MuiTypography-inherit").click();
cy.get(".form-action > .MuiButtonBase-root").click();

cy.wait(30000);


//set MPIN page


cy.get(":nth-child(1) > .typ-pin > .bs-otp-input > .otp > :nth-child(1) > .formControl").click();
cy.get(":nth-child(1) > .typ-pin > .bs-otp-input > .otp > :nth-child(1) > .formControl").type('545352');

cy.get(":nth-child(2) > .typ-pin > .bs-otp-input > .otp > :nth-child(1) > .formControl").click();
cy.get(":nth-child(2) > .typ-pin > .bs-otp-input > .otp > :nth-child(1) > .formControl").type('545352');

cy.get(".MuiButton-contained").click();

cy.wait(30000);

// build page

cy.get(".head-wrap > .label-wrap > .switch-wrap > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiButtonBase-root > .PrivateSwitchBase-input").click();
cy.get(".if-footer > .MuiButtonBase-root").click();

cy.wait(30000);

//DC pin set

cy.get(".action-wrap > .MuiButton-contained").click();
cy.wait(30000);

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

// allow location

cy.get(".action-wrap > .MuiButton-contained").click();

cy.wait(30000);

//upload document

cy.get(":nth-child(1) > .bs-upload-card > .uc-footer > .MuiButton-contained").click();
cy.get('.upload-documents_wcMainFooter__1Ar0k > .MuiButton-text').click();

cy.get(":nth-child(2) > .bs-upload-card > .uc-footer > .MuiButton-contained").click();
cy.get('.upload-documents_wcMainFooter__1Ar0k > .MuiButton-text').click();

cy.get(":nth-child(3) > .bs-upload-card > .uc-footer > .MuiButton-contained").click();
cy.get('.upload-documents_wcMainFooter__1Ar0k > .MuiButton-text').click();


//schedule appointment

cy.get(".action-wrap > .MuiButtonBase-root").click();

cy.wait(30000);


cy.get('#__next > div > div.tpl-overview.kyc-schedule-appointment_tplOverview__1Vd-P > main > div > div > div.a-body.kyc-schedule-appointment_aBody__1X8qb > div > ul > li:nth-child(2) > div > label').click();

cy.get(".form-action > .MuiButton-contained").click();

cy.wait(30000);


});

});
