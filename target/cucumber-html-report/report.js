$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Login and composing mail",
  "description": "I want to login into my gmail account and compose first mail",
  "id": "gmail-login-and-composing-mail",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Gmail Login",
  "description": "",
  "id": "gmail-login-and-composing-mail;gmail-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters e-mail address",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters password",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User navigates to gmail account",
  "keyword": "Then "
});
formatter.match({
  "location": "Gmail_Login.user_is_on_the_login_page()"
});
formatter.result({
  "duration": 388022241204,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d63.0.3239.84)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 300.09 seconds\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u002701HW1055711\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\1037361\\AppData\\Local\\Temp\\scoped_dir20540_27270}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.84, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 9daaf83e009570a408b31dc46a68cc5c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\r\n\tat stepDefination.Gmail_Login.user_navigates_to_gmail_account(Gmail_Login.java:97)\r\n\tat stepDefination.Gmail_Login.user_is_on_the_login_page(Gmail_Login.java:49)\r\n\tat ✽.Given User is on the login page(login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Gmail_Login.user_enters_e_mail_address(WebElement,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Gmail_Login.user_enters_password(WebElement,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Gmail_Login.user_navigates_to_gmail_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 12,
  "name": "Composing mail",
  "description": "",
  "id": "gmail-login-and-composing-mail;composing-mail",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@tag2"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user clicks on compose button",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enters mailid",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters subject",
  "keyword": "And "
});
formatter.match({
  "location": "Gmail_Login.user_clicks_on_compose_button()"
});
formatter.result({
  "duration": 2108586533,
  "status": "passed"
});
formatter.match({
  "location": "Gmail_Login.user_enters_mailid()"
});
formatter.result({
  "duration": 42118102,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//textarea[@class\u003d\"vO\"]\"}\n  (Session info: chrome\u003d63.0.3239.84)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 40 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u002701HW1055711\u0027, ip: \u0027192.168.1.101\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\1037361\\AppData\\Local\\Temp\\scoped_dir20540_27270}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d63.0.3239.84, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 9daaf83e009570a408b31dc46a68cc5c\n*** Element info: {Using\u003dxpath, value\u003d//textarea[@class\u003d\"vO\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat stepDefination.Gmail_Login.user_enters_mailid(Gmail_Login.java:117)\r\n\tat ✽.And user enters mailid(login.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Gmail_Login.user_enters_subject()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("logout.feature");
formatter.feature({
  "line": 3,
  "name": "Gmail Account Logout",
  "description": "User wants to logout from gmail account",
  "id": "gmail-account-logout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Gmail Logout",
  "description": "",
  "id": "gmail-account-logout;gmail-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is LoggedIn into account",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "user clicks on profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user clicks on profile profile popup",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user clicks on change icon",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user clicks on select picture",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on set profile pic",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on signout button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "User is successfully loggedout",
  "keyword": "Then "
});
formatter.match({
  "location": "Gmail_logout.user_is_LoggedIn_into_account()"
});
formatter.result({
  "duration": 2023250433,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefination.Gmail_logout.user_is_LoggedIn_into_account(Gmail_logout.java:32)\r\n\tat ✽.Given User is LoggedIn into account(logout.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Gmail_logout.user_clicks_on_profile_icon_and_changes_profile_picture(WebElement)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Gmail_logout.profile_pop_up_appears(WebElement)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Gmail_logout.user_clicks_on_change_icon(WebElement)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Gmail_logout.user_clicks_on_select_picture(WebElement)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Gmail_logout.user_clicks_on_set_picture(WebElement)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Gmail_logout.user_clicks_on_signout_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Gmail_logout.user_is_successfully_loggedout()"
});
formatter.result({
  "status": "skipped"
});
});