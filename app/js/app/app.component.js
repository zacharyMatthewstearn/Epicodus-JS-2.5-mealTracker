"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var meal_model_1 = require("./meal.model");
var AppComponent = (function () {
    function AppComponent() {
        this.masterMealList = [
            new meal_model_1.Meal('Food1', 'Details1', 100),
            new meal_model_1.Meal('Food2', 'Details2', 200),
            new meal_model_1.Meal('Food3', 'Details3', 300),
            new meal_model_1.Meal('Food4', 'Details4', 400)
        ];
        this.selectedMeal = null;
    }
    AppComponent.prototype.openEditor = function (clickedMeal) {
        // console.log("3" + clickedMeal);
        this.selectedMeal = clickedMeal;
    };
    AppComponent.prototype.closeEditor = function () {
        this.selectedMeal = null;
    };
    AppComponent.prototype.submitNewMeal = function (newMealFromChild) {
        this.masterMealList.push(newMealFromChild);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <div class=\"root-component\">\n      <div class=\"jumbotron\">\n        <div class=\"container\">\n          <h1>Zack's Super-Fantastic Meal Tracker App</h1>\n        </div>\n      </div>\n      <div class=\"containter\">\n        <div class=\"row\">\n          <div class=\"col col-md-6\">\n            <div class=\"inner-box\">\n              <meal-list\n                [childMealList]=\"masterMealList\"\n                (openEditorSenderStepTwo)=\"openEditor($event)\"\n              ></meal-list>\n            </div>\n          </div>\n          <div class=\"col col-md-6\">\n            <div class=\"inner-box\">\n              <edit-meal\n                [childSelectedMeal]=\"selectedMeal\"\n                (doneClickedSender)=\"closeEditor()\"\n              ></edit-meal>\n              <new-meal\n                (newMealSender)=\"submitNewMeal($event)\"\n              ></new-meal>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map