package cucumbertest;

import java.util.List;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login1 
{
	@FindBy(id="identifierId")
	   public WebElement mail1;
	    @FindBy(xpath="//div[@class=\"Xb9hP\"]/input")
	    public WebElement pass1;
	    @FindBy(xpath="//div[@class=\"z0\"]/div")
	   public WebElement compose1;
	     @FindBy(xpath="//textarea[@id=\":ny\" and @class=\"vO\"]")
	   public WebElement text1;
	     @FindBy(xpath="//input[@id=\":nh\" and @class=\"aoT\"]")
	     public WebElement sub1;
	     @FindBy(xpath="//div[@id=\":oi\" and @role=\"textbox\"]")
	     public WebElement message1;
	     @FindBy(xpath="//div[@id=\":p4\"]")
	     public WebElement attach;
	     public Login1(WebDriver driver)
	     {
	         super();
	         PageFactory.initElements(driver,this);
	     }
}
