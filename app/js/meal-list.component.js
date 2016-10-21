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
var MealListComponent = (function () {
    function MealListComponent() {
    }
    MealListComponent = __decorate([
        core_1.Component({
            selector: 'meal-list',
            template: "\n    <!--<div class=\"component\">\n      <div>\n        <div class=\"row filters\">\n          <div class=\"col col-xs-6\">\n            <h3>Filter List By:</h3>\n          </div>\n          <div class=\"col col-xs-6\">\n            <div class=\"form-group\">\n              <label for=\"filter-completion\">Completion:</label>\n              <select id=\"filter-completion\" (change)=\"onChangeCompleteness($event.target.value)\" class=\"filter\">\n                <option value=\"notDone\" selected>Show Not Done</option>\n                <option value=\"isDone\">Show Done</option>\n                <option value=\"all\">Show All</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"filter-priority\">Priority:</label>\n              <select id=\"filter-priority\" (change)=\"onChangePriority($event.target.value)\" class=\"filter\">\n                <option value=\"All\" selected>All</option>\n                <option value=\"High\">High</option>\n                <option value=\"Medium\">Medium</option>\n                <option value=\"Low\">Low</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"filter-category\">Category:</label>\n              <select id=\"filter-category\" (change)=\"onChangeCategory($event.target.value)\" class=\"filter\">\n                <option value=\"All\" selected>All</option>\n                <option value=\"Work\">Work</option>\n                <option value=\"Home\">Home</option>\n                <option value=\"Hobby\">Hobby</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div *ngFor=\"let currentMeal of childMealList | completeness:selectedCompleteness | priority:selectedPriority | category:selectedCategory\">\n        <meal-display\n          [meal]=\"currentMeal\"\n          (editClickSender)=\"editButtonStepTwo($event)\"\n        ></meal-display>\n      </div>\n    </div>-->\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MealListComponent);
    return MealListComponent;
}());
exports.MealListComponent = MealListComponent;
//# sourceMappingURL=meal-list.component.js.map