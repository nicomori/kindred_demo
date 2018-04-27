package com.kindred.pageobject.web;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.kindred.framework.ParentPage;

//this class represent the values and the content of the homepage page with this url 
//https://www.unibet.co.uk/
public class HomePage extends ParentPage {

	/**
	 * @param driver
	 */
	public HomePage(WebDriver driver) {
		super(driver);
	}

	// Section Generic WebElments
	@WebElementLocator(webElementType = "xpath", webElementValue = "//*[@class='links']/ul/li", webMobileElementType = "xpath", webMobileElementValue = "//*[@class='links']/ul/li")
	public By footer_links_textlinks() {
		return getLocator("footer_links_textlinks");
	}

	@WebElementLocator(webElementType = "xpath", webElementValue = "//*[@class='icon-wrapper menu']", webMobileElementType = "xpath", webMobileElementValue = "//*[@class='icon-wrapper menu']")
	public By header_icon_burgermenu() {
		return getLocator("header_icon_burgermenu");
	}

	@WebElementLocator(webElementType = "xpath", webElementValue = "(//*[@href='/blog'])[1]", webMobileElementType = "xpath", webMobileElementValue = "(//*[@href='/blog'])[1]")
	public By sidebar_option_blog() {
		return getLocator("sidebar_option_blog");
	}

	@WebElementLocator(webElementType = "xpath", webElementValue = "//*[@data-automated-function='swipeableList']/li", webMobileElementType = "xpath", webMobileElementValue = "//*[@data-automated-function='swipeableList']/li")
	public By body_carrousel_listlinks() {
		return getLocator("body_carrousel_listlinks");
	}

	// Section Methods
	public Boolean verifyIfTheMainTextExist() {
		System.out.println("Starting to verify if the main text label exist correctly.");
//		waitLongForAnExplicitElement(body_carrousel_listlinks());
		return verifyIfisDisplayedX2(body_carrousel_listlinks());
	}

	// Section validator

}
