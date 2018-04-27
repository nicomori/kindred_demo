package com.kindred.pageobject.web;

import org.openqa.selenium.WebDriver;

import com.kindred.framework.ParentPage;

//this class represent the values and the content of a generic page
public class GenericPage extends ParentPage {

	/**
	 * @param driver
	 */
	public GenericPage(WebDriver driver) {
		super(driver);
	}

	// Section Generic WebElments

	// Section Methods
	/**
	 * this method make click in any element with some text content, is important to
	 * mark, is going to make click in the first element with this text.
	 * 
	 * @param String
	 *            with some text to make click
	 */
	public void genericMakeClickInALinkWithSomeText(String someTextToMakeClick, String index) {
		System.out.println("Starting to click in a link with this text content: " + someTextToMakeClick
				+ " and with some specific index of element in this case: " + index);
		genericClickByContainsSomeTextAndWithSomeSpecificIndex(someTextToMakeClick, index);
	}

	/**
	 * This method get the url and validate a content there.
	 * 
	 * @param someTextToFind String
	 * @return boolean true in case if we can find the content text.
	 */
	public boolean genericValidatorUrlTextContent(String someTextToFind) {
		System.out.println("Starting to find this text: "+someTextToFind+", in this url: "+driver.getCurrentUrl());
		waitSleepingTheTread(2000);
		try {
			genericVerifyIfSomeTextAppearInTheURL(someTextToFind);
			return true;
		} catch (Exception e) {
			driver.navigate().refresh();
			genericVerifyIfSomeTextAppearInTheURL(someTextToFind);
			return false;
		} 
	}
	
	/**
	 * This method get the title of the page and validate a content there.
	 * 
	 * @param someTextToFind String
	 * @return boolean true in case if we can find the content text.
	 */
	public boolean genericValidatorTitleTextContent(String someTextToFind) {
		System.out.println("Starting to find this text: "+someTextToFind+", in this title: "+driver.getTitle());
		waitSleepingTheTread(2000);
		try {
			genericVerifyIfSomeTextAppearInTheTitle(someTextToFind);
			return true;
		} catch (Exception e) {
			driver.navigate().refresh();
			genericVerifyIfSomeTextAppearInTheTitle(someTextToFind);
			return false;
		}
	}
	
	// Section validator
}