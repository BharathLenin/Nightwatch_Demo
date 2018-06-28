# Nightwatch Demo
Basic demo of nightwatch js using chrome browser

## Setup

* Download the latest version of the selenium-server-standalone-{VERSION}.jar file from the [Selenium downloads page](http://selenium-release.storage.googleapis.com/index.html) and place in `bin` folder
* Download [Chromedriver](https://sites.google.com/a/chromium.org/chromedriver/downloads) to match your version of Chrome and place in `bin` folder
* Make sure you have NodeJs installed
* Install Nightwatch globally 
    `npm install -g nightwatch`

## Run test

Run the nightwatch test using below command,
`nightwatch -e chrome .\tests\test.js`

## Reference

http://nightwatchjs.org/gettingstarted