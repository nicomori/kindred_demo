package com.kindred.framework;

import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.reflect.Method;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

/**
 * This Class is an abstract class, and created for make the interaction with
 * the class ParentPage.
 */
public abstract class DSL {

	public WebDriver driver;

	public DSL(WebDriver driver2) {
		this.driver = driver2;
	}

	// Generic Methods
	/**
	 * This method make a generic click in a elements with some text.
	 * 
	 * @param String
	 *            with the text of the element
	 */
	protected void genericClickByContainsSomeText(String stringInTheElement) {
		System.out.println("Making a generic click in a web element with the text \"" + stringInTheElement + "\"");
		driver.findElement(By.xpath(String.format("//*[contains(text(),'%s')]", stringInTheElement))).click();
	}

	/**
	 * This method make a generic click in a elements with some text, and some
	 * specific index.
	 * 
	 * @param String
	 *            with the text of the element
	 * @param Int
	 *            with the index of the element
	 */
	protected void genericClickByContainsSomeTextAndWithSomeSpecificIndex(String stringInTheElement, String index) {
		System.out.println("Making a generic click in a web element with the text \"" + stringInTheElement + "\"");
		clickJSx2(By.xpath(String.format("(//*[contains(text(),'%s')])['%s']", stringInTheElement, index)));
	}

	/**
	 * This method make a generic click with a text.
	 * 
	 * @param String
	 *            with the text of the element
	 */
	protected void genericClickByText(String stringInTheElement) {
		System.out.println("Making a generic click in a web element with the text \"" + stringInTheElement + "\"");
		driver.findElement(By.xpath(String.format("(//*[contains(text(),'%s')])[1]", stringInTheElement))).click();
	}

	/**
	 * This method try to find if some text element is displayed in the web
	 * 
	 * @param String
	 *            with the text of the element to find
	 * @return boolean condition
	 */
	protected boolean genericVerifyIfSomeTextExist(String stringToVerify) {
		System.out.println("Starting to verify if this text is displayed \"" + stringToVerify + "\"");
		try {
			driver.findElement(By.xpath(String.format("//*[contains(text(),'%s')]", stringToVerify))).isDisplayed();
			return true;
		} catch (Exception e) {
			driver.findElement(By.xpath(String.format("//*[contains(text(),'%s')]", stringToVerify))).isDisplayed();
			return true;
		}
	}

	/**
	 * This method try to find if some text element is displayed in some locator
	 * 
	 * @param String
	 *            with the text of the element to find
	 * @param locator
	 * @return boolean condition
	 */
	protected boolean genericVerifyIfSomeTextExistInSomeLocator(By locator, String stringToVerify) {
		System.out.println("Starting to verify if this text is displayed \"" + stringToVerify + "\" in some locator");
		if (driver.findElement(locator).getText().contains(stringToVerify)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * This method try to find if some text element appear in the url
	 * 
	 * @param String
	 *            with the text of the element to find in the URL
	 * @return boolean condition
	 */
	protected boolean genericVerifyIfSomeTextAppearInTheURL(String stringToVerify) {
		System.out.println("Starting to verify if this text: \"" + stringToVerify
				+ "\" appear in the URL, with this content: " + driver.getCurrentUrl());
		if (driver.getCurrentUrl().contains(stringToVerify)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * This method try to find if some text element appear in the title
	 * 
	 * @param String
	 *            with the text of the element to find in the TITLE
	 * @return boolean condition
	 */
	protected boolean genericVerifyIfSomeTextAppearInTheTitle(String stringToVerify) {
		System.out.println("Starting to verify if this text: \"" + stringToVerify
				+ "\" appear in the TITLE, with this content: " + driver.getTitle());
		if (driver.getTitle().contains(stringToVerify)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * This method verify if some element appear correctly
	 * 
	 * @param element
	 *            By with the locator to find.
	 * @return boolean condition
	 */
	protected boolean genericVerifyIfSomeElementExist(By locator) {
		System.out.println("Starting to verify if some element appear correctly");
		try {
			driver.findElement(locator).isDisplayed();
			return true;
		} catch (Exception e) {
			driver.findElement(locator).isDisplayed();
			return true;
		}
	}

	/**
	 * This method try to find some text in all the Alternative tags of the web
	 * 
	 * @param String
	 *            with the text of the element to find
	 * @return boolean condition
	 */
	protected boolean genericVerifyIfSomeTextExistInsideOfTheAlternativeTag(String stringToVerify) {
		System.out.println("Starting to verify if this text \"" + stringToVerify + "\" appear in some Alternative tag");
		try {
			driver.findElement(By.xpath(String.format("//*[contains(@alt,'%s')]", stringToVerify))).isDisplayed();
			return true;
		} catch (Exception e) {
			driver.findElement(By.xpath(String.format("//*[contains(@alt,'%s')]", stringToVerify))).isDisplayed();
			return true;
		}
	}

	// Standart Methods
	/**
	 * This method make scroll down.
	 * 
	 * @param locator
	 */
	protected void scrollDown() {
		System.out.println("make scroll down.");
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,20000)", "");
		waitSleepingTheTread(1500);
	}

	/**
	 * This method make scroll down until the buttom of the website.
	 */
	protected void scrollDownToTheBottom() {
		System.out.println("make scroll down to the buttom.");
		JavascriptExecutor jse = (JavascriptExecutor) driver;
		jse.executeScript("window.scrollBy(0,20000)", "");
		waitSleepingTheTread(1500);
	}

	/**
	 * this method verify if some element contain a String inside.
	 * 
	 * @param locator
	 * @boolean true in case the locator contain the string in the parameter
	 */
	protected boolean verifyIfSomeLocatorContainsSomeString(By locator, String someStringToValidate) {
		System.out.println("verify if some element contains this string: " + someStringToValidate);
		if (driver.findElement(locator).getText().contains(someStringToValidate)) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * This method make click!
	 * 
	 * @param locator
	 */
	protected void click(By locator) {
		System.out.println("Making click in a web element");
		driver.findElement(locator).click();
	}

	/**
	 * this method retrive the attribute of some web element.
	 * 
	 * @param locator
	 *            web element to find
	 * @param string
	 *            with the attribute to find in the web element
	 * 
	 * @return String with the string content in the attribute.
	 */
	protected String getAttributeFromLocator(By locator, String attribute) {
		System.out.println("Starting to find this attrivute: " + attribute);
		return driver.findElement(locator).getAttribute(attribute);
	}

	/**
	 * This method make click!
	 * 
	 */
	protected void clickBrowserButtonBack() {
		System.out.println("Making click in browser button back");
		driver.navigate().back();
	}

	/**
	 * This method make a double click
	 * 
	 * @param locator
	 */
	protected void clickX2(By locator) {
		System.out.println("Starting to make double click");
		try {
			driver.findElement(locator).click();
		} catch (Exception e) {
			driver.findElement(locator).click();
		}

	}

	/**
	 * this method make a javascript click
	 */
	protected void clickJS(By locator) {
		System.out.println("Starting to make a javascript click");
		WebElement element = driver.findElement(locator);
		JavascriptExecutor executor = (JavascriptExecutor) driver;
		executor.executeScript("arguments[0].click();", element);
	}

	/**
	 * this method make a tread sleep
	 * 
	 * @param int
	 *            with miliseconds to sleep.
	 */
	protected void waitSleepingTheTread(int milisecondsToSleep) {
		try {
			System.out.println("Starting to sleep the thread " + milisecondsToSleep);
			Thread.sleep(milisecondsToSleep);
		} catch (Exception e) {
			System.out.println("Appear a problem at the moment to wait we can see this error:");
			System.out.println(e);
		}
	}

	/**
	 * this method make a double javascript click
	 * 
	 * @param locator
	 */
	protected void clickJSx2(By locator) {
		System.out.println("");

		WebElement element = driver.findElement(locator);
		JavascriptExecutor executor = (JavascriptExecutor) driver;

		try {
			executor.executeScript("arguments[0].click();", element);
		} catch (Exception e) {
			executor.executeScript("arguments[0].click();", element);
		}
	}

	/**
	 * this method send string to a web element.
	 * 
	 * @param locator
	 * @param string
	 *            to send
	 */
	protected void sendStringToLocator(By locator, String stringToSend) {
		System.out.println("Starting to send this String " + stringToSend + " to a webelement");
		driver.findElement(locator).sendKeys(stringToSend);
	}

	/**
	 * this method send Keys to a web element.
	 * 
	 * @param locator
	 * @param keys
	 *            to send
	 */
	protected void sendKeysToLocator(By locator, Keys keysToSend) {
		System.out.println("Starting to send keys to a webelement");
		driver.findElement(locator).sendKeys(keysToSend);
	}

	/**
	 * this method verify if a method is displayed per 2.
	 * 
	 * @return boolean
	 */
	protected boolean verifyIfisDisplayedX2(By locator) {
		System.out.println("Starting to verify if a webelement is displayed");
		try {
			driver.findElement(locator).isDisplayed();
			return true;
		} catch (Exception e) {
			try {
				driver.findElement(locator).isDisplayed();
				return true;
			} catch (Exception f) {
				return false;
			}
		}
	}

	/**
	 * this method verify a string contain inside the string "0.00"
	 * 
	 * @return boolean
	 */
	protected boolean verifyIfSomeStringContainsZeroDotZeroZeroValueInside(String valueToVerify) {
		System.out.println("Starting to verify if this String: " + valueToVerify + " ,contain inside the value 0.00");
		if (valueToVerify.contains("0.00")) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * this method return the string valur from some locator
	 * 
	 * @param locator
	 * @return string with the gettext content
	 */
	protected String getTextByLocator(By locator) {
		System.out.println("Starting to get the element text inside of some locator.");
		return driver.findElement(locator).getText();
	}

	/**
	 * this method verify if a method is displayed.
	 * 
	 * @return boolean
	 */
	protected boolean verifyIfisDisplayed(By locator) {
		System.out.println("Starting to verify if a webelement is displayed");
		try {
			driver.findElement(locator).isDisplayed();
			return true;
		} catch (Exception e) {
			return false;
		}
	}

	/**
	 * this method refresh the browser
	 */
	protected void refreshBrowser() {
		System.out.println("Starting to refresh the browser");
		driver.navigate().refresh();
	}

	/**
	 * This method count the elements!
	 *
	 * @param locator
	 *
	 * @return int
	 */
	protected Integer countElements(By locator) {
		System.out.println("Starting to verify the numbers of elements");
		int count = driver.findElements(locator).size();
		return count;
	}

	/**
	 * this method will give back the first item of a dropdown menu
	 *
	 * @param locator
	 *
	 * @return string
	 */

	protected String getFirstDropDownItem(By locator) {
		System.out.println("Starting to verify the first item in the dropdown menu");
		WebElement element = driver.findElement(locator);
		Select select = new Select(element);
		WebElement selectedOption = select.getFirstSelectedOption();
		String firstElement = selectedOption.getText();
		return firstElement;
	}

	// Annotation methods

	/**
	 * The Annotation WebElementLocator return
	 * 
	 * @author nicolasmori
	 */
	@Retention(RetentionPolicy.RUNTIME)
	public @interface WebElementLocator {
		String webMobileElementType();

		String webMobileElementValue();

		String webElementType();

		String webElementValue();
	}

	private boolean flag = false;
	private int methodNumber = 0;
	private Method[] methods;
	Method method;

	public By getLocator(String methodName) {

		methods = getClass().getMethods();
		method = methods[0];
		flag = false;
		System.out.println("\n");

		do {
			if (method.getName() == methodName) {
				flag = true;
			} else {
				methodNumber++;
				method = methods[methodNumber];
				System.out.println("Trying to find the Method Name: \"" + methodName + "\" \n change the method to "
						+ methodNumber + ". Current method finded: " + method.getName());
			}
		} while (flag == false);

		System.out.println("\n");

		WebElementLocator annotation = method.getAnnotation(WebElementLocator.class);

		methodNumber = 0;
		method = methods[0];

		if (System.getProperty("testingType").equals("web")) {
			System.out.println("returning element Web");
			if (annotation.webElementType().equals("id")) {
				return By.id(annotation.webElementValue());
			}
			if (annotation.webElementType().equals("xpath")) {
				return By.xpath(annotation.webElementValue());
			}
		} else {
			System.out.println("returning element for Web-Mobile");
			if (annotation.webElementType().equals("id")) {
				return By.id(annotation.webMobileElementValue());
			}
			if (annotation.webElementType().equals("xpath")) {
				return By.xpath(annotation.webMobileElementValue());
			}
		}
		System.out.println("Returning null value at the moment to retrive the method: " + methodName);
		return null;
	}
}