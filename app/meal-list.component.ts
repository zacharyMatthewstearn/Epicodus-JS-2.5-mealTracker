import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="component">
      <!--<div>
        <div class="row filters">
          <div class="col col-xs-6">
            <h3>Filter List By:</h3>
          </div>
          <div class="col col-xs-6">
            <div class="form-group">
              <label for="filter-completion">Completion:</label>
              <select id="filter-completion" (change)="onChangeCompleteness($event.target.value)" class="filter">
                <option value="notDone" selected>Show Not Done</option>
                <option value="isDone">Show Done</option>
                <option value="all">Show All</option>
              </select>
            </div>
            <div class="form-group">
              <label for="filter-priority">Priority:</label>
              <select id="filter-priority" (change)="onChangePriority($event.target.value)" class="filter">
                <option value="All" selected>All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>
            <div class="form-group">
              <label for="filter-category">Category:</label>
              <select id="filter-category" (change)="onChangeCategory($event.target.value)" class="filter">
                <option value="All" selected>All</option>
                <option value="Work">Work</option>
                <option value="Home">Home</option>
                <option value="Hobby">Hobby</option>
              </select>
            </div>
          </div>
        </div>
      </div>-->
      <div *ngFor="let currentMeal of childMealList">
        <meal
          [selectedMeal]="currentMeal"
          (openEditorSender)="sendRequestToOpenEditorUpwardsToApp($event)"
        ></meal>
      </div>
    </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Input() mealToEdit: Meal;
  // @Output() clickSender = new EventEmitter();
  @Output() openEditorSenderStepTwo = new EventEmitter();
  // public selectedCalorieCount: string = "all";

  sendRequestToOpenEditorUpwardsToApp(mealToEdit: Meal) {
    // console.log("2" + mealToEdit);
    this.openEditorSenderStepTwo.emit(mealToEdit);
  }
  onChangeCalorieCount(optionFromMenu) {
    // this.selectedCalorieCount = optionFromMenu;
    // console.log(this.selectedCalorieCount);
  }
}
