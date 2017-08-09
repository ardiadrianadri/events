import { EventsPage } from './app.po';

describe('events App', () => {
  let page: EventsPage;

  beforeEach(() => {
    page = new EventsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
