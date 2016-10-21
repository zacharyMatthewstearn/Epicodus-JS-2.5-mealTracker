import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal"  class="component">
      <h2>Edit Meal</h2>
      <div class="form-group">
        <label for="edit-meal_input-name">Enter Meal Name:</label>
        <input id="edit-meal_input-name" type="text" [(ngModel)]="childSelectedMeal.name">
      </div>
      <div class="form-group">
        <label for="edit-meal_input-details">Enter Meal Details:</label>
        <input id="edit-meal_input-details" type="text" [(ngModel)]="childSelectedMeal.details">
      </div>
      <div class="form-group">
        <label for="edit-meal_input-calories">Enter Calorie Count:</label>
        <input id="edit-meal_input-calories" type="number" min="0" [(ngModel)]="childSelectedMeal.calories">
      </div>
      <button (click)="doneEditing()">Done</button>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneEditingSender = new EventEmitter();

  doneEditing() {
    this.doneEditingSender.emit();
  }
}
