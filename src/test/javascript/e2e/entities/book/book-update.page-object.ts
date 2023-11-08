import { element, by, ElementFinder } from 'protractor';
import { waitUntilDisplayed, waitUntilHidden, isVisible } from '../../util/utils';

const expect = chai.expect;

export default class BookUpdatePage {
  pageTitle: ElementFinder = element(by.id('myappApp.book.home.createOrEditLabel'));
  saveButton: ElementFinder = element(by.id('save-entity'));
  cancelButton: ElementFinder = element(by.id('cancel-save'));
  nameInput: ElementFinder = element(by.css('input#book-name'));
  penerbitInput: ElementFinder = element(by.css('input#book-penerbit'));
  authorInput: ElementFinder = element(by.css('input#book-author'));

  getPageTitle() {
    return this.pageTitle;
  }

  async setNameInput(name) {
    await this.nameInput.sendKeys(name);
  }

  async getNameInput() {
    return this.nameInput.getAttribute('value');
  }

  async setPenerbitInput(penerbit) {
    await this.penerbitInput.sendKeys(penerbit);
  }

  async getPenerbitInput() {
    return this.penerbitInput.getAttribute('value');
  }

  async setAuthorInput(author) {
    await this.authorInput.sendKeys(author);
  }

  async getAuthorInput() {
    return this.authorInput.getAttribute('value');
  }

  async save() {
    await this.saveButton.click();
  }

  async cancel() {
    await this.cancelButton.click();
  }

  getSaveButton() {
    return this.saveButton;
  }

  async enterData() {
    await waitUntilDisplayed(this.saveButton);
    await this.setNameInput('name');
    expect(await this.getNameInput()).to.match(/name/);
    await waitUntilDisplayed(this.saveButton);
    await this.setPenerbitInput('penerbit');
    expect(await this.getPenerbitInput()).to.match(/penerbit/);
    await waitUntilDisplayed(this.saveButton);
    await this.setAuthorInput('author');
    expect(await this.getAuthorInput()).to.match(/author/);
    await this.save();
    await waitUntilHidden(this.saveButton);
    expect(await isVisible(this.saveButton)).to.be.false;
  }
}
