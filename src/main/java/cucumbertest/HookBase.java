package cucumbertest;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.testng.annotations.AfterSuite;
//import org.testng.annotations.BeforeSuite;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.Test;

import cucumber.api.java.After;
import cucumber.api.java.Before;




//import utilities.Config;

public class HookBase 
{
	public static WebDriver driver;
	//private static final Logger log= Logger.getLogger("devpinoyLogger");
	//Logger log1 = Logger.getLogger("devpinoyLogger");
	 //private static org.apache.log4j.Logger log = Logger.getLogger(LogClass.class);
	//public static com.gargoylesoftware.htmlunit.WebConsole.Logger log=(com.gargoylesoftware.htmlunit.WebConsole.Logger) Logger.getLogger("devpinoyLogger");
    
	   @Before
	     public static void setUp() 
	     {
		   // DOMConfigurator.configure("src/test/resources/log4j.properties"); 
		      
		      //System.setProperty("webdriver.firefox.driver","D:\\geckodriver.exe");
		      if(Config.browser!=null)
		      {
		          if(Config.browser.equalsIgnoreCase("chrome"))
		          {
		        	  System.setProperty("webdriver.chrome.driver","C:\\cucumbertest\\src\\main\\resources\\chromedriver.exe");
		             driver  = new ChromeDriver(); 
		             //driver.get("https://google.com");
		             driver.get("https://accounts.google.com");
		            //log.debug("browser chrome is opened");
		          }
		          else if(Config.browser.equalsIgnoreCase("firefox"))
		          {
		        	  //System.setProperty("webdriver.firefox.driver","C:\\Users\\1037361\\workspace\\testing8\\src\\test\\resources\\geckodriver.exe");
		             //driver  = new FirefoxDriver();
		          }
		      }
		      else
		       {
		      System.out.println("default browser");
		      driver  = new ChromeDriver();  
		      //log.debug("Open Chrome Broweser");
		       } 
		     // driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		     // driver.manage().deleteAllCookies();
		     // driver.manage().window().maximize();
		     // driver.manage().timeouts().setScriptTimeout(60,TimeUnit.SECONDS);
		     // driver.navigate().refresh();
	     }
	   
	 @After
	 
	public static void tearDownClass() 
	 {
	  
		// log.debug("cookies deleted");

//	driver.close();
		// log.debug("Browser closed");


}
}
