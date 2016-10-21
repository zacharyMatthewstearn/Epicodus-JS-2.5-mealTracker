import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'filter',
  template: `
    <div class="component">
      <div class="row">
        <div class="col col-xs-5">
          <h3>Filter List By:</h3>
        </div>
        <div class="col col-xs-7">
          <div class="form-group">
            <label for="filter-completion">Completion:</label>
            <select id="filter-completion" (change)="onChangeCalorieCount($event.target.value)" class="filter">
              <option value="all" selected>Show All</option>
              <option value="low">Show Low-Calorie Meals Only (under 500kcal)</option>
              <option value="high">Show High-Calorie Meals Only (500kcal and over)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  `
})
export class FilterComponent {
  @Input() childTaskList: Meal[];
  @Output() changeCaloriesFilterSender = new EventEmitter();

  public selectedCalorieCount: string = "all";

  onChangeCalorieCount(optionFromMenu) {
    this.selectedCalorieCount = optionFromMenu;
    this.changeCaloriesFilterSender.emit(this.selectedCalorieCount);
  }
}
