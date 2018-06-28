module.exports = {
    'Demo test Google' : function (browser) {
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 5000)
        .pause(1000)
        .assert.containsText('#main', 'YouTube')
        .end();
    }
  };