package com.kindred.pageobject.web;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;

import com.kindred.framework.ParentPage;

//this class represent the values and the content of the blog page with this url 
//https://www.unibet.co.uk/blog
public class BlogPage extends ParentPage {

	/**
	 * @param driver
	 */
	public BlogPage(WebDriver driver) {
		super(driver);
	}

	// Section Generic WebElments
	@WebElementLocator(webElementType = "xpath", webElementValue = "(//*[@class='SideMenuItem__icon___1Zso4 '])[3]", webMobileElementType = "xpath", webMobileElementValue = "(//*[@class='SideMenuItem__icon___1Zso4 '])[3]")
	public By body_sidebar_icon_search() {
		return getLocator("body_sidebar_icon_search");
	}

	@WebElementLocator(webElementType = "xpath", webElementValue = "//*[@class='GroupSearch__input___1cnEi']", webMobileElementType = "xpath", webMobileElementValue = "//*[@class='GroupSearch__input___1cnEi']")
	public By body_sidebar_editfield_search() {
		return getLocator("body_sidebar_editfield_search");
	}

	@WebElementLocator(webElementType = "xpath", webElementValue = "(//*[@class='Group__horizontal___33MBr Group__root___hnqau'])[1]//p", webMobileElementType = "xpath", webMobileElementValue = "(//*[@class='Group__vertical___3xm_m Group__root___hnqau'])[1]//p")
	public By body_results_cluster_descrition() {
		return getLocator("body_results_cluster_descrition");
	}

	@WebElementLocator(webElementType = "xpath", webElementValue = "(//*[@class='SideMenuItem__icon___1Zso4 '])[1]", webMobileElementType = "xpath", webMobileElementValue = "(//*[@class='SideMenuItem__icon___1Zso4 '])[1]")
	public By body_expandermenu() {
		return getLocator("body_expandermenu");
	}

	// Section Methods
	/**
	 * This method make click in the icon search
	 */
	public void makeClickInTheIconSearch() {
		System.out.println("Starting to make click in the search icon.");
		if (System.getProperty("testingType").contains("mobileweb")) {
			waitSleepingTheTread(2000);
			click(body_expandermenu());
		}
		waitSleepingTheTread(4000);
		click(body_sidebar_icon_search());
	}

	/**
	 * This method send some String to some locator and press enter
	 * 
	 * @param someStringToSend
	 */
	public void sendkeysToTheElementSearchFieldAndPressEnter(String someStringToSend) {
		System.out.println("Starting to send this String " + someStringToSend + " to the field search");
		waitSleepingTheTread(2000);
		sendStringToLocator(body_sidebar_editfield_search(), someStringToSend);
		System.out.println("Press enter key after send the string");
		sendKeysToLocator(body_sidebar_editfield_search(), Keys.ENTER);
		waitSleepingTheTread(4000);
	}

	// Section validator
	/**
	 * This method validate if the element cluster is displayed correctly.
	 * 
	 * @return boolean condition.
	 */
	public boolean verifyIfTheFirstClusterIsDisplayed() {
		System.out.println("Starting to verify if the first cluster is correctly displayed.");
		waitSleepingTheTread(2000);
		return verifyIfisDisplayedX2(body_results_cluster_descrition());
	}

	/**
	 * This method validate if the element cluster is displayed correctly.
	 * 
	 * @return boolean condition.
	 */
	public boolean verifyIfSomeTextAppearInTheFirstCluster(String someText) {
		System.out.println(
				"Starting to verify if we can find this text: " + someText + " appear correctly in the first cluster");
		waitSleepingTheTread(2000);
		return genericVerifyIfSomeTextExistInSomeLocator(body_results_cluster_descrition(), someText);
	}
}
