Feature: Gmail Login and composing mail
  I want to login into my gmail account and compose first mail


  @tag1
  Scenario: Gmail Login
    Given User is on the login page
    When User enters e-mail address
    And User enters password
    Then User navigates to gmail account

  @tag2
  Scenario: Composing mail
    When user clicks on compose button
    And user enters mailid	
    And user enters subject
    
   
