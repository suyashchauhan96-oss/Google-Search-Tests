package Basics;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Browser_Initialization_in_Selenium_WebDriver {
	public static void main(String[] args) {

		/*
		 * Step 1: Set the system property for ChromeDriver This tells Selenium where
		 * the browser driver executable is located
		 */
		System.setProperty("webdriver.chrome.driver",
				"D:\\Chrome new\\chromedriver-win64 (6)\\chromedriver-win64\\chromedriver.exe");
		/*
		 * Step 2: Create an object of ChromeDriver ChromeDriver implements WebDriver
		 * interface
		 */
		WebDriver driver = new ChromeDriver();

		/*
		 * Step 3: Launch the application URL in the browser
		 */
		driver.get("https://www.google.com");

		/*
		 * Step 4: Maximize the Browser
		 */
		driver.manage().window().maximize();

		/*
		 * Step 5: Get and print the page title
		 */
		String title = driver.getTitle();
		System.out.println("Page title is: " + title);

		/*
		 * Step 6: Close all browser windows and end the WebDriver session
		 */
		driver.quit();

	}
}
