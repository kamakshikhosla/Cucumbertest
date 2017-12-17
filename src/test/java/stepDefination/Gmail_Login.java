package stepDefination;

import static org.testng.Assert.assertEquals;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumbertest.HookBase;
import cucumbertest.Config;
import cucumbertest.Login1;


public class Gmail_Login
{
	Robot rb;
	private Gmail_Login q1;
	private Login1 q2;
	public static WebDriver driver;
	
	
	
	@Given("^User is on the login page$")
	public void user_is_on_the_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		 System.setProperty("webdriver.chrome.driver","C:\\cucumbertest\\src\\main\\resources\\chromedriver.exe");
         driver  = new ChromeDriver();
		q1=new Gmail_Login();
		q2=new Login1(driver);
		driver.get("https://accounts.google.com/");
		driver.manage().window().maximize();
		//q1.user_is_on_the_login_page();
		q1.user_enters_e_mail_address(q2.mail1,Config.email1);
		q1.user_enters_password(q2.pass1,Config.pass1);
		q1.user_navigates_to_gmail_account();
		q1.user_clicks_on_compose_button();
		q1.user_enters_mailid();
		q1.user_enters_subject();
		//q1.user_enters_text_message();
		//q1.user_enters_Attachment();
		q1.user_clicks_on_send_button();
		
		String url1=driver.getCurrentUrl();
		//Assert.assertEquals(config.formUrl,url1);
		
		
	    throw new PendingException();
	}

	@When("^User enters e-mail address")
	public void user_enters_e_mail_address(WebElement e1,String w1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(e1.isDisplayed())
		{
			e1.sendKeys(w1);
		Thread.sleep(3000);
		rb=new Robot();
		rb.keyPress(KeyEvent.VK_ENTER);
		rb.keyRelease(KeyEvent.VK_ENTER);
		Thread.sleep(3000);
		}
	    //throw new PendingException();
	}
	
	@And("^User enters password$")
	public void user_enters_password(WebElement e2,String w2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(e2.isDisplayed())
		{
			e2.sendKeys(w2);
			Thread.sleep(3000);
		rb=new Robot();
		rb.keyPress(KeyEvent.VK_ENTER);
		rb.keyRelease(KeyEvent.VK_ENTER);
		Thread.sleep(3000);
		}
	    //throw new PendingException();
	}

	@Then("^User navigates to gmail account$")
	public void user_navigates_to_gmail_account() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.className("WaidBe")).click();;
		//driver.navigate().forward();
		Thread.sleep(3000);
	    throw new PendingException();
	}
	@When("^user clicks on compose button")
	public void user_clicks_on_compose_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement e3=driver.findElement(By.xpath("//div[@class=\"z0\"]/div"));
		if(e3.isDisplayed())
		{
			e3.click();
			Thread.sleep(2000);
		}
	    //throw new PendingException();
	}

	@And("^user enters mailid")
	public void user_enters_mailid() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement e4=driver.findElement(By.xpath("//textarea[@class=\"vO\"]"));
		if(e4.isDisplayed())
		{
			e4.sendKeys(Config.email1);
			Thread.sleep(2000);
		}
	    //throw new PendingException();
	}
	
	@And("^user enters subject$")
	public void user_enters_subject() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement e5=driver.findElement(By.xpath("//input[@class=\"aoT\"]"));
		if(e5.isDisplayed())
		{
			System.out.println("entrer subject");
			
			e5.sendKeys(Config.sub1);
			Thread.sleep(2000);
			Robot rb = new Robot();
			rb.keyPress(KeyEvent.VK_CONTROL);
			 // rb.keyPress(KeyEvent.VK_V);
			  
			 // rb.keyRelease(KeyEvent.VK_V);
			 // Thread.sleep(6000);
			  rb.keyPress(KeyEvent.VK_ENTER);
			  rb.keyRelease(KeyEvent.VK_CONTROL);
			  rb.keyRelease(KeyEvent.VK_ENTER);
			  driver.navigate().refresh();
		
		}
			
	    //throw new PendingException();
	}

	@And("^user enters text message")
	public void user_enters_text_message() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement e6=driver.findElement(By.xpath("//div[@class=\"Am Al editable LW-avf\""));
		if(e6.isDisplayed())
		{
			System.out.println("entrer message");
			e6.sendKeys(Config.text1);
			Thread.sleep(2000);
		}
	    throw new PendingException();
	}
	@And("^user enters Attachment")
	public void user_enters_Attachment() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		WebElement e7=driver.findElement(By.xpath("//div[@class=\"a1 aaA aMZ\"]"));
		if(e7.isDisplayed())
		{
			System.out.println("entrer attachment");
			e7.click();
			Thread.sleep(2000);
			StringSelection filePath = new StringSelection(
	  				 "C:\\Users\\1037361\\Desktop\\errors.png");

	  				   Toolkit.getDefaultToolkit().getSystemClipboard()
	  				    .setContents(filePath, null);

	  				   //Robot rb = new Robot();
	  				  Thread.sleep(5000);
	  				  rb.keyPress(KeyEvent.VK_CONTROL);
	  				  rb.keyPress(KeyEvent.VK_V);
	  				  rb.keyRelease(KeyEvent.VK_CONTROL);
	  				  rb.keyRelease(KeyEvent.VK_V);
	  				  Thread.sleep(6000);
	  				  rb.keyPress(KeyEvent.VK_ENTER);
	  				  rb.keyRelease(KeyEvent.VK_ENTER);
	  				  Thread.sleep(10000);
		}
	    throw new PendingException();
	}

	@Then("^user clicks on send button$")
	public void user_clicks_on_send_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		rb=new Robot();
		rb.keyPress(KeyEvent.VK_ENTER);
		rb.keyRelease(KeyEvent.VK_ENTER);
	    throw new PendingException();
	}

}
