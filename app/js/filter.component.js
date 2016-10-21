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
var FilterComponent = (function () {
    function FilterComponent() {
        this.changeCaloriesFilterSender = new core_1.EventEmitter();
        this.selectedCalorieCount = "all";
    }
    FilterComponent.prototype.onChangeCalorieCount = function (optionFromMenu) {
        this.selectedCalorieCount = optionFromMenu;
        this.changeCaloriesFilterSender.emit(this.selectedCalorieCount);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], FilterComponent.prototype, "childTaskList", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], FilterComponent.prototype, "changeCaloriesFilterSender", void 0);
    FilterComponent = __decorate([
        core_1.Component({
            selector: 'filter',
            template: "\n    <div class=\"component\">\n      <div class=\"form-group\">\n        <h2>Filter Meals by Calorie Count:</h2>\n        <select id=\"filter-completion\" (change)=\"onChangeCalorieCount($event.target.value)\" class=\"filter\">\n          <option value=\"all\" selected>Show All</option>\n          <option value=\"low\">Show Low-Calorie Meals Only (under 500kcal)</option>\n          <option value=\"high\">Show High-Calorie Meals Only (500kcal and over)</option>\n        </select>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FilterComponent);
    return FilterComponent;
}());
exports.FilterComponent = FilterComponent;
//# sourceMappingURL=filter.component.js.map