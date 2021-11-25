Feature: IAMUser Managment
  
  Scenario: IAMUser Existes
    Given IAM user exist in AWS
    When the program activate getUser command
    Then IAM user name is "awsUser"
 