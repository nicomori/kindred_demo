package com.kindred.steps;

import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class Steps extends StepsHelper {
	@And("make click in the icon to search")
	public void makeClickInTheIconSearch() {
		System.out.println("Starting to make click in some element");
		blogPage.makeClickInTheIconSearch();
	}

	@And("send this text \"(.*)\" to search")
	public void sendSomeTextToSearch(String someText) {
		System.out.println("Starting to send this text " + someText);
		blogPage.sendkeysToTheElementSearchFieldAndPressEnter("Messi");
	}

	@Then("verify if the text \"(.*)\" appear correctly")
	public void verifyIfATextAppearCorrectlyDisplayed(String someText) {
		System.out.println("Starting to find this text " + someText);
		Assert.assertTrue(blogPage.verifyIfTheFirstClusterIsDisplayed(),
				"Appear a problem at the moment to verify if the first cluster appear correctly");
		Assert.assertTrue(blogPage.verifyIfSomeTextAppearInTheFirstCluster("Messi"),
				"Appear a problem, is not possible to find some text in the paragraph");
	}

	@And("make click in the link with the text \"(.*)\", and with this index \"(.*)\" in the footer")
	public void makeClickInATextPerText(String someTextToMakeClick, String index) {
		genericPage.genericMakeClickInALinkWithSomeText(someTextToMakeClick, index);
	}
	
	@And("make click in the link with the text \"(.*)\", and with this index \"(.*)\" in the body carrousel")
	public void makeClickInATextPerT3ext(String someTextToMakeClick, String index) {
		genericPage.genericMakeClickInALinkWithSomeText(someTextToMakeClick, index);
	}

	@Then("verify the URL \"(.*)\" and the Title \"(.*)\" of the new web")
	public void verifyTheUrlAndTheTitle(String expectedUrlContent, String expectedTitleContent) {
		System.out.println("Starting to validate if this text "+expectedUrlContent+" appear in the url");
		Assert.assertTrue(genericPage.genericValidatorUrlTextContent(expectedUrlContent), "we cant find a text contect expected in the url");
		System.out.println("Starting to validate if this text "+expectedTitleContent+" appear in the title");
		Assert.assertTrue(genericPage.genericValidatorTitleTextContent(expectedTitleContent), "we cant find a contect text expected in the title");
	}
}