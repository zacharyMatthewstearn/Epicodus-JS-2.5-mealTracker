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
var core_1 = require('@angular/core');
var meal_model_1 = require('./meal.model');
var NewMealComponent = (function () {
    function NewMealComponent() {
        this.newMealSender = new core_1.EventEmitter();
        this.newMealToAdd = null;
    }
    NewMealComponent.prototype.addClicked = function (name, details, calories) {
        this.newMealToAdd = new meal_model_1.Meal(name, details, calories);
        this.newMealSender.emit(this.newMealToAdd);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NewMealComponent.prototype, "newMealSender", void 0);
    NewMealComponent = __decorate([
        core_1.Component({
            selector: 'new-meal',
            template: "\n    <div class=\"component\">\n      <h2>Add Meal:</h2>\n      <div class=\"form-group\">\n        <label for=\"new-meal_input-name\">Enter Meal Name:</label>\n        <input id=\"new-meal_input-name\" type=\"text\" #newName>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"new-meal_input-details\">Enter Meal Details:</label>\n        <input id=\"new-meal_input-details\" type=\"text\" #newDetails>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"new-meal_input-calories\">Enter Calorie Count:</label>\n        <input id=\"new-meal_input-calories\" type=\"number\" min=\"0\" #newCalorieCount>\n      </div>\n      <div>\n        <button (click)=\"\n          addClicked(newName.value, newDetails.value, newCalorieCount.value);\n          newName.value='';\n          newDetails.value='';\n          newCalorieCount.value='';\n        \">Add Meal to List</button>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewMealComponent);
    return NewMealComponent;
}());
exports.NewMealComponent = NewMealComponent;
//# sourceMappingURL=new-meal.component.js.map