"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const automationPractice_1 = require("./PageObjects/automationPractice");
describe('Protractor testing', function () {
    return __awaiter(this, void 0, void 0, function* () {
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
        let webElements = new automationPractice_1.automationPractice();
        function navigate() {
            protractor_1.browser.waitForAngularEnabled(false);
            protractor_1.browser.get("http://automationpractice.com/index.php");
            protractor_1.browser.sleep(3000);
        }
        function addToCart(indexNumber, contShopping) {
            protractor_1.element.all(protractor_1.by.css("a[title='Add to cart']")).get(indexNumber).click().then(function () {
                if (contShopping === true) {
                    protractor_1.browser.sleep(3000);
                    protractor_1.element(protractor_1.by.css("span[title='Continue shopping']")).click();
                }
                else {
                    protractor_1.browser.sleep(3000);
                    protractor_1.element(protractor_1.by.css("a[title='Proceed to checkout']")).click();
                }
            });
        }
        function compareValidation(className, textVal1, textVal2, textVal3) {
            protractor_1.browser.element.all(protractor_1.by.className(className)).getText().then(function (text) {
                expect(text[0]).toEqual(textVal1);
                expect(text[1]).toEqual(textVal2);
                expect(text[2]).toEqual(textVal3);
            });
        }
        it('Filter and Add items to cart', () => __awaiter(this, void 0, void 0, function* () {
            //step 1 Navigate to http://automationpractice.com/index.php
            navigate();
            //step 2 Click on dresses Tab
            yield webElements.dressBtn.click();
            //step Filter for a Summer Dress and select a dress that is Yellow, and is less then $20
            yield webElements.summerDress.click();
            //Step 4 clicks the yellow option and size medium then click the Add to Cart button dress
            let farYellowDress = yield protractor_1.element(protractor_1.by.css("img[src='http://automationpractice.com/img/p/1/2/12-home_default.jpg']"));
            protractor_1.browser.actions().mouseMove(farYellowDress).mouseMove({ x: 0, y: -100 }).doubleClick().perform();
            yield webElements.selectDropDown.click();
            yield webElements.selectMedium.get(1).click();
            //add to shopping cart
            protractor_1.browser.element(protractor_1.by.name("Submit")).click();
            protractor_1.browser.sleep(2000);
            //step 5 clicks the continue shopping button
            yield protractor_1.browser.element(protractor_1.by.css("span[title='Continue shopping']")).click();
            protractor_1.browser.sleep(3000);
            //Step 6 Hover over the 'Women' tab and select the 'T-shirt' option
            //hover over
            yield protractor_1.browser.actions().mouseMove(webElements.selectT).perform().then(() => __awaiter(this, void 0, void 0, function* () {
                //selects T-shirts
                yield protractor_1.browser.sleep(1000);
                yield protractor_1.browser.element(protractor_1.by.css("a[title='T-shirts']")).click();
                yield protractor_1.browser.sleep(1000);
            }));
            //Step 7 Select a blue t-shirt
            yield protractor_1.browser.actions().mouseMove(webElements.selectBlue).perform();
            yield webElements.selectBlue.click();
            yield protractor_1.browser.sleep(2000);
            //step 8 Change quantity to 2 by entering text, select the blue color shirt, and size small
            //Then click Add to Cart button
            yield webElements.quantityBox.clear().then(() => __awaiter(this, void 0, void 0, function* () {
                yield webElements.quantityBox.sendKeys("2");
                protractor_1.browser.sleep(4000);
            }));
            yield protractor_1.browser.element(protractor_1.by.id("color_14")).click();
            protractor_1.browser.sleep(1000);
            yield protractor_1.browser.element(protractor_1.by.name("Submit")).click();
            protractor_1.browser.sleep(3000);
            //step 9 Click the continue shopping button
            yield protractor_1.$$("span[title='Continue shopping']").click();
            protractor_1.browser.sleep(2000);
            //adds 1 to quantity by clicking + button
            yield protractor_1.$$("[class='btn btn-default button-plus product_quantity_up'").click();
            yield protractor_1.browser.element(protractor_1.by.id("color_13")).click().then(() => __awaiter(this, void 0, void 0, function* () {
                yield protractor_1.browser.element(protractor_1.by.name("Submit")).click();
            }));
            protractor_1.browser.sleep(2000);
            yield protractor_1.$$("a[title='Proceed to checkout']").click();
        }));
        it('Delete Items', function () {
            //Step 1 Navigate to http://automationpractice.com/index.php
            navigate();
            //Step 2 Add multiple items to your cart and validate the Cart dropdown on the top of the page
            addToCart(1, true);
            addToCart(2, true);
            addToCart(3, true);
            //Validation processes
            protractor_1.$$('.products dt').then(function (items) {
                expect(items.length).toBe(3);
                //comes back with an error if isn't 3
            });
            //step 3 Hover over the button and click the x next to an item to remove the item
            protractor_1.browser.actions().mouseMove(webElements.shopCart).perform().then(() => __awaiter(this, void 0, void 0, function* () {
                //Creates an ElementArrayFinder array of remove link X elements
                protractor_1.browser.sleep(1000);
                yield protractor_1.element.all(protractor_1.by.className("ajax_cart_block_remove_link")).then(function (items) {
                    protractor_1.browser.sleep(1000);
                    //deletes the index[2] of the array of elements
                    items[2].click();
                    protractor_1.browser.sleep(1000);
                    //step 4 Validate the content of the cart dropdown
                    webElements.amount.getText().then(function (text) {
                        //Will return error if value is incorrect
                        expect(text).toEqual("$55.00");
                        protractor_1.browser.sleep(5000);
                    });
                });
            }));
        });
        it('Compare Items from List View', function () {
            return __awaiter(this, void 0, void 0, function* () {
                //Step 1 Navigate to http://automationpractice.com/index.php
                navigate();
                //step 2 Click on "Dress" Tab
                yield webElements.dressBtn.click();
                //Step 3 Change Grid view to List view
                protractor_1.element(protractor_1.by.className("icon-th-list")).click();
                //step 4 Click on the `Add to Compare` button for at least two different items
                protractor_1.browser.element.all(protractor_1.by.className("add_to_compare")).then(function (compare) {
                    compare[1].click();
                    protractor_1.browser.sleep(700);
                    compare[2].click();
                });
                //step 5 Click on the Compare button
                protractor_1.element(protractor_1.by.className("bt_compare")).click();
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
                protractor_1.element.all(protractor_1.by.css("td[class*='comparison_feature']")).getText().then(function (text) {
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
                protractor_1.element(protractor_1.by.css("span[title='Continue shopping']")).click();
                //Hovers mouse over shopping cart drop down tab
                protractor_1.browser.actions().mouseMove(webElements.shopCart).perform().then(() => __awaiter(this, void 0, void 0, function* () {
                    protractor_1.browser.sleep(500);
                    //Validates shopping cart items(array)
                    expect(protractor_1.element.all(protractor_1.by.css("dl[class*='products']")).count()).toBe(1);
                }));
            });
        });
        it('Compare Items from Grid view', function () {
            return __awaiter(this, void 0, void 0, function* () {
                //Step 1 Navigate to http://automationpractice.com/index.php
                navigate();
                //Step 2 Click on the Dresses tab. Ensure the view is in Grid View
                webElements.dressBtn.click();
                protractor_1.browser.sleep(1000);
                //Change Grid view to List view
                yield protractor_1.element(protractor_1.by.className("icon-th-large")).click();
                //Step 3 Hover over and click on the `Add to Compare` button for at least two different items
                protractor_1.browser.element.all(protractor_1.by.className("compare")).then(function (compareArr) {
                    protractor_1.browser.actions().mouseMove(compareArr[0]).perform().then(function () {
                        protractor_1.browser.sleep(1000);
                        compareArr[0].click();
                    });
                    protractor_1.browser.sleep(1000);
                    protractor_1.browser.actions().mouseMove(compareArr[1]).perform().then(function () {
                        protractor_1.browser.sleep(1000);
                        compareArr[1].click();
                    });
                });
                //Step 4  Click on the Compare button
                //warning' more than one element found for locator By(css selector, .compare-form)'
                //reasoning: their exists 2 compare buttons so both will work doesnt matter which is clicked
                protractor_1.element(protractor_1.by.className("bt_compare")).click();
                protractor_1.browser.sleep(1000);
                //Step 5 Validate the content of the Product Comparison Page
                protractor_1.element.all(protractor_1.by.css("td[class*='comparison_feature']")).getText().then(function (text) {
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
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQTJEO0FBQzNELHlFQUFvRTtBQUVwRSxRQUFRLENBQUMsb0JBQW9CLEVBQUU7O1FBRTNCOzs7OztVQUtFO1FBQ0YseUJBQXlCO1FBQ3pCLDREQUE0RDtRQUM1RCw4REFBOEQ7UUFDOUQsa0RBQWtEO1FBQ2xELDJCQUEyQjtRQUMzQiw0Q0FBNEM7UUFDNUMsMkJBQTJCO1FBQzNCLDhEQUE4RDtRQUM5RCxNQUFNO1FBQ04sSUFBSSxXQUFXLEdBQUcsSUFBSSx1Q0FBa0IsRUFBRSxDQUFDO1FBQzNDLFNBQVMsUUFBUTtZQUNiLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckMsb0JBQU8sQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUN2RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDO1FBRUQsU0FBUyxTQUFTLENBQUMsV0FBVyxFQUFFLFlBQVk7WUFDeEMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztnQkFDeEUsSUFBSSxZQUFZLEtBQUssSUFBSSxFQUFFO29CQUN2QixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDOUQ7cUJBQU07b0JBQ0gsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3BCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FB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