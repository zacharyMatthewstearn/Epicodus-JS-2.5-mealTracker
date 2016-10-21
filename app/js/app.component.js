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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"root-component\">\n      <div class=\"jumbotron\">\n        <div class=\"container\">\n          <h1>Zack's Super-Fantastic Meal Tracker App</h1>\n        </div>\n      </div>\n      <!--<div class=\"containter\">\n        <div class=\"row\">\n          <div class=\"col col-md-6\">\n            <div class=\"inner-box\">\n              <meal-list\n                [childMealList]=\"masterMealList\"\n                (editClickIntermediarySender)=\"showDetails($event)\"\n              ></meal-list>\n            </div>\n          </div>\n          <div class=\"col col-md-6\">\n            <div class=\"inner-box\">\n              <edit-meal\n                [childSelectedMeal]=\"selectedMeal\"\n                (doneClickedSender)=\"finishedEditing()\"\n              ></edit-meal>\n              <new-meal\n                (newMealSender)=\"addMeal($event)\"\n              ></new-meal>\n            </div>\n          </div>\n        </div>\n      </div>-->\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map