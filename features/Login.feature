
Feature: Login on AWS 
  
  Scenario: Sucessfull login
    Given IAM user exist in AWS
    When the program activate login command
    And user name "Steinko" are enterd
    And password "Cooler" are entered
    Then IAM user is login on AWS
  

