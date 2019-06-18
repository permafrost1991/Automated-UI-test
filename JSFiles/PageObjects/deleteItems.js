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
let deleteItems = function () {
    this.addToCart = function (typeOfDress) {
        protractor_1.browser.actions().mouseMove(protractor_1.element(protractor_1.by.css("[title='" + typeOfDress + "']")).perform().then(() => __awaiter(this, void 0, void 0, function* () {
            yield this.browser.element(protractor_1.by.css("a[class='button ajax_add_to_cart_button btn btn-default']")).click();
            yield this.browser.element(protractor_1.by.css("span[title='Continue shopping']")).click();
        })));
    };
};
module.exports = new deleteItems();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlSXRlbXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9kZWxldGVJdGVtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQWdEO0FBRWhELElBQUksV0FBVyxHQUFHO0lBRWQsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFTLFdBQVc7UUFDakMsb0JBQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBTyxFQUFFO1lBQ2pHLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyREFBMkQsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUFTLENBQUMsQ0FBQSxDQUMvRixDQUFDLENBQUE7SUFDTixDQUFDLENBQUE7QUFFTCxDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMifQ==