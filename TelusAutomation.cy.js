import { ClickButton, ClickButtonUsingText, ClickEdit, Dropdown } from "./objects";
import { EnterText } from "./objects";
import { ClickDiv } from "./objects";
import { ClickLink } from "./objects";
import { VerifyText } from "./objects";
import { SubMenu } from "./objects";
import { LanguageDropdown } from "./objects";
import { ProficiencyDropdown } from "./objects";

describe.only('Telus Automation', () => {
  it.only('passes', () => {

    let contactInfoGrp = '.contact-info.border-top.tw-mb-6.ml-0';
    let locationGrp = '.location.border-top.border-top';
    cy.viewport(1280, 720);

    cy.visit('https://www.telusinternational.ai/cmp')
    EnterText('Email', 'jonathancenetamauricio@gmail.com');
    ClickButtonUsingText('Continue');
    EnterText('Password', '@Password2023');
    ClickButton('signInButtonPassword');
    ClickDiv('User Avatar');
    ClickLink('My Profile');
    ClickEdit(contactInfoGrp);
    EnterText('Middle name (optional)', 'Ceneta');
    EnterText('Phone number', '9382664098');
    ClickButtonUsingText('Save');
    VerifyText(contactInfoGrp, 'Jonathan Ceneta Mauricio');
    VerifyText(contactInfoGrp, '+639382664098');
    cy.get(locationGrp).contains('button', 'Edit').click();
    EnterText('Postal code*', '3022');
    ClickButtonUsingText('Save');
    cy.contains('Location successfully saved!').should('be.visible');
    VerifyText(locationGrp, '3022');
    SubMenu('Languages');
    ClickButtonUsingText('Add');
    LanguageDropdown('United States');
    ProficiencyDropdown();
    ClickButtonUsingText('Save');
    ClickDiv('User Avatar');
    ClickLink('Sign Out');
    
  })
})