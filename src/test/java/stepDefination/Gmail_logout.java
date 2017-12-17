package stepDefination;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumbertest.Config;
import cucumbertest.Login1;

public class Gmail_logout
{
	Robot rb1;
	public static WebDriver driver;
	private Gmail_Login q1;
	private Login1 q2;
	
	@Given("^User is LoggedIn into account$")
	public void user_is_LoggedIn_into_account() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver","C:\\cucumbertest\\src\\main\\resources\\chromedriver.exe");
        driver  = new ChromeDriver();
        q1.user_enters_e_mail_address(q2.mail1,Config.email1);
		q1.user_enters_password(q2.pass1,Config.pass1);
		q1.user_navigates_to_gmail_account();
        //driver.get("https://www.google.com");
	    throw new PendingException();
	}

	@When("^user clicks on profile icon")
	public void user_clicks_on_profile_icon_and_changes_profile_picture(WebElement t1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(t1.isDisplayed())
		{
			t1.click();
		}
	    throw new PendingException();
	}
	@Then("^user clicks on profile profile popup")
	public void profile_pop_up_appears(WebElement t2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(t2.isDisplayed())
		{
			t2.click();
		}
	    throw new PendingException();
	}
	@And("^user clicks on change icon")
	public void user_clicks_on_change_icon(WebElement t3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(t3.isDisplayed())
		{
			t3.click();
		}
	    throw new PendingException();
	}
	@And("^user clicks on select picture")
	public void user_clicks_on_select_picture(WebElement t4) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(t4.isDisplayed())
		{
			t4.click();
		}
	    throw new PendingException();
	}
	@And("^user clicks on set profile pic")
	public void user_clicks_on_set_picture(WebElement t5) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(t5.isDisplayed())
		{
			t5.click();
			StringSelection filePath = new StringSelection(
	  				 "C:\\Users\\1037361\\Desktop\\errors.png");

	  				   Toolkit.getDefaultToolkit().getSystemClipboard()
	  				    .setContents(filePath, null);

	  				   Robot rb1 = new Robot();
	  				  Thread.sleep(5000);
	  				  rb1.keyPress(KeyEvent.VK_CONTROL);
	  				  rb1.keyPress(KeyEvent.VK_V);
	  				  rb1.keyRelease(KeyEvent.VK_CONTROL);
	  				  rb1.keyRelease(KeyEvent.VK_V);
	  				  Thread.sleep(6000);
	  				  rb1.keyPress(KeyEvent.VK_ENTER);
	  				  rb1.keyRelease(KeyEvent.VK_ENTER);
	  				  Thread.sleep(10000);
		}
	    throw new PendingException();
	}
	

	@When("^User clicks on signout button$")
	public void user_clicks_on_signout_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^User is successfully loggedout$")
	public void user_is_successfully_loggedout() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

}
