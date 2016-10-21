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
var EditMealComponent = (function () {
    function EditMealComponent() {
    }
    EditMealComponent = __decorate([
        core_1.Component({
            selector: 'edit-meal',
            template: "\n    <!--<div *ngIf=\"childSelectedMeal\"  class=\"component\">\n      <h1>Edit Meal</h1>\n      <div>\n        <label>Enter Meal Description:</label>\n        <input [(ngModel)]=\"childSelectedMeal.description\">\n      </div>\n      <select (change)=\"onChangePriority($event.target.value)\">\n        <option value=\"high\">High</option>\n        <option value=\"medium\">Medium</option>\n        <option value=\"low\">Low</option>\n      </select>\n      <select (change)=\"onChangeCategory($event.target.value)\">\n        <option value=\"work\">Work</option>\n        <option value=\"hobby\">Hobby</option>\n        <option value=\"home\">Home</option>\n      </select>\n      <div>\n        <label>Enter Meal ID:</label>\n        <input [(ngModel)]=\"childSelectedMeal.id\">\n        <button (click)=\"doneClicked()\">Done</button>\n      </div>\n    </div>-->\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], EditMealComponent);
    return EditMealComponent;
}());
exports.EditMealComponent = EditMealComponent;
//# sourceMappingURL=edit-meal.component.js.map