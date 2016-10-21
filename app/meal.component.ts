import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal',
  template: `
    <div class="component">
      <h3>{{ selectedMeal.name }}: {{ selectedMeal.calories }} calories</h3>
      <h4>{{ selectedMeal.details }}</h4>
      <button (click)="sendRequestToOpenEditorUpwardsToMealList()">Edit</button>
    </div>
  `
})
export class MealComponent {
  @Input() selectedMeal: Meal;
  @Output() openEditorSender = new EventEmitter();

  sendRequestToOpenEditorUpwardsToMealList() {
    this.openEditorSender.emit(this.selectedMeal);
  }
}
