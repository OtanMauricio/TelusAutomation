export const ClickButtonUsingText = (text) => {
    cy.contains('button', text).should('be.visible');
    cy.contains('button', text).click();
}

export const EnterText = (ariaLabel, text) => {
    cy.get('input[aria-label="'+ ariaLabel +'"]').should('be.visible');
    cy.get('input[aria-label="'+ ariaLabel +'"]').clear();
    cy.get('input[aria-label="'+ ariaLabel +'"]').type(text);
}

export const ClickButton = (ariaLabel) => {
    cy.get('button[aria-label="'+ ariaLabel +'"]').should('be.visible');
    cy.get('button[aria-label="'+ ariaLabel +'"]').click();
}

export const ClickDiv = (ariaLabel) => {
    cy.get('div[class="sui-nav-settings"]').should('be.visible');
    cy.get('div[class="sui-nav-settings"]').click();
}

export const ClickLink = (text) => {
    cy.contains('span', text).should('be.visible');
    cy.contains('span', text).click();
}

export const ClickEdit = (div) => {
    cy.get(div).should('be.visible');
    cy.get(div).contains('button', 'Edit').click(); 
}

export const VerifyText = (verDiv, verText) => {
    cy.get(verDiv).contains(verText).should('be.visible');
}

export const SubMenu = (submenu) => {
    cy.contains('Languages').should('be.visible');
    cy.contains('Languages').click();
}

export const LanguageDropdown = (language) => {
    cy.get('.sui-c-floating-label-dropdown.sui-c-input-dropdown__control.css-yk16xz-control').should('be.visible');
    cy.get('.sui-c-floating-label-dropdown.sui-c-input-dropdown__control.css-yk16xz-control').click().type(language);
    cy.contains('English (United States)').should('be.visible');
    cy.contains('English (United States)').click();
}

export const ProficiencyDropdown = () => {
    cy.contains('.sui-c-floating-label-dropdown.sui-c-input-dropdown__control.css-yk16xz-control', 'Select proficiency level*').should('be.visible');
    cy.contains('.sui-c-floating-label-dropdown.sui-c-input-dropdown__control.css-yk16xz-control', 'Select proficiency level*').click();
    cy.contains('Full working proficiency').should('be.visible');
    cy.contains('Full working proficiency').click();
}

export const VerifyLocationSaved = () => {
    cy.contains('Location successfully saved!').should('be.visible');
    cy.contains('Location successfully saved!').should('not.be.visible');
}