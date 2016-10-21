import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div class="component">
      <h2>Add Meal:</h2>
      <div class="form-group">
        <label for="new-meal_input-name">Enter Meal Name:</label>
        <input id="new-meal_input-name" type="text" #newName>
      </div>
      <div class="form-group">
        <label for="new-meal_input-details">Enter Meal Details:</label>
        <input id="new-meal_input-details" type="text" #newDetails>
      </div>
      <div class="form-group">
        <label for="new-meal_input-calories">Enter Calorie Count:</label>
        <input id="new-meal_input-calories" type="number" min="0" #newCalorieCount>
      </div>
      <div>
        <button (click)="
          addClicked(newName.value, newDetails.value, newCalorieCount.value);
          newName.value='';
          newDetails.value='';
          newCalorieCount.value='';
        ">Add Meal to List</button>
      </div>
    </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();

  public newMealToAdd: Meal = null;

  addClicked(name: string, details: string, calories: number) {
    this.newMealToAdd = new Meal(name, details, calories);
    this.newMealSender.emit(this.newMealToAdd);
  }
}
