# QA Automation repository
This is an example of framework to execute automations in backend, web, android mobile web, ios mobile web, android native and ios native. The framework is ready too for execute farms of mobiles, of android and ios devices. 

The architecture of the framework is the suggested by selenium, named page object, with small differences, to make more productive the generation of code and make more easy to make the maintenance, this help a lot to safe time at the moment to have a lot of differents scenarios and tests in mobile, web and backend. 

One of the most importants thinks to mark is the posibilitty to use te same pages do

## Used tools
 - Java
 - Maven
 - Cucumber
 - Selenium Webdriver
 - TestNG
 - Appium  

## Preconditions
- install Java 8
- install Maven
- install Git
- install Appium
- install Adb

## Maven parameters:

Mandatories:

_testingType
this is the class of testing we want to execute, the posibilities to use are:

	web, this is for execute the test in the chorme.
	mobilewebemulator, this is for execute the test in a emulator of chrome.
	mobileweb, this is for execute the automation in real devices, this use appium.
	

_env,
with this key we need to declare the env where we need to run.

	production
	development
	staging

-Dcucumber.options="--tags @someTagHere"
Command to execute some tag of cucumber.


Android Executions:

_uuid
this is the long value at the momento to execute the command "adb devices" in the command line.



## How to run tests localy
in the directory of project make:
mvn eclipse:eclipse
mvn clean compile

mvn package -DtestingType=<testingType> -Denv=<env_name> -Dcucumber.options="--tags @YourTag"


examples:

mvn package -DtestingType=mobileweb -Duuid=ce07171735a7641d017e -Denv=production -Dcucumber.options="--tags @TestForMobileWeb"
mvn package -DtestingType=web -Dcucumber.options="--tags @Web" -Denv=production
mvn package -DtestingType=mobilewebemulator -Dcucumber.options="--tags @TestForMobileWeb" -Denv=production


