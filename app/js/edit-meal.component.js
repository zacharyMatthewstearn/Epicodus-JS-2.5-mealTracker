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
var EditMealComponent = (function () {
    function EditMealComponent() {
        this.doneEditingSender = new core_1.EventEmitter();
    }
    EditMealComponent.prototype.doneEditing = function () {
        this.doneEditingSender.emit();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', meal_model_1.Meal)
    ], EditMealComponent.prototype, "childSelectedMeal", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], EditMealComponent.prototype, "doneEditingSender", void 0);
    EditMealComponent = __decorate([
        core_1.Component({
            selector: 'edit-meal',
            template: "\n    <div *ngIf=\"childSelectedMeal\"  class=\"component\">\n      <h2>Edit Meal</h2>\n      <div class=\"form-group\">\n        <label for=\"edit-meal_input-name\">Enter Meal Name:</label>\n        <input id=\"edit-meal_input-name\" type=\"text\" [(ngModel)]=\"childSelectedMeal.name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"edit-meal_input-details\">Enter Meal Details:</label>\n        <input id=\"edit-meal_input-details\" type=\"text\" [(ngModel)]=\"childSelectedMeal.details\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"edit-meal_input-calories\">Enter Calorie Count:</label>\n        <input id=\"edit-meal_input-calories\" type=\"number\" min=\"0\" [(ngModel)]=\"childSelectedMeal.calories\">\n      </div>\n      <button (click)=\"doneEditing()\">Done</button>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditMealComponent);
    return EditMealComponent;
}());
exports.EditMealComponent = EditMealComponent;
//# sourceMappingURL=edit-meal.component.js.map