var mock = require('protractor-http-mock')

describe('Github Profile finder', function() {

  beforeEach(function(){
    mock(['githubUserSearch.js'])
  });

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function() {
    browser.get('http://localhost:9292');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });


  it('finds profiles', function() {

    searchBox.sendKeys('ptolemy');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.first().getText()).toEqual('ptolemybarnes');
  });
  afterEach(function(){
    mock.teardown();
  })
});
