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
  "name": "User is logged in",
  "description": "",
  "id": "gmail-login-and-composing-mail;user-is-logged-in",
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
  "duration": 12513182969,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d64.0.3282.119)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4.03 seconds\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u002701HW1055711\u0027, ip: \u0027192.168.1.181\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\1037361\\AppData\\Local\\Temp\\scoped_dir15348_32301}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d64.0.3282.119, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 52385a2ef7446c450f18ec539f634542\n*** Element info: {Using\u003did, value\u003didentifierId}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:413)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:214)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.isDisplayed(Unknown Source)\r\n\tat stepDefination.Gmail_Login.user_enters_e_mail_address(Gmail_Login.java:124)\r\n\tat stepDefination.Gmail_Login.user_is_on_the_login_page(Gmail_Login.java:104)\r\n\tat ✽.Given User is on the login page(login.feature:6)\r\n",
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
      "name": "@tag1"
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
  "duration": 4027001014,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d64.0.3282.119)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4.03 seconds\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u002701HW1055711\u0027, ip: \u0027192.168.1.181\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\1037361\\AppData\\Local\\Temp\\scoped_dir15348_32301}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d64.0.3282.119, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 52385a2ef7446c450f18ec539f634542\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\"z0\"]/div}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:500)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:355)\r\n\tat stepDefination.Gmail_Login.user_clicks_on_compose_button(Gmail_Login.java:162)\r\n\tat ✽.When user clicks on compose button(login.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Gmail_Login.user_enters_mailid()"
});
formatter.result({
  "status": "skipped"
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
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Gmail Logout",
  "description": "",
  "id": "gmail-account-logout;gmail-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User is LoggedIn into account",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "user clicks on profile icon",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user clicks on profile popup",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user clicks on change icon",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user clicks on select picture",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user clicks on set profile pic",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on signout button",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User is successfully loggedout",
  "keyword": "Then "
});
formatter.match({
  "location": "Gmail_logout.user_is_LoggedIn_into_account()"
});
