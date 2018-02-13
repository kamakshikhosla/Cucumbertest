package stepDefination;

import java.io.FileInputStream;
import java.io.IOException;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.testng.annotations.AfterSuite;
//import org.testng.annotations.BeforeSuite;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumbertest.Config;




//import utilities.Config;

public class CommonMethods 
{
	public static WebDriver driver;
	
	public static void getdriver() {
		
		if(Config.browser!=null)
	      {
	          if(Config.browser.equalsIgnoreCase("chrome"))
	          {
	        	  
	        	  System.setProperty("webdriver.chrome.driver","C:\\Users\\1037361\\workspace\\testing8\\src\\test\\resources\\chromedriver.exe");
	              driver  = new ChromeDriver(); 
	              //driver.get("www.google.com");
	             System.out.println("Chrome driver is Set");
	            
	           // log.debug("browser chrome is opened");
	          }
	          else if(Config.browser.equalsIgnoreCase("firefox"))
	          {
	        	  System.setProperty("webdriver.firefox.driver","C:\\toolsqatest\\src\\test\\resources\\geckodriver.exe");
	             driver  = new FirefoxDriver();
	          }
	          else if(Config.browser.equalsIgnoreCase("IE"))
		      {
		    	  System.setProperty("webdriver.ie.driver","C:\\toolsqatest\\src\\main\\java\\Core\\IEDriverServer.exe");
		          driver  = new InternetExplorerDriver();
		          DesiredCapabilities caps = DesiredCapabilities.internetExplorer();
		          caps.setCapability("ignoreZoomSetting", true);
		          caps.setCapability( InternetExplorerDriver.INTRODUCE_FLAKINESS_BY_IGNORING_SECURITY_DOMAINS, true );
		          caps.setCapability(CapabilityType.ACCEPT_SSL_CERTS, true);
		          driver = new InternetExplorerDriver(caps);
		      }
	          
	      }
	      else
	       {
	      System.out.println("default browser");
	      driver  = new ChromeDriver();  
	      //log.debug("Open Chrome Broweser");
	       } 
		
	}
 
}
