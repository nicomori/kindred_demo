package com.kindred;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

/**
 * Automations for Kindred, interview Nicolas Mori.
 */
@CucumberOptions(plugin = { "html:target/cucumber-html-reports", "json:target/cucumber-html-reports/cucumber.json",
		"junit:target/surefire-reports/cucumber-junit.xml" }, features = "features", tags = "@regression", glue = {
				"com.kindred.steps" })
public class AppTest extends AbstractTestNGCucumberTests {
}
