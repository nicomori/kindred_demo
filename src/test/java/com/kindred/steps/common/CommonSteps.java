package com.kindred.steps.common;

import java.util.ArrayList;
import java.util.List;

import org.testng.Assert;

import com.kindred.steps.StepsHelper;

import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class CommonSteps extends StepsHelper {
	@Given("I detect the enviroment to execute the test")
	public void startingEnv() {
		deviceSelector();
	}

	@Given("^I am on \"([^\"]*)\" landing page$")
	public void accesingToLandingPage(String partnerLanding) {
		System.out.println("Starting to access to the landing page of " + partnerLanding);
		accessToTheUrlWithoutExamples(partnerLanding);
	}

	@Then("^Page opened in new tab has title \"([^\"]*)\" and URL is \"([^\"]*)\"$")
	public void pageOpenedInNewTabHasTitleAndUrlIs(String pageTitle, String pageUrl) {
		System.out.println("Starting to change the control to other tab");
		List<String> tabs = new ArrayList<>(driver.getWindowHandles());
		try {
			Thread.sleep(2000);
		} catch (Exception e) {

		}
		try {
			driver.switchTo().window(tabs.get(1));
			System.out.println("Starting to compare the url of the page: " + driver.getCurrentUrl()
					+ " ,with this string: " + pageUrl);
			Assert.assertTrue(driver.getCurrentUrl().contains(pageUrl));
			System.out.println("Starting to compare the title of the page: " + driver.getTitle()
					+ " ,with this string: " + pageTitle);
			Assert.assertTrue(driver.getTitle().contains((pageTitle)));
		} finally {
			driver.close();
			driver.switchTo().window(tabs.get(0));
		}
		try {
			Thread.sleep(2000);
		} catch (Exception e) {

		}
	}

	// Teardown Section
	@After
	public void afterMethod() {
		System.out.println("Test finished!, closing the driver");
		driver.quit();
	}
}