package cucumbertest;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Logout1 
{
	@FindBy(xpath="//*[@id='gb']/div[1]/div[1]/div[2]/div[5]/div[1]/a")
	   public WebElement profile1;
	    @FindBy(xpath="//div[@title=\"Profile\"]")
	    public WebElement pic1;
	    @FindBy(xpath="//*[@id=':g.select-files-button']/div")
	   public WebElement change1;
	     @FindBy(xpath="//*[@id='picker:ap:3']")
	   public WebElement set1;
	     @FindBy(xpath="//*[@id='gb_71']")
	     public WebElement out1;
	     
	     public Logout1(WebDriver driver)
	     {
	         super();
	         PageFactory.initElements(driver,this);
	     }
}
