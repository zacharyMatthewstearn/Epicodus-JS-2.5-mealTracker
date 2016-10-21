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
var NewMealComponent = (function () {
    function NewMealComponent() {
    }
    NewMealComponent = __decorate([
        core_1.Component({
            selector: 'new-meal',
            template: "\n    <!--<div class=\"component\">\n      <h2>New Meal:</h2>\n      <div class=\"form-group\">\n        <label for=\"new-meal_input-description\">Enter Meal Description:</label>\n        <input id=\"new-meal_input-description\" type=\"text\" #newDescription>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"new-meal_input-id\">Enter Meal ID:</label>\n        <input id=\"new-meal_input-id\" type=\"text\" #newId>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"new-meal_select-priority\">Priority:</label>\n        <select id=\"new-meal_select-priority\" #newPriority>\n          <option value=\"high\">High</option>\n          <option value=\"medium\">Medium</option>\n          <option value=\"low\">Low</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"new-meal_select-priority\">Category:</label>\n        <select id=\"new-meal_select-category\" #newCategory>\n          <option value=\"Work\">Work</option>\n          <option value=\"Hobby\">Hobby</option>\n          <option value=\"Home\">Home</option>\n        </select>\n      </div>\n      <div>\n        <button (click)=\"\n          addClicked(newDescription.value, newPriority.value, newId.value, newCategory.value);\n          newPriority.value='';\n          newCategory.value='';\n          newDescription.value='';\n          newId.value='';\n        \">Add Meal to List</button>\n      </div>\n    </div>-->\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NewMealComponent);
    return NewMealComponent;
}());
exports.NewMealComponent = NewMealComponent;
//# sourceMappingURL=new-meal.component.js.map