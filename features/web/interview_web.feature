@Regression @Web
Feature: Blog section, feature search.

	Background:
    		Given I detect the enviroment to execute the test
		Given I am on "Blog" landing page
	
  	Scenario Outline: verify the correct behavior of the search functionality
    		And make click in the icon to search
    		And send this text "<textToSearch>" to search
    		Then verify if the text "<textToSearch>" appear correctly

    Examples:
      | textToSearch	| 
      | Messi 		| 
      
      
      
      
      
      