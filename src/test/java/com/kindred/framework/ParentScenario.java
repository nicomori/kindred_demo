package com.kindred.framework;

import java.net.URL;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.kindred.pageobject.web.BlogPage;
import com.kindred.pageobject.web.GenericPage;
import com.kindred.pageobject.web.HomePage;
import com.kindred.util.SelectorBrowser;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.remote.MobileBrowserType;
import io.appium.java_client.remote.MobileCapabilityType;

/**
 * This Class is created for make a helper for all the pages, and all the parts
 * of the a native app, or for execute all the drivers. And for create all the
 * objects of pages, or objects created in all the pages.
 * 
 */

public class ParentScenario {

	protected static WebDriver driver;

	// Web Apps
	protected static HomePage homePage;
	protected static BlogPage blogPage;
	protected static GenericPage genericPage;

	/**
	 * this method create the object driver for Android.
	 * 
	 * @param uuid
	 *            of the device to use.
	 */
	public void startAndroidApp() {
		try {
			if (System.getProperty("uuid").equals(null)) {
				System.out.println("Please define the variable \"uuid\" in your execution MVN command with "
						+ "the uuid of your device, something like a string with numbers, you can get "
						+ "the correct uuid executing this in the terminal: \"adb devices\", "
						+ "get just the code in the left side");
				System.exit(0);
			}

//			if (System.getProperty("appPackage").equals(null)) {
//				System.out.println("Please define the variable \"appPackage\" in your execution MVN command with "
//						+ "the appPackage of your app, something like \"com.inovotecs.smartfrog.dev\"");
//				System.exit(0);
//			}
//
//			if (System.getProperty("appFilePath").equals(null)) {
//				System.out.println("Please define the variable \"appFilePath\" in your execution MVN command with "
//						+ "the path to your ipa file something like: /Users/[username]/base.apk");
//				System.exit(0);
//			}
//
//			if (System.getProperty("appWaitActivity").equals(null)) {
//				System.out.println("Please define the variable \"appWaitActivity\" in your execution MVN command with "
//						+ "the appPackage of your app, something like \"com.inovotecs.frogcam.startup.StartupActivity\"");
//				System.exit(0);
//			}
		} catch (Exception e) {
			System.out.println(
					"Please define correctly the Maven variables -Duuid, -DappPackage, -DappFilePath and -DappWaitActivity");
			System.exit(0);
		}

		DesiredCapabilities cap = new DesiredCapabilities();
//		cap.setCapability(MobileCapabilityType.APP_PACKAGE, System.getProperty("appPackage"));
		cap.setCapability(MobileCapabilityType.PLATFORM_NAME, "ANDROID");
//		cap.setCapability(MobileCapabilityType.APP, System.getProperty("appFilePath"));
		cap.setCapability("noReset", false);
		cap.setCapability("deviceName", "Android");
//		cap.setCapability("appWaitActivity", System.getProperty("appWaitActivity"));
		cap.setCapability(MobileCapabilityType.BROWSER_NAME, MobileBrowserType.CHROME);

		try {
			driver = new AndroidDriver<WebElement>(new URL("http://USERNAME:PASSWORD@127.0.0.1:4723/wd/hub"), cap);
		} catch (Exception e) {
			System.out.println("Exeption at the moment to generate the driver = " + e);
		}

		homePage = new HomePage(driver);
		blogPage = new BlogPage(driver);
		genericPage = new GenericPage(driver);
	}

	public void startBrowser(boolean isMobileEmulator) {
		System.out.println("Starting driver for Browser Chrome");
		driver = SelectorBrowser.createDriverWithoutCapabilities(isMobileEmulator, driver);
		
		homePage = new HomePage(driver);
		blogPage = new BlogPage(driver);
		genericPage = new GenericPage(driver);
	}

	/**
	 * this method select the driver to create, depending of the maven property
	 * "testingType" in the command to execute.
	 * 
	 */
	public void deviceSelector() {
		try {
			if (System.getProperty("testingType").equals("web")) {
				System.out.println("Starting a testing of Web.");
				startBrowser(false);
			}

			if (System.getProperty("testingType").equals("mobilewebemulator")) {
				System.out.println("Starting a testing of Mobile Web in the browser emulator.");
				startBrowser(true);
			}
			
			if (System.getProperty("testingType").equals("mobileweb")) {
				System.out.println("Starting a testing of Mobile Web.");
				startAndroidApp();
			}
		} catch (Exception e) {
			System.out.println("\n\n\n Please define correctly the Maven variables -DtestingType, you "
					+ "need include in this, web, or mobileweb 8");
			System.out.println(e);
			driver.quit();
			System.exit(0);
		}
	}

	/**
	 * this method define where we need access, this permit access to diferents
	 * sites, or enviroment inside of a site, in example, we can access to the site
	 * of Unibet in the enviroment of test, or prod, or to the site of Kindred to
	 * the enviroment of test or dev or prod.
	 * 
	 */
	public void accessToTheUrlWithoutExamples(String urlDefinition) {
		if (urlDefinition.toLowerCase().contains("nibet")) {
			try {
				if (System.getProperty("env").contains("prod")) {
					System.out.println("Starting the access to the site " + urlDefinition + ", in the enviroment, "
							+ System.getProperty("env"));
					driver.get("https://www.unibet.co.uk");
				} else if (System.getProperty("env").contains("stag")) {
					System.out.println("Starting the access to the site " + urlDefinition + ", in the enviroment, "
							+ System.getProperty("env"));
					driver.get("https://www.unibet.co.uk");
				} else if (System.getProperty("env").contains("dev")) {
					System.out.println("Starting the access to the site " + urlDefinition + ", in the enviroment, "
							+ System.getProperty("env"));
					driver.get("https://www.unibet.co.uk");
				} else {
					System.out.println("\n\n\n Appear a problem in the variable \"env\" you set " + "this value: "
							+ System.getProperty("env")
							+ ", but we can work with values like production, staging, or developers, please take a look there. 1");
					driver.quit();
					System.exit(0);
				}
			} catch (Exception e) {
				System.out.println(
						"\nPlease define correctly the Maven variables \"-Denv\", you need include in this, production, or staging, or developers 2");
				driver.quit();
				System.exit(0);
			}
		}

		if (urlDefinition.toLowerCase().contains("log")) {
			try {
				if (System.getProperty("env").contains("prod")) {
					System.out.println("Starting the access to the site " + urlDefinition + ", in the enviroment, "
							+ System.getProperty("env"));
					driver.get("https://www.unibet.co.uk/blog");
				} else if (System.getProperty("env").contains("stag")) {
					System.out.println("Starting the access to the site " + urlDefinition + ", in the enviroment, "
							+ System.getProperty("env"));
					driver.get("https://www.unibet.co.uk/blog");
				} else if (System.getProperty("env").contains("dev")) {
					System.out.println("Starting the access to the site " + urlDefinition + ", in the enviroment, "
							+ System.getProperty("env"));
					driver.get("https://www.unibet.co.uk/blog");
				} else {
					System.out.println("\n\n\n Appear a problem in the variable \"env\" you set " + "this value: "
							+ System.getProperty("env")
							+ ", but we can work with values like production, staging, or developers, please take a look there. 1");
					driver.quit();
					System.exit(0);
				}
			} catch (Exception e) {
				System.out.println(
						"\nPlease define correctly the Maven variables \"-Denv\", you need include in this, production, or staging, or developers 2");
				driver.quit();
				System.exit(0);
			}
		}
	}
}