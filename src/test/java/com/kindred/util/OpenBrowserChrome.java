package com.kindred.util;

import java.util.HashMap;
import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

public class OpenBrowserChrome {

	private static final String WIN_DRIVER_PATH = "resources/drivers/win/chromedriver.exe";
	private static final String MAC_DRIVER_PATH = "resources/drivers/mac/chromedriver";

	public static WebDriver openBowserWithOutCapabilities(WebDriver driver) {

		String oS = System.getProperty("os.name").toLowerCase();

		if (oS.contains("windows")) {
			System.setProperty("webdriver.chrome.driver", WIN_DRIVER_PATH);

		} else if (oS.contains("mac")) {
			System.setProperty("webdriver.chrome.driver", MAC_DRIVER_PATH);
		} else {
			System.out.println("This is the OS: " + oS);
			System.out.println("OS is not compatible, you need define the path of the chromedriver again");
			System.exit(0);
		}

		
		
		ChromeOptions options = new ChromeOptions();
        options.addArguments("window-size=1800,1024");

        DesiredCapabilities cap = DesiredCapabilities.chrome();
        cap.setCapability(ChromeOptions.CAPABILITY, options);
        
        driver = new ChromeDriver(cap);
		return driver;
	}

	public static WebDriver openBowserWithOutCapabilitiesForEmulateMobile(WebDriver driver, boolean mobile) {
		String oS = System.getProperty("os.name").toLowerCase();

		if (oS.contains("windows")) {
			System.setProperty("webdriver.chrome.driver", WIN_DRIVER_PATH);

		} else if (oS.contains("mac")) {
			System.setProperty("webdriver.chrome.driver", MAC_DRIVER_PATH);
		} else {
			System.out.println("This is the OS: " + oS);
			System.out.println("OS is not compatible, you need define the path of the chromedriver again");
			System.exit(0);
		}

		Map<String, String> mobileEmulation = new HashMap<String, String>();
		mobileEmulation.put("deviceName", "Pixel 2");
		Map<String, Object> chromeOptions = new HashMap<String, Object>();
		chromeOptions.put("mobileEmulation", mobileEmulation);
		
		ChromeOptions options = new ChromeOptions();
        options.addArguments("window-size=1800,1024");		
        
		DesiredCapabilities capabilities = DesiredCapabilities.chrome();
		capabilities.setCapability(ChromeOptions.CAPABILITY, options);
		capabilities.setCapability(ChromeOptions.CAPABILITY, chromeOptions);

		driver = new ChromeDriver(capabilities);
		return driver;
	}

}
