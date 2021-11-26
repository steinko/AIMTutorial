Feature: IAMRole managment

  Scenario: Provide IAMRole
    Given no IAMRole exist
    When provide IAMRole command is activated
    Then IAMRole exist
 

 