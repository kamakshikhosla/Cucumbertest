

Feature: Gmail Account Logout
  User wants to logout from gmail account


  @tag3
  Scenario: Gmail Logout
    Given User is LoggedIn into account
    When user clicks on profile icon 
    Then user clicks on profile popup
    And  user clicks on change icon
    And  user clicks on select picture
    And  user clicks on set profile pic
    When User clicks on signout button
    Then User is successfully loggedout
    