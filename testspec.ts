import {$$, browser, by, element, until} from "protractor";
import {automationPractice} from "./PageObjects/automationPractice";

describe('Protractor testing', async function () {

    /*
    * This is a beforeEach function that was created to get over the hurdle of having the program
    * running as one fluid test. I was unable to reset the browsers cache and cookies without having errors.
    * I tried multiple instance but the fact that the website wasn't angular I couldn't find a way to run
    * 'browser.waitForAngularEnabled(false)' prior or after resetting the browser.
    */
    // beforeEach(function(){
    //     browser.excuteScript('window.localStorage.clear();');
    //     browser.excuteScript('window.sessionStorage.clear();');
    //     browser.driver.manage().deleteAllCookies();
    //     browser.sleep(1000);
    //     browser.waitForAngularEnabled(false);
    //     browser.sleep(2000);
    //     browser.get("http://automationpractice.com/index.php");
    // });
    let webElements = new automationPractice();
    function navigate() {
        browser.waitForAngularEnabled(false);
        browser.get("http://automationpractice.com/index.php");
        browser.sleep(3000);
    }

    function addToCart(indexNumber, contShopping) {
        element.all(by.css("a[title='Add to cart']")).get(indexNumber).click().then(function () {
            if (contShopping === true) {
                browser.sleep(3000);
                element(by.css("span[title='Continue shopping']")).click();
            } else {
                browser.sleep(3000);
                element(by.css("a[title='Proceed to checkout']")).click();
            }
        });
    }

    function compareValidation(className, textVal1, textVal2, textVal3) {
        browser.element.all(by.className(className)).getText().then(function (text) {
            expect(text[0]).toEqual(textVal1);
            expect(text[1]).toEqual(textVal2);
            expect(text[2]).toEqual(textVal3);
        })
    }

    it('Filter and Add items to cart', async() =>{

        //step 1 Navigate to http://automationpractice.com/index.php
        navigate();
        //step 2 Click on dresses Tab
        await webElements.dressBtn.click();
        //step Filter for a Summer Dress and select a dress that is Yellow, and is less then $20
        await webElements.summerDress.click();
        //Step 4 clicks the yellow option and size medium then click the Add to Cart button dress
        let farYellowDress = await element(by.css("img[src='http://automationpractice.com/img/p/1/2/12-home_default.jpg']"));
        browser.actions().mouseMove(farYellowDress).mouseMove({x: 0, y: -100}).doubleClick().perform();
        await webElements.selectDropDown.click();
        await webElements.selectMedium.get(1).click();
        //add to shopping cart
        browser.element(by.name("Submit")).click();
        browser.sleep(2000);
        //step 5 clicks the continue shopping button
        await browser.element(by.css("span[title='Continue shopping']")).click();
        browser.sleep(3000);
        //Step 6 Hover over the 'Women' tab and select the 'T-shirt' option
        //hover over
        await browser.actions().mouseMove(webElements.selectT).perform().then(async () => {
            //selects T-shirts
            await browser.sleep(1000);
            await browser.element(by.css("a[title='T-shirts']")).click();
            await browser.sleep(1000);
        });
        //Step 7 Select a blue t-shirt
        await browser.actions().mouseMove(webElements.selectBlue).perform();
        await webElements.selectBlue.click();
        await browser.sleep(2000);
        //step 8 Change quantity to 2 by entering text, select the blue color shirt, and size small
        //Then click Add to Cart button
        await webElements.quantityBox.clear().then(async () => {
            await webElements.quantityBox.sendKeys("2");
            browser.sleep(4000);
        });
        await browser.element(by.id("color_14")).click();
        browser.sleep(1000);
        await browser.element(by.name("Submit")).click();
        browser.sleep(3000);
        //step 9 Click the continue shopping button
        await $$("span[title='Continue shopping']").click();
        browser.sleep(2000);
        //adds 1 to quantity by clicking + button
        await $$("[class='btn btn-default button-plus product_quantity_up'").click();
        await browser.element(by.id("color_13")).click().then(async () => {
            await browser.element(by.name("Submit")).click();
        });
        browser.sleep(2000);
        await $$("a[title='Proceed to checkout']").click();
    });
    it('Delete Items', function () {

        //Step 1 Navigate to http://automationpractice.com/index.php
        navigate();
        //Step 2 Add multiple items to your cart and validate the Cart dropdown on the top of the page
        addToCart(1, true);
        addToCart(2, true);
        addToCart(3, true);
        //Validation processes
        $$('.products dt').then(function (items) {
            expect(items.length).toBe(3);
            //comes back with an error if isn't 3
        });
        //step 3 Hover over the button and click the x next to an item to remove the item
        browser.actions().mouseMove(webElements.shopCart).perform().then(async () => {
            //Creates an ElementArrayFinder array of remove link X elements
            browser.sleep(1000);
            await element.all(by.className("ajax_cart_block_remove_link")).then(function (items) {
                browser.sleep(1000);
                //deletes the index[2] of the array of elements
                items[2].click();
                browser.sleep(1000);
                //step 4 Validate the content of the cart dropdown
                webElements.amount.getText().then(function (text) {
                    //Will return error if value is incorrect
                    expect(text).toEqual("$55.00");
                    browser.sleep(5000);
                })
            })
        });
    });
    it('Compare Items from List View', async function () {

        //Step 1 Navigate to http://automationpractice.com/index.php
        navigate();
        //step 2 Click on "Dress" Tab
        await webElements.dressBtn.click();
        //Step 3 Change Grid view to List view
        element(by.className("icon-th-list")).click();
        //step 4 Click on the `Add to Compare` button for at least two different items
        browser.element.all(by.className("add_to_compare")).then(function (compare) {
            compare[1].click();
            browser.sleep(700);
            compare[2].click();
        });
        //step 5 Click on the Compare button
        element(by.className("bt_compare")).click();
        //Validate the content of the Product Comparison Page
        compareValidation("product-name", '', "Printed Dress", "Printed Summer Dress");
        //Grabs button container class and creates an array out of those strings and validates the text
        compareValidation("button-container", '', "Add to cart\nView", "Add to cart\nView");
        //Creates an array out of all the text inside of the comparison feature container and then validates the array
        /*
        *~~~~~~~~~~~~~~Bug~~~~~~~~~~~~~~~~~~~~
        * This section of the website randomly generates the organization of 'Features'
        * in which 'Properties','Styles', and 'Compositions' is organized in.
        */
        element.all(by.css("td[class*='comparison_feature']")).getText().then(function (text) {
            //Goes through array and checks if all strings are contained within the array
            expect(text).toContain('Styles');
            expect(text).toContain('Dressy');
            expect(text).toContain('Casual');
            expect(text).toContain('Compositions');
            expect(text).toContain('Viscose');
            expect(text).toContain('Viscose');
            expect(text).toContain('Properties');
            expect(text).toContain('Short Dress');
            expect(text).toContain('Maxi Dress');
            expect(text.length).toBe(9);
            //The code below would work if this classes structure was consistent.
            // expect(text[0]).toEqual('Styles');
            // expect(text[1]).toEqual('Dressy');
            // expect(text[2]).toEqual('Casual');
            // expect(text[3]).toEqual('Compositions');
            // expect(text[4]).toEqual('Viscose');
            // expect(text[5]).toEqual('Viscose');
            // expect(text[6]).toEqual('Properties');
            // expect(text[7]).toEqual('Short Dress');
            // expect(text[8]).toEqual('Maxi Dress');
        });
        //Step 7 Click Add to cart for one of the Items
        //Puts all 'Add to cart' buttons in an array
        addToCart(0, true);
        //Step 8 Click the Continue Shopping button
        element(by.css("span[title='Continue shopping']")).click();
        //Hovers mouse over shopping cart drop down tab
        browser.actions().mouseMove(webElements.shopCart).perform().then(async () => {
            browser.sleep(500);
            //Validates shopping cart items(array)
            expect(element.all(by.css("dl[class*='products']")).count()).toBe(1);
        })
    });
    it('Compare Items from Grid view', async function () {

        //Step 1 Navigate to http://automationpractice.com/index.php
        navigate();
        //Step 2 Click on the Dresses tab. Ensure the view is in Grid View
        webElements.dressBtn.click();
        browser.sleep(1000);
        //Change Grid view to List view
        await element(by.className("icon-th-large")).click();
        //Step 3 Hover over and click on the `Add to Compare` button for at least two different items
        browser.element.all(by.className("compare")).then(function (compareArr) {
            browser.actions().mouseMove(compareArr[0]).perform().then(function () {
                browser.sleep(1000);
                compareArr[0].click();
            });
            browser.sleep(1000);
            browser.actions().mouseMove(compareArr[1]).perform().then(function () {
                browser.sleep(1000);
                compareArr[1].click();
            });
        });
        //Step 4  Click on the Compare button
        //warning' more than one element found for locator By(css selector, .compare-form)'
        //reasoning: their exists 2 compare buttons so both will work doesnt matter which is clicked
        element(by.className("bt_compare")).click();
        browser.sleep(1000);
        //Step 5 Validate the content of the Product Comparison Page
        element.all(by.css("td[class*='comparison_feature']")).getText().then(function (text) {
            //Goes through array and checks if all strings are contained within the array
            expect(text).toContain('Styles');
            expect(text).toContain('Dressy');
            expect(text).toContain('Colorful Dress');
            expect(text).toContain('Compositions');
            expect(text).toContain('Cotton');
            expect(text).toContain('Viscose');
            expect(text).toContain('Properties');
            expect(text).toContain('Short Dress');
            expect(text).toContain('Girly');
            expect(text.length).toBe(9);
        });
        //Step 6 Click Add to cart for one of the Items
        //Step 7 Click the Proceed to checkout
        addToCart(0, false); //<--step 6&7
    });
});
