package stepDefination;

import org.junit.After;
import org.junit.AfterClass;
import org.junit.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumbertest.Config;


public class Amazon 
{
//extends CommonMethods 
public static WebDriver driver;

@cucumber.api.java.Before
public void setup()
{
	System.out.println("hello");
	System.setProperty("webdriver.chrome.driver","C:\\Users\\1037361\\workspace\\testing8\\src\\test\\resources\\chromedriver.exe");
    driver  = new ChromeDriver();
      }

	


	
	@cucumber.api.java.After
	public void teardown()
	{
	driver.close();
		 //log.debug("Browser closed");
	}

@Given("^user opens Amazon website$")
public void user_opens_Amazon_website() throws Throwable {                
	
	// Write code here that turns the phrase above into concrete actions
//	 System.setProperty("webdriver.firefox.driver","C:\\toolsqatest\\src\\test\\resources\\geckodriver.exe");
//     driver  = new FirefoxDriver();
	System.out.println("Inside Method");
	//CommonMethods.getdriver();
	CommonMethods.driver.get("https://www.google.com");
    throw new PendingException();
}

//@Given("^User is on the Amazon Site$")
//public void user_is_on_the_Amazon_Site() throws Throwable {
//    // Write code here that turns the phrase above into concrete actions
//    throw new PendingException();
//}

@When("^user enter a search text in the seach box\\.$")
public void user_enter_a_search_text_in_the_seach_box() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Then("^user should be able to see the desired results$")
public void user_should_be_able_to_see_the_desired_results() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@When("^User clicks on Shop by Category with different Amazon Echo$")
public void user_clicks_on_Shop_by_Category_with_different_Amazon_Echo() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Then("^Options should open in new browser$")
public void options_should_open_in_new_browser() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Then("^User should see correct jhk$")
public void user_should_see_correct_jhk() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@When("^User clicks on Shop by Category with different Meet Alexa$")
public void user_clicks_on_Shop_by_Category_with_different_Meet_Alexa() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}

@Then("^User should see correct kjkio$")
public void user_should_see_correct_kjkio() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
    throw new PendingException();
}
}

