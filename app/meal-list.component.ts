import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class="component">
      <div *ngFor="let currentMeal of childMealList | calories:selectedCalorieCount">
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
  @Input() selectedCalorieCountFilterStepTwo: string;
  @Input() mealToEdit: Meal;
  @Input() selectedCalorieCount: string;
  @Output() openEditorSenderStepTwo = new EventEmitter();

  sendRequestToOpenEditorUpwardsToApp(mealToEdit: Meal) {
    this.openEditorSenderStepTwo.emit(mealToEdit);
  }
  onChangeCalorieCount(optionFromMenu) {
    this.selectedCalorieCount = optionFromMenu;
    console.log(this.selectedCalorieCount);
  }
}
