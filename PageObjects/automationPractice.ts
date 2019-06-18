import {browser, by, element, ElementArrayFinder, ElementFinder, until} from "protractor";


export class automationPractice {

    dressBtn:ElementFinder;
    summerDress:ElementFinder;
    selectDropDown:ElementFinder;
    selectT:ElementFinder;
    selectBlue:ElementFinder;
    quantityBox:ElementFinder;
    shopCart:ElementFinder;
    amount:ElementFinder;
    selectMedium:ElementArrayFinder;





    constructor(){

        this.dressBtn = element(by.linkText("DRESSES"));
        this.summerDress = element(by.xpath("//*[@id=\"subcategories\"]/ul/li[3]/div[1]/a/img"));
        this.selectDropDown = element(by.id("uniform-group_1"));
        this.selectMedium = element.all(by.tagName("option"));
        this.selectT = element(by.css("a[title='Women']"));
        this.selectBlue = element(by.id("color_2"));
        this.quantityBox= element(by.id("quantity_wanted"));
        this.shopCart = element(by.className("shopping_cart")).element(by.tagName("a"));
        this.amount = element(by.className('price cart_block_total ajax_block_cart_total'));


    }
}



