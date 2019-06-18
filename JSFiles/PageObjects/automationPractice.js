"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class automationPractice {
    constructor() {
        this.dressBtn = protractor_1.element(protractor_1.by.linkText("DRESSES"));
        this.summerDress = protractor_1.element(protractor_1.by.xpath("//*[@id=\"subcategories\"]/ul/li[3]/div[1]/a/img"));
        this.selectDropDown = protractor_1.element(protractor_1.by.id("uniform-group_1"));
        this.selectMedium = protractor_1.element.all(protractor_1.by.tagName("option"));
        this.selectT = protractor_1.element(protractor_1.by.css("a[title='Women']"));
        this.selectBlue = protractor_1.element(protractor_1.by.id("color_2"));
        this.quantityBox = protractor_1.element(protractor_1.by.id("quantity_wanted"));
        this.shopCart = protractor_1.element(protractor_1.by.className("shopping_cart")).element(protractor_1.by.tagName("a"));
        this.amount = protractor_1.element(protractor_1.by.className('price cart_block_total ajax_block_cart_total'));
    }
}
exports.automationPractice = automationPractice;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b21hdGlvblByYWN0aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vUGFnZU9iamVjdHMvYXV0b21hdGlvblByYWN0aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMkNBQTBGO0FBRzFGLE1BQWEsa0JBQWtCO0lBZ0IzQjtRQUVJLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsT0FBTyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztJQUd4RixDQUFDO0NBQ0o7QUE5QkQsZ0RBOEJDIn0=