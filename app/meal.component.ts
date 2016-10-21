import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal',
  template: `
    <div class="component">
      <p>{{ selectedMeal.name }}</p>
      <p>{{ selectedMeal.details }}</p>
      <p>{{ selectedMeal.calories }} calories</p>
      <button (click)="sendRequestToOpenEditorUpwardsToMealList()">Edit</button>
    </div>
  `
})
export class MealComponent {
  @Input() selectedMeal: Meal;
  @Output() openEditorSender = new EventEmitter();

  sendRequestToOpenEditorUpwardsToMealList() {
    // console.log("1" + this.selectedMeal);
    this.openEditorSender.emit(this.selectedMeal);
  }
}
