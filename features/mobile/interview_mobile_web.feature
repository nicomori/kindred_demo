@Regression @TestForMobileWeb
Feature: Tree test more popular

	Background:
   		Given I detect the enviroment to execute the test
		Given I am on "Blog" landing page

	Scenario Outline: verify the correct behavior of the search functionality
    		And make click in the icon to search
    		And send this text "<textToSearch>" to search
    		Then verify if the text "<textToSearch>" appear correctly

    Examples:
      | textToSearch		| 
      | Messi 			| 

	Scenario Outline: verify the footer links
    		And make click in the link with the text "<textInTheLink>", and with this index "<index>" in the footer
    		Then verify the URL "<url>" and the Title "<title>" of the new web

    Examples:
      | textInTheLink			| url	 	| title 			 | index |  
      | Responsible Gaming 		| whentostop	| Responsible	 | 2		 | 
      | Terms and Conditions  	| terms 		| Terms			 | 2 	 | 
      | Security Information  	| security 	| official		 | 2		 | 
      | Cookies				  	| cookies 	| Cookies		 | 2		 | 
	
	Scenario Outline: verify the footer links
    		And make click in the link with the text "<textInTheLink>", and with this index "<index>" in the body carrousel
    		Then verify the URL "<url>" and the Title "<title>" of the new web

    Examples:
      | textInTheLink	 | url		  	 | title		 | index |   
      | Sports 			 | betting		 | Sports	 | 1 	 |
      | Casino	  		 | casino		 | Casino	 | 1 	 |
      | Live Casino  	 | casino		 | Casino	 | 1 	 |
      | Bingo			 | bingo			 | Bingo		 | 1 	 |
      | Lottery Betting	 | lotto			 | Lottery	 | 1 	 |
      | Poker			 | poker			 | Poker		 | 1 	 |
      | Blog			  	 | blog			 | Blog		 | 1 	 |
      | Apps			  	 | apps			 | Apps		 | 1 	 |
      | Special Offers	 | promotions	 | Special	 | 1 	 |