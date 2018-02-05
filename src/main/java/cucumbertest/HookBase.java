package cucumbertest;

import java.io.FileInputStream;
import java.io.IOException;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.firefox.FirefoxDriver;
//import org.testng.annotations.AfterSuite;
//import org.testng.annotations.BeforeSuite;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.annotations.Test;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import stepDefination.Gmail_Login;




//import utilities.Config;

public class HookBase 
{
	public static WebDriver driver;
	//private static final Logger log= Logger.getLogger("devpinoyLogger");
	//Logger log1 = Logger.getLogger("devpinoyLogger");
	 //private static org.apache.log4j.Logger log = Logger.getLogger(LogClass.class);
	//public static com.gargoylesoftware.htmlunit.WebConsole.Logger log=(com.gargoylesoftware.htmlunit.WebConsole.Logger) Logger.getLogger("devpinoyLogger");
    
	   @org.testng.annotations.BeforeClass
	     public static void setUp() throws IOException
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
		            // driver.get("https://accounts.google.com");
		            //log.debug("browser chrome is opened");
		          }
		          else if(Config.browser.equalsIgnoreCase("firefox"))
		          {
		        	  //System.setProperty("webdriver.firefox.driver","C:\\Users\\1037361\\workspace\\testing8\\src\\test\\resources\\geckodriver.exe");
		             //driver  = new FirefoxDriver();
		          }
		      }
		      else if(Config.browser.equalsIgnoreCase("IE"))
		      {
		    	  System.setProperty("webdriver.chrome.drive","C:\\cucumbertest\\src\\main\\resources\\IEDriverServer.exe");
		          driver  = new InternetExplorerDriver();
		      }
		      else
		       {
		      System.out.println("default browser");
		      driver  = new ChromeDriver();  
		      //log.debug("Open Chrome Broweser");
		       } 
		     
//		  		String FilePath = "C:\\Users\\1037361\\Desktop\\external.xls";
//		  		FileInputStream fs = new FileInputStream(FilePath);
//		  		HSSFWorkbook workbook = new HSSFWorkbook(fs);
//		  		HSSFSheet sheet = workbook.getSheetAt(0);
//		  		//int totalNoOfRows = sheet.getRows();
//		  		//int totalNoOfCols = sheet.getColumns();
//		  		String heading = sheet.getRow(0).getCell(0).getStringCellValue();
//		  		 String searchText1 = sheet.getRow(1).getCell(0).getStringCellValue();
//		  		    
//		  		  String searchText2 = sheet.getRow(2).getCell(0).getStringCellValue();
//		  		    
//		  		  System.out.println("Heading is:" + heading);
//		  		    
//		  		  System.out.println("Search Text 1 is:" + searchText1);
//		  		    
//		  		  System.out.println("Search Text 2 is:" + searchText2);
//		  		 
		  		  //file.close();
		  	
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

	driver.close();
		// log.debug("Browser closed");


}
}
