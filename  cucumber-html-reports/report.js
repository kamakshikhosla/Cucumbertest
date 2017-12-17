$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/Features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Gmail Login and composing mail",
  "description": "I want to login into my gmail account and compose first mail",
  "id": "gmail-login-and-composing-mail",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Gmail Login",
  "description": "",
  "id": "gmail-login-and-composing-mail;gmail-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters e-mail address and password",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User navigates to gmail account",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "user enters mailid and subject",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters text message and attachment",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user clicks on send button",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});