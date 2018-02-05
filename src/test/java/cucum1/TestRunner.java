package cucum1;

import org.junit.runner.RunWith; 
//import cucumber.junit.Cucumber; 
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/Features"},glue={"src/test/java/stepDefination"},
monochrome=true,plugin = { "html:target/cucumber-html-report",
        "json:target/cucumber-dry.json", "pretty:target/cucumber-pretty-dry.txt",
        "usage:target/cucumber-usage-dry.json", "junit:target/cucumber-results-dry.xml" }

)
	


public class TestRunner 
{

}
