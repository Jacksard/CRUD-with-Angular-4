import { PracticeDatabindingPage } from './app.po';

describe('practice-databinding App', () => {
  let page: PracticeDatabindingPage;

  beforeEach(() => {
    page = new PracticeDatabindingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
